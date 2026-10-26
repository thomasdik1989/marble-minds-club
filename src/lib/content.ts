// Voorbeeldinhoud — vervang door de echte gegevens van de club.
export type Person = { slug: string; name: string; role: string; bio: string; email?: string };
export type Course = {
  slug: string;
  title: string;
  level: "Beginners" | "Gevorderden" | "Iedereen";
  icon: "camera" | "book" | "laptop" | "phone" | "shield" | "calendar";
  summary: string;
  description?: string[];
  topics?: string[];
  details: string[];
};
export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  body: string;
  intro?: string[];
  topics?: string[];
  outro?: string[];
};

export const club = {
  name: "Regionale Computerclub Noord-Holland",
  short: "CompuClub",
  motto: "Het overdragen van kennis en vaardigheden",
  clubday: "Elke donderdag van 13.30 tot 21.30 uur",
  venue: "Stichting Buurthuis De Hoeksteen, Amatist 13, Heerhugowaard",
  postal: ["CompuClub", "Zonnehof 57", "1704 ZJ Heerhugowaard"],
  phone: "072-8885684",
  email: "info@computerclubhhw.nl",
  courseEmail: "infocursuscomputerclubhhw@gmail.com",
};

export const board: Person[] = [
  { slug: "voorzitter", name: "Bert de Groodt", role: "Voorzitter", bio: "Leidt de vergaderingen en is het eerste aanspreekpunt van de club." },
  { slug: "secretaris", name: "Pauld den Hartigh", role: "Secretaris", bio: "Houdt de ledenadministratie en de notulen bij. Weet van iedereen de verjaardag." },
  { slug: "penningmeester", name: "Peter Blankendaal", role: "Penningmeester / Ledenadministratie", bio: "Beheert de financiën en de contributie. Spreadsheets zijn zijn tweede natuur." },
  { slug: "algemene-info", name: "Gerrit Dijkstra", role: "Algemene Info", bio: "" },
  { slug: "technische-dienst", name: "Johan Harms", role: "Hoofd Technische Dienst", bio: "Schroeft, sleutelt en installeert. Geen computer is hem te oud." },
];

const coursePrice = "Lesgeld: € 15 voor niet-leden, € 10 voor leden per lesdag, incl. koffie/thee";
const location = "Locatie: Buurthuis De Hoeksteen, Amatist 13, Heerhugowaard";

export const courses: Course[] = [
  {
    slug: "fotoboek-maken",
    title: "Fotoboek maken met CeWe",
    level: "Iedereen",
    icon: "book",
    summary: "Maak een fotoboek van uw mooiste herinneringen met de gratis CeWe-software.",
    description: [
      "Voor het maken van een fotoboek gebruiken we de software van CeWe. Deze software is gratis te downloaden via www.cewe-fotoboek.nl en wordt bij elk fotoboek automatisch bijgewerkt.",
      "Een groot voordeel: de fotoboeken die u hier maakt, kunt u ook openen in de software van winkels als Albert Heijn, Kruidvat, Lidl, Etos, Vomar, DeKa-markt en Bol.com. De software is internationaal en wordt ook gebruikt bij winkelketens in Frankrijk, België, Duitsland en Oostenrijk.",
    ],
    topics: [
      "Verkenning van de software: opbouw van het scherm en de belangrijkste knoppen",
      "De kaft van het fotoboek",
      "Achtergronden: standaard of met eigen foto's",
      "Foto's invoegen, vergroten, verkleinen en plaatsen",
      "Aantal foto's per bladzijde en bladindelingen",
      "Sjablonen en passepartouts",
      "Paginanummering",
      "Teksten en clipart bij de foto's",
    ],
    details: [
      "Voldoende digitale foto's aanwezig, of neem uw eigen foto's mee op een USB-stick",
      coursePrice,
      "Lesmateriaal niet inbegrepen",
      "Maximaal acht cursisten per groep",
      location,
    ],
  },
  {
    slug: "kalender-maken",
    title: "Kalender maken met CeWe",
    level: "Iedereen",
    icon: "calendar",
    summary: "Maak een eigen fotokalender met de gratis CeWe-software. Ideaal als cadeau.",
    description: [
      "Tijdens deze workshop maakt u met de CeWe-software een eigen fotokalender met uw mooiste foto's.",
    ],
    details: [
      "Werken met de gratis CeWe-software",
      "Eigen foto's meenemen op een USB-stick",
      coursePrice,
      "Lesmateriaal niet inbegrepen",
      location,
    ],
  },
  {
    slug: "elements-beginners",
    title: "Foto bewerken met Elements — beginners",
    level: "Beginners",
    icon: "camera",
    summary: "Leer de basis van fotobewerking met Photoshop Elements.",
    description: [
      "Naast deze cursus voor beginners (4 lessen) bieden wij een basiscursus (2 lessen) voor wie nog niets weet van fotobewerking.",
    ],
    details: [
      "4 lessen",
      coursePrice,
      "Lesmateriaal niet inbegrepen",
      "Maximaal acht cursisten per groep",
      location,
    ],
  },
  {
    slug: "elements-gevorderden",
    title: "Foto bewerken met Elements — gevorderden",
    level: "Gevorderden",
    icon: "camera",
    summary: "Verdiep uw kennis van fotobewerking met Photoshop Elements.",
    description: [
      "Een cursus voor cursisten die al enige ervaring hebben met fotobewerking. De lessen vinden plaats op donderdagmiddag of -avond.",
    ],
    details: [
      "4 lessen op donderdagmiddag of -avond",
      coursePrice,
      "Lesmateriaal niet inbegrepen",
      "Maximaal acht cursisten per groep",
      location,
    ],
  },
];

export const news: NewsItem[] = [
  {
    slug: "clubmiddag-demonstraties",
    date: "2026-10-26",
    title: "Clubmiddag op donderdag: demonstraties",
    body: "Elke donderdag zijn wij open in buurthuis De Hoeksteen in Heerhugowaard. Tussen 15.00 en 16.30 uur geven wij regelmatig een demonstratie.",
    intro: [
      "U bent van harte welkom in het buurthuis De Hoeksteen in Heerhugowaard. Elke donderdag houden wij onze clubbijeenkomsten van 13.30 tot 21.30 uur.",
      "Tijdens de clubmiddag op donderdag geven wij regelmatig een demonstratie tussen 15.00 en 16.30 uur over de volgende onderwerpen:",
    ],
    topics: [
      "Werken met een race- en/of vluchtsimulator",
      "Een demonstratie over het programma Narakeet",
    ],
    outro: [
      "Bij de demonstratie over Narakeet krijgt u uitleg over de opbouw van een film, en daarna over het maken van een gesproken tekst (voice-over) onder een film.",
    ],
  },
];

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export function initials(name: string) {
  return name.split(" ").filter((p) => p[0] && p[0] === p[0].toUpperCase()).map((p) => p[0]).slice(0, 2).join("");
}
