import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import marble from "@/assets/marble.jpg";
import { club } from "@/lib/content";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/nieuws", label: "Nieuws" },
  { to: "/bestuur", label: "Bestuur" },
  { to: "/lidmaatschap", label: "Lidmaatschap" },
  { to: "/cursussen", label: "Cursussen" },
  { to: "/technische-dienst", label: "Technische Dienst" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const previousPath = useRef(pathname);
  const mainRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const focusContent = () => {
    const heading = mainRef.current?.querySelector("h1");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    } else {
      mainRef.current?.focus({ preventScroll: true });
    }
  };
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    setOpen(false);
    const frame = requestAnimationFrame(focusContent);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return (
    <div className="marble min-h-dvh flex flex-col" style={{ ["--marble-url" as string]: `url(${marble})` }}>
      <a href="#inhoud" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 rounded-lg bg-primary px-5 py-3 text-primary-foreground font-bold">
        Direct naar de inhoud
      </a>
      <header className="border-b-4 border-primary bg-card/95">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="group flex items-center gap-3 no-underline">
            <span aria-hidden="true" className="flex size-14 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground -rotate-6 group-hover:rotate-0 transition-transform">
              C<span className="text-highlight">c</span>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-2xl font-bold text-foreground">{club.short}</span>
              <span className="block text-base text-muted-foreground [overflow-wrap:anywhere]">Computerclub Heerhugowaard</span>
            </span>
          </Link>
          <Button
            ref={menuRef}
            variant="outline"
            type="button"
            className="md:hidden inline-flex h-auto min-h-12 items-center gap-2 rounded-xl border-2 bg-card px-4 text-base font-bold"
            aria-expanded={open}
            aria-controls="hoofdmenu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />} Menu
          </Button>
          <nav aria-label="Hoofdmenu" id="hoofdmenu" className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
            onKeyDown={(event) => {
              if (event.key === "Escape" && open) {
                event.preventDefault();
                setOpen(false);
                menuRef.current?.focus();
              }
            }}>
            <ul className="flex flex-col gap-2 md:flex-row md:flex-wrap">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={(event) => {
                      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                      setOpen(false);
                      if (pathname.replace(/\/$/, "") === n.to.replace(/\/$/, "")) focusContent();
                    }}
                    activeOptions={{ exact: n.to === "/" }}
                    className="block min-h-12 rounded-xl border-2 border-transparent px-4 py-2.5 font-bold text-foreground no-underline hover:border-primary hover:bg-accent data-[status=active]:bg-primary data-[status=active]:text-primary-foreground data-[status=active]:underline data-[status=active]:decoration-highlight"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main ref={mainRef} id="inhoud" tabIndex={-1} className="flex-1">{children}</main>

      <footer className="mt-16 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">Kom langs!</h2>
            <p className="mt-2">{club.clubday}</p>
            <p className="mt-1 flex gap-2"><MapPin aria-hidden="true" className="mt-1 shrink-0" /> {club.venue}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="mt-2 flex gap-2"><Phone aria-hidden="true" className="mt-1 shrink-0" /> <a className="underline" href={`tel:${club.phone.replace(/-/g, "")}`}>{club.phone}</a></p>
            <p className="mt-1 flex gap-2"><Mail aria-hidden="true" className="mt-1 shrink-0" /> <a className="underline" href={`mailto:${club.email}`}>{club.email}</a></p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Postadres</h2>
            <address className="mt-2 not-italic">{club.postal.map((l) => <span key={l} className="block">{l}</span>)}</address>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-base">© {new Date().getFullYear()} Computerclub Heerhugowaard</p>
      </footer>
    </div>
  );
}

export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-12 pb-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
        {title}
        <span aria-hidden="true" className="ml-2 inline-block rotate-12 text-highlight [text-shadow:0_0.1em_0_var(--primary)]">✦</span>
      </h1>
      {intro && <p className="mt-4 text-xl">{intro}</p>}
    </div>
  );
}
