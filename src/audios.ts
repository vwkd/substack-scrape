import { loadArticles, loadAudio } from "./load.ts";
import { isPaid } from "./types/entries.ts";

const HANDLE = Deno.env.get("HANDLE");
const SID = Deno.env.get("SID");

if (!HANDLE) {
  throw new Error(`HANDLE env var not set`);
}

console.info(`Scraping audios of handle ${HANDLE}`);

if (!SID) {
  console.info(`Note: No SID provided, free audios only`);
}

await Deno.mkdir(`out/${HANDLE}`, { recursive: true });
await Deno.mkdir(`tmp/${HANDLE}`, { recursive: true });

const entries = await loadArticles(HANDLE, SID);

for (const item of entries) {
  const { slug, audio_items } = item;

  if (!isPaid(item)) {
    console.debug(`Skipping paid article ${slug}`);
    continue;
  }

  await Deno.mkdir(`out/${HANDLE}/${slug}`, { recursive: true });

  console.debug(`Loading audios for article ${slug}`);

  for (const { voice_id, audio_url, status } of audio_items) {
    if (status == "paywalled") {
      console.debug(`Skipping paid audio ${voice_id}`);
      continue;
    }

    // todo: validate that audio_url is not null if status is not paywalled
    await loadAudio(audio_url!, slug, HANDLE);
  }
}
