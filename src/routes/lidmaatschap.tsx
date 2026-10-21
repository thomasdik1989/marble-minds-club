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
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Lidmaatschap" intro="Iedereen is welkom, of u nu net begint of al jaren achter de computer zit." />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2">
        <section className="rounded-3xl border-4 border-primary bg-card p-6">
          <h2 className="text-3xl font-bold">Wat krijgt u?</h2>
          <ul className="mt-4 space-y-3">
            {["Elke donderdag toegang tot de clubavond", "Korting op alle cursussen", "Hulp van de Technische Dienst", "Koffie, thee en gezelligheid"].map((t) => (
              <li key={t} className="flex gap-3"><Check aria-hidden="true" className="mt-1 shrink-0 text-primary" strokeWidth={3} /> {t}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border-4 border-primary bg-accent p-6 text-accent-foreground">
          <h2 className="text-3xl font-bold">Aanmelden</h2>
          <p className="mt-4">Kom langs op de clubdag ({club.clubday.toLowerCase()}) of stuur een e-mail. De contributie hoort u bij aanmelding.</p>
          <p className="mt-4"><a className="inline-flex min-h-12 items-center rounded-xl bg-primary px-6 font-bold text-primary-foreground" href={`mailto:${club.email}?subject=Aanmelden lidmaatschap`}>Mail om lid te worden</a></p>
        </section>
      </div>
    </>
  ),
});
