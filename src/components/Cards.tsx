import { Link } from "@tanstack/react-router";
import { Book, Calendar, Camera, Laptop, Shield, Smartphone } from "lucide-react";
import type { Course, NewsItem, Person } from "@/lib/content";
import { formatDate, initials } from "@/lib/content";

const icons = { book: Book, calendar: Calendar, camera: Camera, laptop: Laptop, phone: Smartphone, shield: Shield };
const tilt = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-2", "rotate-2"];

const cardCls =
  "group block h-full rounded-3xl border-4 border-primary bg-card p-5 text-card-foreground no-underline shadow-[0.4rem_0.4rem_0_var(--primary)] transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:rotate-0";

export function PersonCard({ p, n }: { p: Person; n: number }) {
  return (
    <Link to="/bestuur/$slug" params={{ slug: p.slug }} className={`${cardCls} ${tilt[n % tilt.length]}`}>
      <div aria-hidden="true" className="grid aspect-square place-items-center rounded-2xl bg-accent font-display text-6xl font-bold text-accent-foreground">
        {initials(p.name)}
      </div>
      <h2 className="mt-4 text-2xl font-bold">{p.name}</h2>
      <p className="text-lg">{p.role}</p>
      <span className="mt-2 inline-block font-bold text-primary underline">Lees meer<span className="sr-only"> over {p.name}</span></span>
    </Link>
  );
}

export function CourseIcon({ icon, className }: { icon: Course["icon"]; className?: string }) {
  const I = icons[icon];
  return <I aria-hidden="true" className={className} strokeWidth={1.5} />;
}

export function CourseCard({ c, n }: { c: Course; n: number }) {
  return (
    <Link to="/cursussen/$slug" params={{ slug: c.slug }} className={`${cardCls} ${tilt[n % tilt.length]}`}>
      <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-accent text-accent-foreground">
        <CourseIcon icon={c.icon} className="size-24" />
      </div>
      <p className="mt-4 inline-block rounded-full border-2 px-3 text-base font-bold">Niveau: {c.level}</p>
      <h2 className="mt-2 text-2xl font-bold">{c.title}</h2>
      <p className="mt-1">{c.summary}</p>
      <span className="mt-2 inline-block font-bold text-primary underline">Bekijk cursus<span className="sr-only">: {c.title}</span></span>
    </Link>
  );
}

export function NewsCard({ n, i }: { n: NewsItem; i: number }) {
  return (
    <Link to="/nieuws/$slug" params={{ slug: n.slug }} className={`${cardCls} flex flex-col ${tilt[i % tilt.length]}`}>
      <p className="text-base font-bold"><time dateTime={n.date}>{formatDate(n.date)}</time></p>
      <h3 className="mt-1 text-2xl font-bold">{n.title}</h3>
      <p className="mt-2">{n.body}</p>
      <span className="mt-auto pt-3 inline-block font-bold text-primary underline">Lees verder<span className="sr-only">: {n.title}</span></span>
    </Link>
  );
}
