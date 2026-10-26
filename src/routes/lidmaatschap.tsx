import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/SiteLayout";
import { club } from "@/lib/content";

export const Route = createFileRoute("/lidmaatschap")({
  head: () => ({
    meta: [
      { title: "Lidmaatschap — CompuClub Heerhugowaard" },
      { name: "description", content: "Word lid van de computerclub: wat krijgt u en hoe meldt u zich aan." },
      { property: "og:title", content: "Lidmaatschap — CompuClub" },
      { property: "og:description", content: "Word lid van de computerclub in Heerhugowaard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Lidmaatschap" intro="Iedereen is welkom, of u nu net begint of al jaren achter de computer zit." />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2">
        <section className="rounded-3xl border-4 border-primary bg-card p-6">
          <h2 className="text-3xl font-bold">Wat krijgt u?</h2>
          <p className="mt-4">Het verenigingsjaar loopt van 1 januari tot en met 31 december.</p>
          <p className="mt-4 text-xl font-bold">Contributie: € 36,00 per jaar</p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3"><Check aria-hidden="true" className="mt-1 shrink-0 text-primary" strokeWidth={3} /> Met het lidmaatschap is ook uw levenspartner lid.</li>
            <li className="flex gap-3"><Check aria-hidden="true" className="mt-1 shrink-0 text-primary" strokeWidth={3} /> Na ontvangst van uw betaling door de penningmeester ontvangt u bij de infobalie een lidmaatschapskaart.</li>
          </ul>
          <p className="mt-6">Met de lidmaatschapskaart maakt u gebruik van diensten zoals de helpdesk, de technische dienst en de documentatie.</p>
        </section>
        <section className="rounded-3xl border-4 border-primary bg-accent p-6 text-accent-foreground">
          <h2 className="text-3xl font-bold">Aanmelden</h2>
          <p className="mt-4">Aanmeldingsformulieren voor het lidmaatschap liggen bij de infobalie.</p>
          <p className="mt-4">Het lidmaatschap kan op elk moment ingaan. U bent dan contributie naar rato van het aantal nog niet verstreken kalendermaanden verschuldigd.</p>
          <p className="mt-4"><a className="inline-flex min-h-12 items-center rounded-xl bg-primary px-6 font-bold text-primary-foreground" href={`mailto:${club.email}?subject=Aanmelden lidmaatschap`}>Mail om lid te worden</a></p>
        </section>
        <section className="rounded-3xl border-4 border-primary bg-card p-6 md:col-span-2">
          <h2 className="text-3xl font-bold">Beëindigen van het lidmaatschap</h2>
          <p className="mt-4">Het lidmaatschap kan worden beëindigd:</p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Schriftelijk, onder vermelding van het lidmaatschapsnummer.</li>
            <li>Ten minste één maand voor het einde van het lidmaatschapsjaar.</li>
          </ul>
        </section>
      </div>
    </>
  ),
});
