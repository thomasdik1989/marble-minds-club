// Foto's van bestuursleden. Plaats een bestand met de naam van de slug van het
// bestuurslid in `src/assets/people/`, bijvoorbeeld `voorzitter.jpg`.
// Zonder foto wordt het paneel met de initialen getoond.
const modules = import.meta.glob<string>("/src/assets/people/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const photos: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const file = path.split("/").pop() ?? "";
  const slug = file.replace(/\.[^.]+$/, "");
  photos[slug] = url;
}

export function personPhoto(slug: string): string | undefined {
  return photos[slug];
}
