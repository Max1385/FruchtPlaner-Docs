# Admin-Module

## Kalender auf deinem Server einrichten oder aktualisieren

Verwende den Befehl `/kalender_setup`. Folgendes musst du angeben:

- Einen Kanal, in welchem die / das Kalenderfoto(s) angezeigt werden soll(en)
- Die Wochen-Anzahl / Bild-Anzahl. Mögliche Optionen: 1-4 (z.B. Option 4 = Übersicht: diese Woche + die zukünftigen 3 Wochen)
- Die (Termin-)Kategorien, die in diesem Kalender-Setup und in dem Button "Terminübersicht" angezeigt werden sollen

::: info Information

- Ein Server kann **auch mehrere** Kalender-Setups haben.
- Du kannst über den Befehl **ebenso** ein Kalender-Setup **aktualsieren**.
  :::

## (Termin-)Kategorien

Im Bot selbst existieren Kateogorien, welche dazu verwendet werden, viele Termine ordnungsgerecht zu kategorisieren. Jede Kategorie hat einen anderen Namen sowie einen anderen Farb-/Hexcode, um Termine aus unterschiedlichen Kategorien mit der eingestellten Farbe im Kalender anzuzeigen.

### Erstellen

Verwende `/kategorie erstellen`, um eine neue Kategorie zu erstellen.
<br>Pflichtangabe:

- **Name der Kategorie**

Optionale Angabe:

- **Farbe** (Hex-Farbe für den Kalender, z.B. #FF0000)

### Bearbeiten

Verwende `/kategorie bearbeiten`, um eine Kategorie zu bearbeiten.

### Löschen

Verwende `/kategorie löschen`, um eine Kategorie zu löschen.

## Reminder-Thread Kanal

### Hinzufügen

Um den Reminder-Thread Kanal auf einem Server einzurichten, kannst du den Befehl `/reminder_setup kanal` ausführen.
<br>In den ausgewählten Kanal wird dann das Setup-Embed geschickt, mit welchem User beim Klicken auf den Button **"Wo ist mein Thread?"** oder bei nächster manueller Ausführung des Befehls `/reminder`, einen **persönlichen Thread** erstellt bekommen, in welchem sie dann neue Reminder erstellen können.

::: info Information

- Nur du und Server-Admins können deinen Thread sehen.
- Wenn du nicht möchtest, dass auch Server-Admins deinen Thread sehen können, kannst du stattdessen einfach einen **Reminder per DM erstellen** (schreibe dazu den Bot und führe den oben genannten Befehl aus) --> Du erhältst dann deine Benachrichtigungen **in deinen DMs** (standardmäßig: im Thread-Kanal, falls Ausführung des Befehls im eigenen Thread-Kanal).
  :::

### Entfernen

Verwende `/reminder_setup entfernen`, um das Setup vom Server zu entfernen.

## Staff-Rolle

### Hinzufügen

Verwende `/staff_role add`, um eine Staff-Rolle hinzuzufügen.

### Entfernen

Verwende `/staff_role remove`, um einer Rolle den Staff-Status wieder zu entfernen.

## Log-Kanal

### Einrichten

Um einen Log-Kanal für Termine einzurichten, verwende: `/log_channel setup` und wähle einen Kanal aus.
<br>In diesem Kanal werden dann alle Termine geloggt, die vom Bot gesendet wurden. Zu Beginn jedes neuen Monats, sendet der Bot als Information oder "Trennlinie" den aktuellen Monat und das dazugehörige Jahr in den Kanal hinein und pinnt diese Nachricht im Kanal selbst an.

::: danger Achtung!
Es kann im Bot selbst (global) nur **EINEN** Log-Kanal geben.
<br>Dieser sollte idealerweise also einfach auf dem **Staff-/Team-Server** belassen werden.
:::

### Entfernen

Verwende dazu: `/log_channel entfernen` und wähle den Kanal aus.

## Bot-Konfigurationsübersicht

Verwende den Befehl `/server_config`, um dir die **komplette serverseitige** **_und_** **globale Konfiguration** des Bots anzuschauen.

## Statistiken anschauen

Nutze den Befehl `/statistiken`, um dir Statistiken über **Netzwerk, Bot, Server, Modul und Versionen** anzeigen zu lassen.

## Ein Template erstellen

#### Zuerst: Wozu sind diese gut und wie funktionieren sie?

Du kannst Templates erstellen, welche - falls du sie per Auswahl auf einen Termin anwedest (s.u.) - die **Beschreibung eines Termins mit dem Template-Inhalt komplett überschreiben**.
<br>Templates können verwendet werden, um Ankündigungen schöner zu formatieren und Zeiten anderer Termine durch Variablen in der Nachricht zu integrieren.

**Konkretes Beispiel:**

- Termin "CWL Anmeldung" existiert am 20.05.2026
- Termin "Einsendeschluss CWL Anmeldung" existiert, welcher den Zeitpunkt 15.05.2026 (fünf Tage vorher) bekommt
- Eine separate Erinnerung für den Termin "CWL Anmeldung", welche schon VORHER stattfindet, wird bereits am 10.05.2026 in einen Discord-Kanal geschickt
- Ein Beschreibungs-Template wurde auf diese Erinnerung angewendet und in diesem existieren Variablen, mit welchen die User nun wissen, wann z.B. der Einsendeschluss für das jeweilige Event ist

Eine beispielhafte Nachricht für das Template wäre z.B. _(alles natürlich komplett frei festlegbar!)_:

```md {4}
Hallo liebe Mitglieder der FruchtLabor-Familie,

mit dieser automatisch gesendeten Nachricht wird an das kommende Event "CWL Anmeldung" Ende des Monats erinnert.
Einsendeschluss: {date_55} ({relative_55})

Mit freundlichen Grüßen,
das Server-Team
```

Beim Senden der Nachricht, werden die Variablen in richtige Werte unseres Termins "Einsendeschluss CWL Anmeldung" umgewandelt.
<br>Aussehen wird sie wie folgt:

```md {4}
Hallo liebe Mitglieder der FruchtLabor-Familie,

mit dieser automatisch gesendeten Nachricht wird an das kommende Event "CWL Anmeldung" Ende des Monats erinnert.
Einsendeschluss: 15.05.2026 (in 5 Tagen)

Mit freundlichen Grüßen,
das Server-Team
```

Für das Erstellen eines Templates sind folgende dynamische Platzhalter-Variablen verfügbar, die später bei dem Senden automatisch ersetzt werden:
| Variable | Was sie in der aufgelösten Nachricht bewirkt |
|---------|--------|
| name | Name des Termins |
| date | <t:{timestamp}:D> (20. April 2026) |
| time | <t:{timestamp}:t> (17:45) |
| datetime | <t:{timestamp}:F> (Montag, 20. April 2026 17:45) |
| relative | <t:{timestamp}:R> (in 3 Tagen) |

Falls du im Allgemeinen nicht genau weißt, wie Timestamps funktionieren, empfehlen wir dir, mal [HIER](https://hammertime.cyou/de) vorbeizuschauen.

Zum Verwenden: Im Template-Text (bei der Erstellung einfügen):

```
{variable_terminid}
```

Termin-ID gilt hier als ein Standardwert, welcher unbedingt angegeben werden muss. Sonst weiß der Bot nicht, auf welchen Termin er sich beziehen soll. Die ID eines Termins bekommst du unter anderem durch den Befehl `/termin` --> Liste.

bspw.: `{date_268}` --> Datum des Termins mit der ID 268.
