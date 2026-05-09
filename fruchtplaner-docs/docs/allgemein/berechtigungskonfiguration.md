# Berechtigungskonfiguration
## Information
- Der Bot braucht **nicht zwingend** Administrator, falls du als Server-Admin dies nicht möchtest.
- Merke: Channel-Overwrites können Server-Rechte trotzdem überschreiben. Ein erlaubtes Recht auf Server-Ebene hilft also nicht, wenn es im Zielkanal auf **nicht zugelassen** steht.
- Welche Bot-Berechtigungen wirklich nötig sind, erfährst du im Folgenden.

## Pflichtrechte für den Bot

| Berechtigung    | Nutzen |
|---------|--------|
| View Channels (Kanäle ansehen)     | Damit der Bot Kalender-, Reminder- und Zielkanäle überhaupt sehen kann     |
| Send Messages (Nachrichten senden)    | Damit Kalenderposts, Info-Embeds und Reminder gesendet werden können     |
| Embed Links (Links einbetten)   | Fast alle Antworten und Reminder werden als Embeds gesendet     |
| Attach Files (Dateien anhängen)   | Der Kalender wird als Bilddatei gepostet     |
| Read Message History (Nachrichtenverlauf lesen)   | Nötig, um bestehende Kalendernachrichten zu finden und zu aktualisieren     |
| Manage Messages (Nachrichten verwalten)   | Nötig, um alte Kalendernachrichten zu bearbeiten oder zu löschen     |
| Create Private Threads (Private Threads erstellen)   | Nötig für die persönlichen Reminder-Threads     |
| Send Messages in Threads (Nachrichten in Threads senden)   | Nötig, damit der Bot in Reminder-Threads schreiben kann     |
| Manage Threads (Threads bearbeiten)   | Empfohlen, damit archivierte Reminder-Threads wieder automatisch vom Bot geöffnet werden können     |
| optional:   |      |
| Mention Everyone (Everyone erwähnen)   | Nur dann, wenn der Bot Rollen pingen soll, die nicht als mentionable markiert sind     |

::: info Wenn der Bot keine Berechtigungen hat
Wenn der Bot eine Benachrichtigung **nicht** zustellen kann, wird der Versuch beim nächsten Zyklus *(alle 30 Sekunden)* wiederholt. Nach **5** fehlgeschlagenen Versuchen wird der Eintrag automatisch deaktiviert – der Ersteller erhält dann darüber eine DM mit dem Grund (z.B. `403 Forbidden – Missing Permissions`). Falls DMs deaktiviert sind, erscheint die Meldung stattdessen im konfigurierten Log-Kanal.
:::

## Zusätzlich erlaubt
Wo diese Rechte zusätzlich erlaubt sein müssen:
- Im **Kalender-Kanal** braucht der Bot mindestens `View Channel`, `Send Messages`, `Embed Links`, `Attach Files`, `Read Message History` und `Manage Messages`.
- Im **Reminder-Setup-Kanal** braucht der Bot mindestens `View Channel`, `Send Messages`, `Embed Links`, `Create Private Threads`, `Send Messages in Threads` und sinnvollerweise `Manage Threads`.
- In **allen Kanälen, die das Staff-Team für Event-Benachrichtigungen auswählen**, braucht der Bot ebenfalls Schreibrechte. Sonst kann der Termin oder Event-Reminder später nicht dort zugestellt werden.

## Sonstige Hinweise
- `bot_admins` ist aktuell global, nicht guild-spezifisch (pro Server). Ein(e) per /admin_add gesetzte(r) User / Rolle ist damit nicht nur auf einem einzelnen Server-Bot-Admin.
- `categories` ist aktuell ebenfalls global, nicht guild-spezifisch. Kategorien sind also nicht sauber pro Server getrennt sondern ebenfalls serverübergreifend.