import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { board, club, initials } from "@/lib/content";

export const Route = createFileRoute("/bestuur/$slug")({
  loader: ({ params }) => {
    const p = board.find((b) => b.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name}, ${loaderData.role} — CompuClub` },
          { name: "description", content: loaderData.bio },
          { property: "og:title", content: `${loaderData.name} — CompuClub` },
          { property: "og:description", content: loaderData.bio },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Niet gevonden — CompuClub" }, { name: "robots", content: "noindex" }],
  }),
  component: Detail,
});

function Detail() {
  const p = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <p><Link to="/bestuur" className="font-bold text-primary underline">← Terug naar het bestuur</Link></p>
      <div className="mt-6 grid gap-8 rounded-3xl border-4 border-primary bg-card p-6 md:grid-cols-[14rem_minmax(0,1fr)]">
        <div aria-hidden="true" className="mx-auto w-full max-w-56 grid aspect-square place-items-center rounded-2xl bg-accent font-display text-7xl font-bold -rotate-3">{initials(p.name)}</div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">{p.name}</h1>
          <p className="mt-1 text-xl font-bold">{p.role}</p>
          <p className="mt-4">{p.bio}</p>
          <p className="mt-4">Contact: <a className="font-bold text-primary underline" href={`mailto:${club.email}`}>{club.email}</a></p>
        </div>
      </div>
    </div>
  );
}
