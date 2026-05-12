# Google Calendar Sync – Dokumentation

## Übersicht

Der Google Calendar Sync ermöglicht es, Team-Termine aus dem Bot automatisch in einen Google-Kalender zu synchronisieren. Die Zuordnung erfolgt über **Termin-Kategorien**, die bot-weit (global) gelten.

---

## Architektur

### Dateien

- **`cogs/google_sync.py`** – Discord-Slash-Commands (`/gsync starten`, `/gsync jetzt`, `/gsync beenden`)
- **`utils/google_calendar_sync.py`** – Kernlogik: Sync, Insert/Update/Delete von Google-Events, RRULE-Bereinigung
- **`core/database.py`** – Datenbankschema, Migrationen, Indizes

---

## Datenbank-Tabellen

### `google_calendar_sync`

Speichert, welcher Server welche Kategorie in welchen Kalender synct.

| Spalte | Typ | Beschreibung |
|---|---|---|
| `id` | INTEGER PK | Auto-Increment |
| `guild_id` | INTEGER | Discord-Server-ID |
| `calendar_id` | TEXT | Google Kalender-ID (z. B. `xxx@gmail.com`) |
| `category_id` | INTEGER | Referenz auf `categories.id` |
| `created_by` | INTEGER | User-ID des Einrichtenden |
| `created_at` | INTEGER | Unix-Timestamp |
| `is_active` | INTEGER | `1` = aktiv, `0` = deaktiviert |

- **Unique-Constraint:** `(guild_id, calendar_id, category_id)` – kein doppeltes Setup möglich
- **Foreign Key:** `category_id → categories(id) ON DELETE CASCADE`

### `google_event_mappings`

Speichert die Zuordnung zwischen Bot-Event-IDs und Google-Event-IDs.

| Spalte | Typ | Beschreibung |
|---|---|---|
| `guild_id` | INTEGER | Discord-Server-ID |
| `event_id` | INTEGER | Bot-interne Event-ID |
| `calendar_id` | TEXT | Ziel-Kalender-ID |
| `google_event_id` | TEXT | ID des Events in Google Calendar |
| `updated_at` | INTEGER | Letzter Sync-Zeitstempel |

- **Primary Key:** `(guild_id, event_id, calendar_id)`

---

## Slash-Commands

### `/gsync starten`

- Richtet den Sync für eine Kategorie ein
- Parameter:
  - `kalender` – Google Kalender-ID oder Kalender-Link (wird automatisch geparst)
  - `kategorie` – Autocomplete aus allen vorhandenen Kategorien
- Speichert den Eintrag in `google_calendar_sync`
- Führt sofort einen ersten Sync durch
- Nur für User mit `can_manage_events`-Berechtigung

### `/gsync jetzt`

- Manueller Sync-Anstoß für den aktuellen Server
- Synchronisiert alle aktiven Setups des Servers
- Nur für User mit `can_manage_events`-Berechtigung

### `/gsync beenden`

- Deaktiviert den Sync (setzt `is_active = 0`)
- Parameter:
  - `kalender` *(optional)* – nur diesen Kalender deaktivieren; ohne Angabe: alle
  - `google_events_loeschen` *(optional, bool)* – löscht auch bereits erstellte Google-Events
- Nur für User mit `can_manage_events`-Berechtigung

---

## Sync-Logik (`GoogleCalendarSync`)

### Ablauf eines Syncs

1. **`sync_guild(guild_id, category_id?)`**
   - Lädt alle aktiven Setups des Servers aus `google_calendar_sync`
   - Gruppiert nach `calendar_id`
   - Ruft für jeden Kalender `_sync_calendar()` auf

2. **`_sync_calendar(guild_id, calendar_id, category_ids)`**
   - Lädt alle aktiven, sichtbaren Events der übergebenen Kategorien
   - Vergleicht mit bereits gemappten Google-Events
   - Löscht Google-Events, deren Bot-Event nicht mehr existiert oder nicht mehr passt
   - Inserted oder updated alle aktuellen Events
   - Speichert/aktualisiert das Mapping in `google_event_mappings`

3. **`_event_body(event)`**
   - Erstellt den Google Calendar Event-Body (JSON)
   - Start = `event_time` (Europe/Berlin), Ende = Start + 1 Stunde
   - Beschreibung enthält: originale Beschreibung, Kategorie-Name, Bot-Event-ID
   - Bei `repeat_interval`: RRULE wird bereinigt und als `recurrence` gesetzt

### RRULE-Bereinigung

- Google Calendar API akzeptiert keine `BYHOUR`, `BYMINUTE`, `BYSECOND`-Felder
- `_clean_rrule()` entfernt diese Felder automatisch
- Normalisiert mehrfache oder fehlende `RRULE:`-Prefixe

### Google API-Aufrufe

- `_insert_event` – neues Event anlegen
- `_update_event` – vorhandenes Event aktualisieren; gibt `False` zurück wenn 404 (→ dann neu anlegen)
- `_delete_event` – Event löschen; 404 wird ignoriert (bereits gelöscht)

### Authentifizierung

- Service-Account via Google Cloud
- Konfiguration über Umgebungsvariable:
  - `GOOGLE_SERVICE_ACCOUNT_FILE` – Pfad zur JSON-Datei
  - `GOOGLE_SERVICE_ACCOUNT_JSON` – JSON-Inhalt direkt als String
- Benötigter Scope: `https://www.googleapis.com/auth/calendar.events`

---

## ⚠️ Bekanntes Problem: Kategorien sind global, Sync ist server-spezifisch

### Ist-Zustand

- Kategorien haben **keine `guild_id`** – sie sind bot-weit gültig
- Die `_load_events()`-Methode filtert Events jedoch mit `WHERE te.guild_id = ?`
- Damit werden nur Events des Servers synchronisiert, der den Sync eingerichtet hat

### Problem

- Wird ein Termin auf **Server B** in einer Kategorie erstellt, die auf **Server A** gesynct ist, wird dieser Termin **nicht synchronisiert**
- Beispiel aus der aktuellen DB: `guild_id = 903914279609171989` synct Kategorie 4 → Events aus anderen Servern in Kategorie 4 landen **nicht** im Kalender

### Lösung (empfohlen)

Die `_load_events()`-Methode muss den `guild_id`-Filter entfernen und stattdessen nur nach Kategorien filtern:

```python
# Aktuell (fehlerhaft für globale Kategorien):
WHERE te.guild_id = ? AND te.category_id IN (...)

# Korrekt (alle Server, nur nach Kategorie filtern):
WHERE te.is_active = 1 AND te.is_visible = 1 AND te.category_id IN (...)
```

> **Hinweis:** Falls der Sync weiterhin server-spezifisch bleiben soll (d. h. jeder Server synct nur seine eigenen Events in den Kalender), ist der aktuelle Stand korrekt. Sollen jedoch alle Termine einer Kategorie bot-weit in einen Kalender landen, muss der Filter angepasst werden.

---

## Kalender-ID parsen (`parse_calendar_id`)

- Akzeptiert rohe Kalender-IDs (z. B. `xxx@gmail.com`) oder Google-Kalender-Links
- Extrahiert automatisch den `cid`- oder `src`-Parameter aus der URL
- Gibt immer eine bereinigte Kalender-ID zurück

---

## Automatischer Sync

- Kein eingebauter Scheduler in `google_sync.py` – Sync wird ausgelöst durch:
  - `/gsync starten` (einmalig beim Setup)
  - `/gsync jetzt` (manuell)
  - Externe Aufrufe via `sync_guild()` (z. B. aus Event-Creation-Cog)
- Für automatischen Hintergrund-Sync: `sync_guild()` in einem `tasks.loop`-Task aufrufen
