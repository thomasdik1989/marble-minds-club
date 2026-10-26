// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { news } from "@/lib/content";

// Render a real page through the real router, so the links under test are the
// ones the site actually produces — not a hand-written copy of them.
async function renderAt(path: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { queryClient: new QueryClient() },
  });
  // Nothing navigates in a test run, so the route is loaded by hand.
  await router.load();
  return render(<RouterProvider router={router} />);
}

async function sectionByHeading(name: string) {
  const heading = await screen.findByRole("heading", { name });
  const section = heading.closest("section");
  if (!section) throw new Error(`heading "${name}" is not inside a section`);
  return section as HTMLElement;
}

describe("Nieuwskaarten", () => {
  afterEach(cleanup);

  it("links each home-page news card to its own article", async () => {
    await renderAt("/");
    const section = await sectionByHeading("Laatste nieuws");

    // One card per news item, plus the "Al het nieuws" link below the grid.
    expect(within(section).getAllByRole("link")).toHaveLength(news.length + 1);

    for (const item of news) {
      const card = within(section).getByRole("link", { name: new RegExp(item.title) });
      expect(card).toHaveAttribute("href", `/nieuws/${item.slug}`);
    }
  });

  it("links each related news card on an article to its own article", async () => {
    const [first, ...rest] = news;
    if (!first) throw new Error("no news items to test");
    await renderAt(`/nieuws/${first.slug}`);

    // With no other articles there is no "Meer nieuws" section to show.
    if (rest.length === 0) {
      expect(screen.queryByRole("heading", { name: "Meer nieuws" })).not.toBeInTheDocument();
      return;
    }
    const section = await sectionByHeading("Meer nieuws");

    // The open article is never listed again, so only its siblings remain.
    expect(within(section).getAllByRole("link")).toHaveLength(rest.length);

    for (const item of rest) {
      const card = within(section).getByRole("link", { name: new RegExp(item.title) });
      expect(card).toHaveAttribute("href", `/nieuws/${item.slug}`);
    }
  });
});
