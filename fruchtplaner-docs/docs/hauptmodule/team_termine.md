# Hauptbefehl

## Nach Ausführung des Befehls

Nachdem du den Slash-Command `/termin` ausgeführt hast, öffnet sich ein **Termin-Verwaltungs-Menü**. In diesem kannst du Folgendes tun:

- Neue Termine erstellen *(Anleitung: [Klicke hier](#einen-team-termin-erstellen))*
- Liste aller aktiven Team-Termine anzeigen
- Das Termin-Verwaltungs-Menü manuell aktualisieren

Bei Auswahl eines Termins im Auswahlfeld:

- Erinnerungen **vor und nach** einem Termin erstellen sowie aktuelle Erinnerungen listen. 
<br>Wenn mind. 1 Erinnerung vorhanden ist, sind auch **Nachricht ändern**, **Erinnerung löschen** und **Zeitpunkt ändern** verfügbar.<br>
- Termin verlegen (Ersteller, Bot-Admin, Administrator)
- Name, Beschreibung, RRULE-Wiederholung, Sichtbarkeit bearbeiten
- Kategorie des Termins bearbeiten
- Ziel-Kanal der Termin-Benachrichtigung ändern
- Termin löschen

::: warning Wichtige Information
Den `/termin`-Befehl kannst du ausführen, wenn du selbst als Staff-User oder eine Rolle, die du besitzt, als Staff-Rolle hinzugefügt wurde.
<br>Dies heißt aber nicht, dass man zwingend diese Staff-Berechtigung braucht, um den Befehl auszuführen. Siehe auch: [Berechtigungshierarchie des Bots](/allgemein/befehlsuebersicht#berechtigungshierarchie)

Die folgenden Funktionen benötigen jedoch **extra Berechtigungen**:
- Termin verlegen
- Name, Beschreibung, RRULE-Wiederholung, Sichtbarkeit bearbeiten
- Kategorie des Termins bearbeiten
- Ziel-Kanal der Termin-Benachrichtigung ändern
- Termin löschen

Benötigt: Sei der Ersteller des Termins, ein Bot-Admin oder ein Administrator des Servers, auf welchem der Befehl ausgeführt wird.
:::

## Einen (Team-) Termin erstellen
1. Um einen neuen Termin zu erstellen, klicke bitte auf den Button "Erstellen".
<br>Es öffnet sich ein Menü, in welchem du nun folgende Informationen eingeben kannst:<br>
    - Name des Termins (Pflichtangabe)
    - Zeitpunkt (Pflichtangabe, aber **leer lassen falls** du eine **RRULE** verwenden möchtest)
    - Beschreibung des Termins (optionale Angabe)

    Du findest bereits "Platzhalter"-Werte in den einzelnen Eingabefeldern, an welchen du dich orientieren kannst. Falls du nicht genau weißt, welche Zeitpunkt-Werte man alles bei "Zeitpunkt" eintragen kann, empfehlen wir dir HIER nachzuschauen (mit Beispielen! :D).

2. Danach siehst du ein Embed, welches den Titel **Sichtbarkeit, Kategorie & Pings** trägt.
<br>In diesem siehst du deine vorhin eingegebenen Werte und kannst sie noch einmal überprüfen.<br>Jetzt aber ist der Punkt gekommen, an welchem du die **Sichtbarkeit des Termins (Pflichtangabe)** sowie eine **Kategorie** und optional auch **Rollen/User zum Pingen** einstellen kannst.
    - **Sichtbarkeit auswählen:** Öffentlich (standardmäßige Auswahl; Im Kalender und in der Terminübersicht sichtbar) vs. Versteckt (Nur in der internen `/termin`-Liste sichtbar)
    - **Kategorie auswählen:** Es wird unbedingt empfohlen, eine Kategorie auszuwählen. Dieses System nutzen wir, damit die Termine jeweils unterschiedlich dargestellt werden (andere Farbegebung [Hintergrund/Schriftfarbe]) und nur in den Kalendern auftreten, auf welchem sie auch relevant sind.
    - **Rollen oder User auswählen, die gepingt werden sollen:** Optionale Angabe

3. Drücke auf "Weiter". Nun siehst du ein weiteres Embed mit dem Titel **Ziel-Kanal für Benachrichtigung** und noch einmal alle Angaben, die du bisher eingestellt hast.<br>
    Du kannst einen Ziel-Kanal für die Benachrichtigung einstellen, die standardmäßig zu Beginn eines Termins kommt. Wenn du keinen bestimmten Kanal auswählst, erscheint die Benachrichtigung in dem Kanal, in welchem du den Termin erstellt hast, ansonsten natürlich in deinem ausgewählten Kanal.

4. Wiederholung für diesen Termin einrichten? Folgende Optionen hast du dazu:
    - **Ohne Wiederholung**: Termin wird ohne eine Wiederholung erstellt.
    - **Mit Wiederholung**: Gib dort den Wiederholungs-Typ (täglich, wöchentlich, monatlich) ein. Falls du stattdessen ein eigenes Intervall (optional) verwenden möchtest, trage dieses in das zweite Feld ein und gib im ersten Feld (Wiederholungs-Typ) `custom` ein.
    - **Mit [RRULE](/allgemein/zeitangaben_wiederholungen) (fortgeschrittene Wiederholung)**: Gib in dieses Feld deine RRULE ein.
    - **Abbrechen**: Termin-Erstellung abbrechen.


## Termin in Google Kalender hinzufügen
Du kannst `/termin_export` *(erfordert: min. Staff-Berechtigung)* verwenden, um bestimmte Termine in deinen persönlichen Google Kalender zu **exportieren** (inkl. Name, Uhrzeit, Beschreibung sowie Wiederholungsregel *[falls verfügbar]*).