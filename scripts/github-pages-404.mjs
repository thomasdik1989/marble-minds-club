// GitHub Pages serves 404.html for unknown paths. The TanStack prerenderer refuses
// non-200 responses, so reuse the prerendered shell: the client router then renders
// the root notFoundComponent for the requested URL.
import { copyFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = join(import.meta.dirname, "..", "dist", "client");
await copyFile(join(outDir, "index.html"), join(outDir, "404.html"));
console.log("Wrote dist/client/404.html");
