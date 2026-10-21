import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import s3 from "@/assets/slide-3.jpg";
import { club } from "@/lib/content";

export const Route = createFileRoute("/technische-dienst")({
  head: () => ({
    meta: [
      { title: "Technische Dienst — CompuClub Heerhugowaard" },
      { name: "description", content: "Computer traag of kapot? De Technische Dienst van de club helpt leden verder." },
      { property: "og:title", content: "Technische Dienst — CompuClub" },
      { property: "og:description", content: "Hulp bij computerproblemen voor leden." },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Technische Dienst" intro="Computer traag, printer stuk of hulp nodig bij installeren? Wij kijken graag mee." />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:items-start">
        <img src={s3} alt="Een vrijwilliger repareert een computer aan de werkbank." width={1600} height={800} loading="lazy" className="rounded-3xl border-4 border-primary rotate-1" />
        <section className="rounded-3xl border-4 border-primary bg-card p-6">
          <h2 className="text-3xl font-bold">Zo werkt het</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Neem uw apparaat mee op de clubdag.</li>
            <li>Vertel wat er mis is aan een van onze vrijwilligers.</li>
            <li>We zoeken samen naar een oplossing en leggen uit wat we doen.</li>
          </ol>
          <p className="mt-4">Vragen vooraf? <a className="font-bold text-primary underline" href={`mailto:${club.email}`}>{club.email}</a></p>
        </section>
      </div>
    </>
  ),
});
