# Zeitangaben & Wiederholungen

## Kurzform
`5s` – 5 Sekunden - `10m` – 10 Minuten - `2h` – 2 Stunden
<br>`3d` – 3 Tage - `1w` – 1 Woche - `2mo` – 2 Monate - `1y` – 1 Jahr

**Kombiniert**: `1d 5h 30m` - `2w 3d` - `1h 15m`

## Exakte Zeitangaben
`15.05.2026 14:30` – Datum & Uhrzeit
<br>`morgen 10:00` - heute 15:30
<br>`fr 15` - Freitag um 15 Uhr
<br>`mo 22` - Montag um 22 Uhr

::: info Information
Beispiel:
<br>Es ist Dienstag, der 05.05.2026 um 19:00 Uhr und du möchtest einen neuen Termin erstellen und schreibst: `di 18`
<br>--> Der Bot erkennt automatisch, dass dies technisch nicht mehr möglich ist und legt den Termin mit derselben Uhrzeit auf nächsten Dienstag.
:::

## Wiederholungen – Einfach
Nach dem Erstellen eines Reminders oder eines Termins erscheint ein **Button-Menü**:
Klicke auf `Mit Wiederholung` – es öffnet sich ein Formular, in welchem du z.B. Folgendes eintragen kannst:

`täglich` - `wöchentlich` - `monatlich`
<br>`alle 2 tage` – eigenes Intervall
<br>`jeden 1. des monats` – monatlich am 1.

## Wiederholungen – Fortgeschritten, empfohlen für komplexe Regeln (RRULE)
Button `Mit Wiederholung (rrule)` oder `RRULE` für komplexe Zeitregeln. Diese werden von uns auch empfohlen, da sie universeller und *(etw.)* kompatibler mit dem Time Parser des Bots sind. Also falls du nicht sehr einfache Intervalle haben möchtest: Gerne diese Methode verwenden. :D

**Grundlegender Aufbau**: `RRULE:FREQ=...;OPTION=...`
<br>**Beispielhafte Parameter, welche du verwenden kannst**:
- `FREQ` – `DAILY` `WEEKLY` `MONTHLY` `YEARLY`
- `INTERVAL` – z. B. `2` für alle 2 Wochen/Monate/Jahre etc. (Abstand zwischen den Wiederholungen - abhängig von `FREQ`)
- `BYDAY` – `MO` `TU` `WE` `TH` `FR` `SA` `SU`
- `BYMONTHDAY` – Tag im Monat: `1`, `15`, `28` – oder negativ: `-1` (letzter Tag), `-5` (fünftletzter Tag)
- `BYSETPOS` – z. B. `1` (erstes Vorkommen) oder `-1` (letztes Vorkommen) im Zeitraum

**RRULE Beispiele**:
- Ein Termin, der jeden Mo/Mi/Fr um 18 Uhr wiederholt werden soll:
```
RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR;BYHOUR=18;BYMINUTE=0
```
- Letzter Montag im Monat:
```
RRULE:FREQ=MONTHLY;BYDAY=-1MO
```
- Erster Sonntag nach dem 11.:
```
RRULE:FREQ=MONTHLY;BYDAY=SU;BYMONTHDAY=12,13,14,15,16,17,18;BYSETPOS=1
```
- Alle 2 Wochen montags um 9 Uhr:
```
RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;BYHOUR=9;BYMINUTE=0
```

::: tip Tipp
Mit `/reminder` --> `RRULE testen` (Button im Menü klicken) kannst du dir eine Vorschau anzeigen lassen, was diese Wiederholungsregel / RRULE bewirken würde.
<br>Für eine noch detailliertere Übersicht über die Funktionsweise von RRULEs: z.B. [RFC 5545 Dokumentation.](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html)
:::