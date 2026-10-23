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
    await router.load();
    console.log("after load — isLoading:", router.state.isLoading, "matches:", router.state.matches.length);
    const { container } = render(<RouterProvider router={router} />);
    await new Promise((r) => setTimeout(r, 400));
    console.log("BODY:", document.body.innerHTML.slice(0, 700));
    console.log("CONTAINER:", container.innerHTML.slice(0, 300));
    expect(true).toBe(true);
  });
});
