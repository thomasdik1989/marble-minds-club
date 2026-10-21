import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string; caption: string };

// Accessible carousel: no autoplay, buttons + arrow keys, announced position.
export function Slider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const live = useRef<HTMLParagraphElement>(null);
  const go = (n: number) => setI((n + slides.length) % slides.length);
  const s = slides[i];

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Foto's van de club"
      className="relative overflow-hidden rounded-3xl border-4 border-primary bg-card shadow-[0.6rem_0.6rem_0_var(--primary)]"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
    >
      <div role="group" aria-roledescription="dia" aria-label={`${i + 1} van ${slides.length}`}>
        <img src={s.src} alt={s.alt} width={1600} height={800} className="aspect-[2/1] w-full object-cover" />
        <p className="bg-primary px-5 py-4 text-xl font-bold text-primary-foreground">{s.caption}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 bg-card px-4 py-3">
        <button type="button" onClick={() => go(i - 1)} className="inline-flex min-h-12 items-center gap-1 rounded-xl border-2 px-4 font-bold hover:bg-accent">
          <ChevronLeft aria-hidden="true" /> Vorige
        </button>
        <ul className="flex gap-2" aria-label="Kies een foto">
          {slides.map((sl, n) => (
            <li key={sl.src}>
              <button
                type="button"
                onClick={() => go(n)}
                aria-current={n === i ? "true" : undefined}
                aria-label={`Foto ${n + 1}: ${sl.caption}`}
                className={`grid size-12 place-items-center rounded-full border-2 font-bold ${n === i ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
              >
                {n + 1}
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => go(i + 1)} className="inline-flex min-h-12 items-center gap-1 rounded-xl border-2 px-4 font-bold hover:bg-accent">
          Volgende <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <p ref={live} aria-live="polite" className="sr-only">Foto {i + 1} van {slides.length}: {s.caption}</p>
    </section>
  );
}
