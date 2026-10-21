import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { PersonCard } from "@/components/Cards";
import { board } from "@/lib/content";

export const Route = createFileRoute("/bestuur/")({
  head: () => ({
    meta: [
      { title: "Bestuur — CompuClub Heerhugowaard" },
      { name: "description", content: "Maak kennis met het bestuur van de computerclub." },
      { property: "og:title", content: "Bestuur — CompuClub" },
      { property: "og:description", content: "Maak kennis met het bestuur van de computerclub." },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Bestuur" intro="De mensen achter de club. Klik op een kaart voor meer informatie." />
      <ul className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {board.map((p, n) => <li key={p.slug}><PersonCard p={p} n={n} /></li>)}
      </ul>
    </>
  ),
});
