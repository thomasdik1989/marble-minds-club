import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { CourseCard } from "@/components/Cards";
import { courses } from "@/lib/content";

export const Route = createFileRoute("/cursussen/")({
  head: () => ({
    meta: [
      { title: "Cursussen — CompuClub Heerhugowaard" },
      { name: "description", content: "Computercursussen voor beginners en gevorderden: fotobewerking, smartphone, Windows en meer." },
      { property: "og:title", content: "Cursussen — CompuClub" },
      { property: "og:description", content: "Computercursussen voor beginners en gevorderden." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Cursussen" intro="Van eerste klik tot fotoboek. Kies een cursus voor alle details." />
      <ul className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, n) => <li key={c.slug}><CourseCard c={c} n={n} /></li>)}
      </ul>
    </>
  ),
});
