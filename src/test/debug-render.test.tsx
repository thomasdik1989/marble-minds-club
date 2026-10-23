// @vitest-environment jsdom
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("debug render", () => {
  it("dumps what RouterProvider produces", async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
      context: { queryClient: new QueryClient() },
    });
    const { container } = render(<RouterProvider router={router} />);
    console.log("state.isLoading:", router.state.isLoading, "matches:", router.state.matches.length);
    await new Promise((r) => setTimeout(r, 800));
    console.log("DOC:", document.documentElement.outerHTML.slice(0, 900));
    console.log("BODY:", document.body.innerHTML.slice(0, 400));
    expect(true).toBe(true);
  });
});
