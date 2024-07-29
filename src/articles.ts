import { loadArticle, loadArticles } from "./load.ts";
import { parse } from "./parse.ts";
import { isPaid } from "./types/entries.ts";

const HANDLE = Deno.env.get("HANDLE");
const SID = Deno.env.get("SID");

if (!HANDLE) {
  throw new Error(`HANDLE env var not set`);
}

console.info(`Scraping articles of handle ${HANDLE}`);

if (!SID) {
  console.info(`Note: No SID provided, free articles only`);
}

await Deno.mkdir(`out/${HANDLE}`, { recursive: true });
await Deno.mkdir(`tmp/${HANDLE}`, { recursive: true });

const entries = await loadArticles(HANDLE, SID);

for (const item of entries) {
  const { slug } = item;

  if (!isPaid(item)) {
    console.debug(`Skipping paid article ${slug}`);
    continue;
  }

  await Deno.mkdir(`out/${HANDLE}/${slug}`, { recursive: true });
  await Deno.mkdir(`tmp/${HANDLE}/${slug}`, { recursive: true });

  const articleHTML = await loadArticle(slug, HANDLE, SID);

  const article = parse(articleHTML);

  await Deno.writeTextFile(
    `tmp/${HANDLE}/${slug}/article.json`,
    JSON.stringify(article),
  );

  const bodyHTML = article.post.body_html;

  await Deno.writeTextFile(`out/${HANDLE}/${slug}/article.html`, bodyHTML);
}
