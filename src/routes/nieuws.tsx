import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { news } from "@/lib/content";

export const Route = createFileRoute("/nieuws")({
  head: () => ({
    meta: [
      { title: "Nieuws — CompuClub Heerhugowaard" },
      { name: "description", content: "Het laatste nieuws van de computerclub in Heerhugowaard." },
      { property: "og:title", content: "Nieuws — CompuClub" },
      { property: "og:description", content: "Het laatste nieuws van de computerclub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHeader title="Nieuws" intro="Wat gebeurt er bij de club?" />
      <ol className="mx-auto grid max-w-3xl gap-6 px-5">
        {news.map((n) => (
          <li key={n.slug}>
            <article className="rounded-3xl border-4 border-primary bg-card p-6">
              <p className="font-bold"><time dateTime={n.date}>{new Date(n.date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}</time></p>
              <h2 className="mt-1 text-3xl font-bold">
                <Link to="/nieuws/$slug" params={{ slug: n.slug }} className="text-primary underline decoration-2 underline-offset-4">{n.title}</Link>
              </h2>
              <p className="mt-3">{n.body}</p>
              <p className="mt-3">
                <Link to="/nieuws/$slug" params={{ slug: n.slug }} className="font-bold text-primary underline">
                  Lees verder<span className="sr-only">: {n.title}</span>
                </Link>
              </p>
            </article>
          </li>
        ))}
      </ol>
    </>
  ),
});
