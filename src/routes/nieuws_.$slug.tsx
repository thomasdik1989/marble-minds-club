import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { news } from "@/lib/content";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

export const Route = createFileRoute("/nieuws_/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Nieuws CompuClub` },
          { name: "description", content: loaderData.body },
          { property: "og:title", content: `${loaderData.title} — CompuClub` },
          { property: "og:description", content: loaderData.body },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Niet gevonden — CompuClub" }, { name: "robots", content: "noindex" }],
  }),
  component: Detail,
});

function Detail() {
  const item = Route.useLoaderData();
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <p><Link to="/nieuws" className="font-bold text-primary underline">← Terug naar het nieuws</Link></p>
      <article className="mt-6 rounded-3xl border-4 border-primary bg-card p-6 shadow-[0.4rem_0.4rem_0_var(--primary)]">
        <p className="font-bold"><time dateTime={item.date}>{formatDate(item.date)}</time></p>
        <h1 className="mt-1 text-3xl sm:text-4xl font-bold text-primary">{item.title}</h1>
        <p className="mt-4 text-xl">{item.body}</p>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="gerelateerd-nieuws" className="mt-12">
          <h2 id="gerelateerd-nieuws" className="text-2xl font-bold text-primary">Meer nieuws</h2>
          <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((n) => (
              <li key={n.slug}>
                <Link
                  to="/nieuws/$slug"
                  params={{ slug: n.slug }}
                  className="group block h-full rounded-3xl border-4 border-primary bg-card p-5 no-underline shadow-[0.4rem_0.4rem_0_var(--primary)] transition-transform hover:-translate-y-1"
                >
                  <p className="text-base font-bold"><time dateTime={n.date}>{formatDate(n.date)}</time></p>
                  <h3 className="mt-1 text-xl font-bold">{n.title}</h3>
                  <span className="mt-2 inline-block font-bold text-primary underline">Lees verder<span className="sr-only">: {n.title}</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
