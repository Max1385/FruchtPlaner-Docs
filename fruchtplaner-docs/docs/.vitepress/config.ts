import { defineConfig } from "vitepress";
const year = new Date().getFullYear();

export default defineConfig({
  title: "FruchtPlaner",
  description: "Dokumentation",
  cleanUrls: true, // Entfernt .html von URLs
  ignoreDeadLinks: true, // Cloudflare fix to build page // prüft normale auf Links, die nicht anklickbar / erreichbar sind. Hier aber zu Problemen geführt, wahrscheinlich wegen files mit Umlauten oder Unterstrichen
  //head: [["link", { rel: "icon", type: "image/png", href: "/FL_Logo.png" }]],
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/FL_Logo.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Work+Sans:wght@400;500;600;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  lastUpdated: true,
  //markdown: {
  //lineNumbers: true, // würde Zeilennummern in Codeblöcken anzeigen
  //},

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        link: "/allgemein/befehlsuebersicht",
        activeMatch:
          "/allgemein/|/private_reminders/|/team_termine/|/zeitangaben_wiederholungen/", // Regex (wenn die aktuelle URL darauf matcht, wird der Nav-Link blau)
      },
    ],
    logo: {
      dark: "/Bot_Logo_Dark.png", // Logo-File liegt zwar in docs/public/Bot_Logo.png, aber VitePress serviert alles aus public/ als statische Dateien
      light: "/Bot_Logo_Light.png",
      alt: "FruchtPlaner Logo",
    },

    //editLink: {
    //pattern: 'https://github.com/dein-user/fruchtplaner-docs/edit/main/docs/:path',
    //text: 'Diese Seite auf GitHub bearbeiten', // brauchbar, damit die Community selbst in Zukunft evtl. editen kann
    //},

    socialLinks: [
      { icon: "github", link: "https://github.com/repooooooo" },
      { icon: "discord", link: "https://discord.gg/fruchtlabor" },
    ],

    footer: {
      message: '<a href="/impressum">Impressum</a>',
      copyright: `© ${year} FruchtLabor Team | Max1385`,
    },

    sidebar: [
      {
        text: "Allgemein",
        collapsed: false, // Standardmäßig = true (offen, nicht aufklappbar) -- nun: offen und auf- und zuklappbar
        items: [
          {
            text: "Befehlsübersicht",
            link: "/allgemein/befehlsuebersicht",
          },
          {
            text: "Zeitangaben & Wiederholungen",
            link: "/allgemein/zeitangaben_wiederholungen",
          },
          {
            text: "Berechtigungskonfiguration",
            link: "/allgemein/berechtigungskonfiguration",
          },
          {
            text: "Hinweis & Bot einladen",
            link: "/allgemein/hinweis-boteinladen",
          },
        ],
      },
      {
        text: "Module",
        collapsed: false,
        items: [
          { text: "Private Reminder", link: "/hauptmodule/private_reminders" },
          { text: "Team Termine", link: "/hauptmodule/team_termine" },
          { text: "Admin-Module", link: "/hauptmodule/admin_module" },
        ],
      },
      {
        text: "",
        items: [{ text: "Fehler melden", link: "/fehler_melden" }],
      },
    ],

    search: {
      provider: "local",
    },
  },
});
