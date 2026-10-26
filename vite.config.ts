// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build (`bun run build:pages`): prerender every route to static HTML
// and skip Nitro. The default Lovable/Cloudflare build is unaffected.
// The 404.html fallback is created afterwards by scripts/github-pages-404.mjs.
const isPages = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  ...(isPages && { nitro: false }),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPages && {
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
    }),
  },
});
