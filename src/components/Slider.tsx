import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Slide = { src: string; alt: string; caption: string };

// Accessible carousel: no autoplay, buttons + arrow keys, announced position.
export function Slider({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + slides.length) % slides.length);
   const s = slides[i];
   if (!s) return null;

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Foto's van de club"
      className="relative overflow-hidden rounded-3xl border-4 border-primary bg-card shadow-[0.3rem_0.3rem_0_var(--primary)] sm:shadow-[0.6rem_0.6rem_0_var(--primary)]"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          go(i + (e.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <div role="group" aria-roledescription="dia" aria-label={`${i + 1} van ${slides.length}`}>
        <img src={s.src} alt={s.alt} width={1600} height={800} className="aspect-[2/1] w-full object-cover" />
        <p className="bg-primary px-5 py-4 text-xl font-bold text-primary-foreground">{s.caption}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 bg-card px-4 py-3">
        <Button variant="outline" type="button" aria-label="Vorige foto" onClick={() => go(i - 1)} className="inline-flex h-auto min-h-12 items-center gap-1 rounded-xl border-2 bg-card px-4 text-base font-bold hover:bg-accent">
          <ChevronLeft aria-hidden="true" /> Vorige
        </Button>
        <ul className="flex gap-2" aria-label="Kies een foto">
          {slides.map((sl, n) => (
            <li key={sl.src}>
              <Button
                variant="outline"
                type="button"
                onClick={() => go(n)}
                aria-current={n === i ? "true" : undefined}
                aria-pressed={n === i}
                aria-label={`Foto ${n + 1}: ${sl.caption}`}
                className={`grid size-12 shrink-0 place-items-center rounded-full border-2 p-0 text-base font-bold ${n === i ? "bg-primary text-primary-foreground underline decoration-2 underline-offset-4 hover:bg-primary hover:text-primary-foreground" : "bg-card hover:bg-accent"}`}
              >
                {n + 1}
              </Button>
            </li>
          ))}
        </ul>
        <Button variant="outline" type="button" aria-label="Volgende foto" onClick={() => go(i + 1)} className="inline-flex h-auto min-h-12 items-center gap-1 rounded-xl border-2 bg-card px-4 text-base font-bold hover:bg-accent">
          Volgende <ChevronRight aria-hidden="true" />
        </Button>
      </div>
      <p aria-live="polite" aria-atomic="true" className="sr-only">Foto {i + 1} van {slides.length}: {s.caption}</p>
    </section>
  );
}
