import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CourseIcon } from "@/components/Cards";
import { club, courses } from "@/lib/content";

export const Route = createFileRoute("/cursussen/$slug")({
  loader: ({ params }) => {
    const c = courses.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Cursussen CompuClub` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — CompuClub` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Niet gevonden — CompuClub" }, { name: "robots", content: "noindex" }],
  }),
  component: Detail,
});

function Detail() {
  const c = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <p><Link to="/cursussen" className="font-bold text-primary underline">← Terug naar alle cursussen</Link></p>
      <div className="mt-6 grid gap-8 rounded-3xl border-4 border-primary bg-card p-6 md:grid-cols-[14rem_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-56 grid aspect-square place-items-center rounded-2xl bg-accent rotate-2"><CourseIcon icon={c.icon} className="size-28" /></div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">{c.title}</h1>
          <p className="mt-2 inline-block rounded-full border-2 px-3 font-bold">Niveau: {c.level}</p>
          <p className="mt-4 text-xl">{c.summary}</p>
          {c.description?.map((para) => <p key={para} className="mt-4">{para}</p>)}
          {c.topics && (
            <>
              <h2 className="mt-6 text-2xl font-bold">Wat komt aan bod</h2>
              <ul className="mt-2 list-disc pl-6">{c.topics.map((t) => <li key={t}>{t}</li>)}</ul>
            </>
          )}
          <h2 className="mt-6 text-2xl font-bold">Praktisch</h2>
          <ul className="mt-2 list-disc pl-6">{c.details.map((d) => <li key={d}>{d}</li>)}</ul>
          <p className="mt-6">Aanmelden of vragen? Mail <a className="font-bold text-primary underline" href={`mailto:${club.courseEmail}`}>{club.courseEmail}</a></p>
        </div>
      </div>
    </div>
  );
}
