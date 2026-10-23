import { createFileRoute, Link } from "@tanstack/react-router";
import { Slider } from "@/components/Slider";
import { club, news } from "@/lib/content";
import s1 from "@/assets/slide-1.jpg";
import s2 from "@/assets/slide-2.jpg";
import s3 from "@/assets/slide-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CompuClub Heerhugowaard — computerclub voor iedereen" },
      { name: "description", content: "Regionale Computerclub Noord-Holland: cursussen, hulp en gezelligheid elke donderdag in Heerhugowaard." },
      { property: "og:title", content: "CompuClub Heerhugowaard" },
      { property: "og:description", content: "Cursussen, hulp en gezelligheid elke donderdag in Heerhugowaard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { src: s1, alt: "Vijf senioren werken lachend op laptops terwijl een vrijwilliger meekijkt.", caption: "Samen leren, in je eigen tempo" },
  { src: s2, alt: "Een vrouw maakt een fotoboek op de computer in de gezellige clubruimte.", caption: "Workshop: fotoboek maken" },
  { src: s3, alt: "Een man repareert een geopende computer aan de werkbank.", caption: "De Technische Dienst helpt u verder" },
];

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Welkom bij de computerclub!</h1>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
        <Slider slides={slides} />
        <div>
          <p className="mt-4 text-xl">
            Een onafhankelijke club, opgericht in 1988, met als motto{" "}
            <strong className="bg-highlight px-1 text-foreground">“{club.motto}”</strong>.
          </p>
          <p className="mt-4">Kom gerust langs op onze clubdag: <strong>{club.clubday}</strong> in {club.venue}.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/lidmaatschap" className="inline-flex min-h-12 items-center rounded-xl bg-primary px-6 font-bold text-primary-foreground no-underline hover:underline">Lid worden</Link>
            <Link to="/cursussen" className="inline-flex min-h-12 items-center rounded-xl border-4 border-primary bg-card px-6 font-bold text-foreground no-underline hover:bg-accent">Bekijk cursussen</Link>
          </div>
        </div>
      </div>

      <section aria-labelledby="laatste-nieuws" className="mt-16">
        <h2 id="laatste-nieuws" className="text-3xl font-bold text-primary">Laatste nieuws</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <li key={n.slug}>
              <NewsCard n={n} i={i} />
            </li>
          ))}
        </ul>
        <p className="mt-6"><Link to="/nieuws" className="font-bold text-primary underline">Al het nieuws</Link></p>
      </section>
    </div>
  );
}
