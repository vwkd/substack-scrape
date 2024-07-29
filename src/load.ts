import { getArticle, getArticles } from "./api.ts";
import { type Entry } from "./types/entries.ts";

/**
 * Load article entries from file or API
 *
 * - if file exists, loads from file
 * - otherwise, fetches from API and saves to file
 *
 * @param handle Substack handle
 * @param sid Substack session ID
 * @returns list of entries
 */
export async function loadArticles(
  handle: string,
  sid?: string,
): Promise<Entry[]> {
  console.debug(`Loading article entries`);

  const path = `tmp/${handle}.json`;

  try {
    const file = await Deno.readTextFile(path);
    return JSON.parse(file);
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      const articles = await getArticles(handle, sid);
      await Deno.writeTextFile(path, JSON.stringify(articles));
      return articles;
    } else {
      throw e;
    }
  }
}

/**
 * Load article from file or API
 *
 * - if file exists, loads from file
 * - otherwise, fetches from API and saves to file
 *
 * @param slug slug of article
 * @param handle Substack handle
 * @param sid Substack session ID
 * @returns HTML string of article
 */
export async function loadArticle(
  slug: string,
  handle: string,
  sid?: string,
): Promise<string> {
  console.debug(`Loading article ${slug}`);

  const path = `tmp/${handle}/${slug}.html`;

  try {
    const file = await Deno.readTextFile(path);
    return file;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      const article = await getArticle(slug, handle, sid);
      await Deno.writeTextFile(path, article);
      return article;
    } else {
      throw e;
    }
  }
}
