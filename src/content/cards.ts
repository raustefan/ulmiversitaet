import type { LinkCard } from "@/lib/types/link-card";

export const accountCard: LinkCard = {
  heading: "Accounts",
  description: "Account-Management der Uni Ulm",
  links: [
    {
      href: "https://portal.uni-ulm.de/idmFrontend/",
      text: "Identitätsmanagement",
      description: "Zentrale Verwaltung von Personendaten und der Chipkarte",
      descriptionLinks: [
        {
          href: "https://www.uni-ulm.de/einrichtungen/kiz/service-katalog/account-zugang/idm/",
          text: "Mehr Informationen",
        },
      ],
    },
    {
      href: "https://www.uni-ulm.de/in/sgi/services/account-system/account-erstellen/",
      text: "SGI Account",
      description: "Zugang zu PCs der SG Informatik",
      descriptionLinks: [
        {
          href: "https://psi.informatik.uni-ulm.de:1244/sgi/password-reset",
          text: "Passwort zurücksetzen",
        },
      ],
    },
    {
      href: "https://imap.uni-ulm.de/lists",
      text: "Mailing Listen",
      description: "Ein- / Austragen aus Mailinglisten",
    },
  ],
};

export const studiesCard: LinkCard = {
  heading: "Studium",
  links: [
    {
      href: "https://portal.uni-ulm.de/PortalWI/sso/vvz.html",
      text: "Veranstaltungsverzeichnis",
    },
    {
      href: "https://campusonline.uni-ulm.de/qislsf/rds?state=change&type=1&moduleParameter=VVZArchivMenue&nextdir=change&next=menu.vm&subdir=applications&xml=menu&purge=y&database=n&navigationPosition=lectures%2CVVZArchiv&topitem=lectures&subitem=VVZArchiv",
      text: "Veranstaltungsarchiv",
      shortLink: true,
    },
    {
      href: "https://campusonline.uni-ulm.de/qislsf/rds?state=change&type=1&moduleParameter=modulhandbuecherMenue&nextdir=change&next=menu.vm&subdir=applications&xml=menu&purge=y&database=n&navigationPosition=modules%2CModulhandbuecher&breadcrumb=mod_handbuecher_UL&topitem=modules&subitem=Modulhandbuecher",
      text: "Modulhandbücher",
      shortLink: true,
    },
    {
      href: "https://campusonline.uni-ulm.de/CoronaNG/index.html?token=1.0/1736343018/Corona/okb23/99699073e75a12c3a1c55359f6a1b511",
      text: "CoronaNG",
      description: "Anmeldungen für bestimmte Kurse (z.B. ASQ)",
    },
    {
      href: "https://www.uni-ulm.de/einrichtungen/kiz/weiteres/campus-navigation/hoersaalfinder/",
      text: "Hörsaalfinder",
      description: "Für eine genauere Zurechtfindung existiert der",
      descriptionLinks: [
        {
          href: "https://www.uni-ulm.de/einrichtungen/kiz/weiteres/campus-navigation/campus-navigator/",
          text: "Campusnavigator",
        },
      ],
    },
  ],
};

export const studienwerkCard: LinkCard = {
  heading: "Studierendenwerk",
  links: [
    {
      href: "https://www.bafoeg-digital.de/",
      text: "BAföG",
      description: "BAföG-Antrag stellen.",
      descriptionLinks: [
        {
          href: "https://studierendenwerk-ulm.de/bafoeg-finanzen/faq/",
          text: "Offizielle Informationen",
        },
      ],
    },
    {
      href: "https://tl1host.eu/SWUL/#admission",
      text: "Wohnung beantragen",
      shortLink: true,
      description: "Studieredenwohnung in Ulm beantragen",
      descriptionLinks: [
        {
          href: "https://studierendenwerk-ulm.de/wohnen/",
          text: "Mehr Informationen",
        },
      ],
    },
    {
      href: "https://studierendenwerk-ulm.de/beratung-betreuung/psychosoziale-beratung/",
      text: "Psychosoziale Beratungsstelle",
      description: "Bitte im Notfall nicht zurückschrecken!",
    },
    {
      href: "https://studierendenwerk-ulm.de/essen-trinken/mensen-und-cafeterien/",
      text: "Mensaplan",
      description: "Offizieller Mensaplan des Studienwerkes",
      shortLink: true,
      descriptionLinks: [
        {
          href: "https://mensaplan.fs-et.de/",
          text: "Alternative FS ET",
        },
        {
          href: "https://mensa.jan-bulling.com/",
          text: "Alternative von mir",
        },
      ],
    },
  ],
};

export const printCard: LinkCard = {
  heading: "Drucken",
  links: [
    {
      href: "https://print.uni-ulm.de",
      text: "Print@Uni",
      description: "Zum Drucken muss man im Uni-Netz (oder im VPN) sein!",
    },
    {
      href: "https://portal.uni-ulm.de/eKladdeNG/index.html",
      text: "Abschlussarbeiten drucken",
      shortLink: true,
      description:
        "Das Drucken von Dissertationen verläuft etwas anders. Einfache Abholung in der Bib-Ausleihe. (sehr Preisgünstig)",
      descriptionLinks: [
        {
          href: "https://www.uni-ulm.de/einrichtungen/kiz/service-katalog/medien/druck-weiterverarbeitung/abschlussarbeiten/",
          text: "Mehr Informationen",
        },
      ],
    },
  ],
};

export const studisekCard: LinkCard = {
  heading: "Studiensekretariat",
  links: [
    {
      href: "mailto:studiensekretariat@uni-ulm.de",
      text: "studiensekretariat(at)uni-ulm.de",
      shortLink: true,
    },
    {
      href: "https://www.uni-ulm.de/studium/studienorganisation/beurlaubung-rueckmeldung-studiengangwechsel-exmatrikulation/",
      text: "Beurlaubung / Rückmeldung",
      description: "Falls es mal notwendig sein solte:",
      descriptionLinks: [
        {
          href: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/studium/Studienorganisation/Beurlaubung__Rueckmeldung_und_Exmatrikulation/Exmatrikulation/antrag_exmatrikulation_WEB.pdf",
          text: "Exmatrikulation",
        },
      ],
    },
    {
      href: "https://www.uni-ulm.de/studium/studienorganisation/studiengebuehren/",
      text: "Informationen zu den Studiengebüren",
      shortLink: true,
    },
    {
      href: "https://www.uni-ulm.de/studium/studienorganisation/studierendenausweis-chipkarte/",
      text: "Chipkarte verloren",
      shortLink: true,
    },
  ],
};

export const freetimeCard: LinkCard = {
  heading: "Freizeit",
  description: "Was man in der schönen Stadt Ulm so alles machen kann",
  links: [
    {
      href: "https://cloud.aktivkonzepte.de/hspulm/index.html#%23/Home/KursListe",
      text: "Hochschulsport",
      description: "Zu Beginn jedes Semesters wird eine Mail verschickt.",
      descriptionLinks: [
        {
          href: "https://www.uni-ulm.de/einrichtungen/hochschulsport/",
          text: "Mehr Informationen",
        },
      ],
    },
    {
      href: "https://stuve.uni-ulm.de/struktur/hochschulgruppen",
      text: "Hochschulgruppen",
    },
    {
      href: "https://www.uni-ulm.de/einrichtungen/hochschulsport/unifit/information/",
      text: "UniFIT",
    },
    {
      href: "https://www.ulm.de/leben-in-ulm/freizeit-und-sport",
      text: "Stadt Ulm",
    },
  ],
};

export const bibCard: LinkCard = {
  heading: "Bibliothek",
  description: "Bücher ausleihen muss nicht kompliziert sein!",
  links: [
    {
      href: "https://ulm.ibs-bw.de/",
      text: "Bibliothekskatalog",
      description:
        "Bücher in der Bibliothek einfach ausleihen und bequem nach Anmeldung über diesen Link verlängern.",
      descriptionLinks: [
        {
          href: "https://www.uni-ulm.de/einrichtungen/kiz/service-katalog/bibliotheksnutzung/",
          text: "Mehr Informationen",
        },
      ],
    },
    {
      href: "https://www.uni-ulm.de/einrichtungen/kiz/home/service-points/service-point-ausleihe/",
      text: "Öffnungszeiten",
    },
    {
      href: "https://www.uni-ulm.de/einrichtungen/kiz/weiteres/formulare/reservierung-leseplatz-bibl-zentrale/",
      text: "Leseplatz / Raumbuchung",
      shortLink: true,
    },
  ],
};

export const explanationCard: LinkCard = {
  heading: "Erklärungen",
  links: [
    {
      href: "https://www.uni-ulm.de/einrichtungen/kiz/service-katalog/e-mail-kalender-zusammenarbeit/e-mail/e-mail-programme-konfigurieren/",
      text: "E-Mail Client einrichten",
      shortLink: true,
    },
    {
      href: "https://www.uni-ulm.de/einrichtungen/kiz/service-katalog/netzwerk-konnektivitaet/vpn/ssl-vpn/",
      text: "Uni-VPN Anleitung",
      shortLink: true,
    },
    {
      href: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/kiz/medien/Drucker/follow_me_prin/kiz_printing_linux_mac_win.pdf",
      text: "Drucker lokal hinzufügen",
      shortLink: true,
    },
  ],
};

export const internationalOfficeCard: LinkCard = {
  heading: "International Office",
  description: "Auslandssemester / Erasmus+ Programm",
  links: [
    {
      href: "https://www.uni-ulm.de/io/",
      text: "International Office",
      description: "Erreichbar unter",
      descriptionLinks: [
        {
          href: "mailto:study-abroad@uni-ulm.de",
          text: "study-abroad@uni-ulm.de",
        },
      ],
    },
    {
      href: "https://www.uni-ulm.de/io/mob-out/ausland-semester-jahr/erasmus-sms/bewerbung-intern/",
      text: "Erausmus+ & Bewerbung",
    },
    {
      href: "https://www.service4mobility.com/europe/PortalServlet?identifier=ULM01&showAll=0&showPartner=0&preselectTab=ver_nav_button&sprache=de",
      text: "Suchportal für Auslandsunis",
      shortLink: true,
    },
    {
      href: "https://www.uni-ulm.de/einrichtungen/zsp/test/daad/",
      text: "Sprachtests",
      shortLink: true,
    },
    {
      href: "https://www.uni-ulm.de/io/mob-out/im-studium-ins-ausland/berichte/europa/?tx_filelist_filelist%5Baction%5D=list&tx_filelist_filelist%5Bcontroller%5D=File&tx_filelist_filelist%5Bpath%5D=%2Fwebsite_uni_ulm%2Fio%2F1_MOB-OUT_Erfahrungsberichte%2Feuropa%2F&cHash=f8a67a161e9401130cea8b38f36e0cf0",
      text: "Erfahrungsberichte",
      shortLink: true,
    },
    {
      href: "https://www.service4mobility.com/europe/LoginServlet",
      text: "Mobility-Online",
    },
  ],
};

export const cards: LinkCard[] = [
  accountCard,
  studiesCard,
  bibCard,
  studisekCard,
  studienwerkCard,
  printCard,
  freetimeCard,
  explanationCard,
  internationalOfficeCard,
];
