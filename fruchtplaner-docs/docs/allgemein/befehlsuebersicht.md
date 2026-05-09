# Befehlsübersicht

## Übersicht

(alphabetisch geordnet)

| Befehl                      | Beschreibung                                                             | Benötigte Berechtigung zum Ausführen        |
| --------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| `/admin add`                | Füge einen Bot-Admin (User oder Rolle) hinzu.                            | <Badge type="danger" text="Server-Admin" /> |
| `/admin remove`             | Entferne einen Bot-Admin (User oder Rolle).                              | <Badge type="danger" text="Server-Admin" /> |
| `/hilfe`                    | Gibt einen Link zum Bot-Guide zurück.                                    | <Badge type="info" text="Jeder" />          |
| `/kalender_setup`           | Richte einen Kalender für diesen Server ein oder aktualisiere ihn.       | <Badge type="danger" text="Server-Admin" /> |
| `/kategorie bearbeiten`     | Bearbeite Name und/oder Farbe einer Kategorie.                           | <Badge type="danger" text="Server-Admin" /> |
| `/kategorie erstellen`      | Erstelle eine neue Kategorie.                                            | <Badge type="danger" text="Server-Admin" /> |
| `/kategorie löschen`        | Lösche eine Kategorie.                                                   | <Badge type="danger" text="Server-Admin" /> |
| `/log_channel entfernen`    | Entferne den Log-Kanal für (Team-)Termine.                               | <Badge type="danger" text="Server-Admin" /> |
| `/log_channel setup`        | Richte den Log-Kanal für (Team-)Termine ein.                             | <Badge type="danger" text="Server-Admin" /> |
| `/reminder`                 | Ruft alle verfügbaren Optionen für Reminder auf.                         | <Badge type="info" text="Jeder" />          |
| `/reminder_setup entfernen` | Entfernt den Reminder-Kanal von diesem Server.                           | <Badge type="danger" text="Server-Admin" /> |
| `/reminder_setup kanal`     | Richtet den Reminder-Thread-Kanal für diesen Server ein.                 | <Badge type="danger" text="Server-Admin" /> |
| `/server_config`            | Zeige die vollständige Bot-Konfiguration dieses Servers und global.      | <Badge type="danger" text="Server-Admin" /> |
| `/staff_role add`           | Füge eine Staff-Rolle hinzu.                                             | <Badge type="danger" text="Server-Admin" /> |
| `/staff_role remove`        | Entziehe einer Rolle den Staff-Status.                                   | <Badge type="danger" text="Server-Admin" /> |
| `/statistiken`              | Zeige Statistiken über Netzwerk, Bot, Server, Modul und Versionen.       | <Badge type="warning" text="Bot-Admin" />   |
| `/template erstellen`       | Neues Beschreibungs-Template erstellen                                   | <Badge type="danger" text="Server-Admin" /> |
| `/template liste`           | Alle Templates anzeigen - Details & Zuweisungen, Bearbeiten und Löschen. | <Badge type="danger" text="Server-Admin" /> |
| `/template zuweisen`        | Template einem Termin oder Reminder zuweisen.                            | <Badge type="danger" text="Server-Admin" /> |
| `/termin`                   | Ruft alle verfügbaren Optionen für Team-Termine auf                      | <Badge type="tip" text="Staff" />           |
| `/termin_export`            | Ermöglicht den Export bestimmter Termine in deinen Google Kalender.      | <Badge type="tip" text="Staff" />           |

## Berechtigungshierarchie

::: info Allgemeine Hierarchie (höchste zuerst)
| Stufe | Berechtigung | Beschreibung |
|-------|-------------|--------------|
| 1 | <Badge type="danger" text="Server-Admin" /> | Discord-Administrator-Berechtigung auf dem Server |
| 2 | <Badge type="warning" text="Bot-Admin" /> | Manuell vom Server-Admin im Bot eingetragen (User oder Rolle) |
| 3 | <Badge type="tip" text="Staff" /> | Hat eine eingetragene Staff-Rolle auf dem Server |
| — | <Badge type="info" text="Jeder" /> | / |
:::

:::info Kurze Auflistung aller Background-Checks
Es kann sein, dass du zwar die Staff-Berechtigung hast, aber trotzdem bspw. beim `/termin`-Befehl nicht alle Optionen für dich verfügbar sind.
<br>Das liegt daran, dass der Bot neben den normalen Abfragen, ob ein User einen bestimmten Befehl ausführen darf, ebenso prüft, ob ein User nun auch die Funktion xy im Termin-Verwaltungsmenü benutzen kann.
<br>Es existieren bspw. Checks / Überprüfungen wie u.a.:

- `can_edit_event`, in welchem überprüft wird, ob ein User einen Termin wirklich bearbeiten oder löschen darf; Hierbei: nur Server-Admins, Bot-Admins oder der Ersteller des Termins.
- `can_manage_events`, in welchem überprüft wird, ob ein User Termine verwalten darf; Hierbei: Server-Admins, Bot-Admins sowie Staff-Rolle.
  :::
