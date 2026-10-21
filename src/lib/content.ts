// Voorbeeldinhoud — vervang door de echte gegevens van de club.
export type Person = { slug: string; name: string; role: string; bio: string; email?: string };
export type Course = {
  slug: string;
  title: string;
  level: "Beginners" | "Gevorderden" | "Iedereen";
  icon: "camera" | "book" | "laptop" | "phone" | "shield" | "calendar";
  summary: string;
  details: string[];
};
export type NewsItem = { date: string; title: string; body: string };

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
  { slug: "voorzitter", name: "Jan de Vries", role: "Voorzitter", bio: "Leidt de vergaderingen en is het eerste aanspreekpunt van de club. Programmeert al sinds de Commodore 64." },
  { slug: "secretaris", name: "Ria Bakker", role: "Secretaris", bio: "Houdt de ledenadministratie en de notulen bij. Weet van iedereen de verjaardag." },
  { slug: "penningmeester", name: "Kees Visser", role: "Penningmeester", bio: "Beheert de financiën en de contributie. Spreadsheets zijn zijn tweede natuur." },
  { slug: "cursuscoordinator", name: "Annet Smit", role: "Cursuscoördinator", bio: "Plant de cursussen en zoekt de docenten. Mail haar gerust met wensen." },
  { slug: "technische-dienst", name: "Piet Mulder", role: "Hoofd Technische Dienst", bio: "Schroeft, sleutelt en installeert. Geen computer is hem te oud." },
];

export const courses: Course[] = [
  { slug: "fotoboek-maken", title: "Fotoboek maken met CeWe", level: "Iedereen", icon: "book", summary: "Maak een prachtig fotoboek van uw mooiste herinneringen.", details: ["4 lessen op donderdagmiddag", "Eigen laptop meenemen", "Inclusief hulp bij bestellen"] },
  { slug: "kalender-maken", title: "Kalender maken", level: "Iedereen", icon: "calendar", summary: "Een eigen fotokalender, perfect als cadeau.", details: ["2 lessen", "CeWe-software", "Eigen foto's meenemen"] },
  { slug: "elements-beginners", title: "Foto bewerken — beginners", level: "Beginners", icon: "camera", summary: "De basis van Photoshop Elements: bijsnijden, kleuren, belichting.", details: ["6 lessen", "Geen ervaring nodig"] },
  { slug: "elements-gevorderden", title: "Foto bewerken — gevorderden", level: "Gevorderden", icon: "camera", summary: "Lagen, maskers en retoucheren met Photoshop Elements.", details: ["6 lessen", "Na de beginnerscursus"] },
  { slug: "windows-basis", title: "Windows de baas", level: "Beginners", icon: "laptop", summary: "Bestanden, mappen, instellingen en veilig internetten.", details: ["5 lessen", "Op club-laptops of eigen laptop"] },
  { slug: "smartphone", title: "Smartphone & tablet", level: "Beginners", icon: "phone", summary: "Apps, foto's, WhatsApp en videobellen met de kleinkinderen.", details: ["4 lessen", "Android én iPhone"] },
  { slug: "veilig-online", title: "Veilig online", level: "Iedereen", icon: "shield", summary: "Herken nepberichten, maak sterke wachtwoorden en bankier veilig.", details: ["2 lessen", "Praktische tips voor thuis"] },
];

export const news: NewsItem[] = [
  { date: "2026-10-15", title: "Nieuwe cursus: Veilig online", body: "Vanaf november starten we met een korte cursus over veilig internetten. Aanmelden kan via de cursuscoördinator." },
  { date: "2026-09-28", title: "Workshop kalender maken groot succes", body: "Twintig leden maakten hun eigen kalender voor 2027. Bedankt aan alle vrijwilligers!" },
  { date: "2026-09-01", title: "Het nieuwe seizoen is begonnen", body: "Na de zomer zijn we weer elke donderdag open. Kom gezellig langs voor koffie en een vraag." },
];

export function initials(name: string) {
  return name.split(" ").filter((p) => p[0] && p[0] === p[0].toUpperCase()).map((p) => p[0]).slice(0, 2).join("");
}
