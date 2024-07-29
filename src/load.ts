import { exists } from "@std/fs";
import { basename } from "@std/path";
import { getArticle, getArticles, getAudio } from "./api.ts";
import { type Entry } from "./types/entries.ts";

/**
 * Load article entries from file or API
 *
 * - if file exists, loads from file
 * - otherwise, fetches from API and saves to file
 * - note: assumes directory exists
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

  const path = `tmp/${handle}/entries.json`;

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
 * - note: assumes directory exists
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

  const path = `tmp/${handle}/${slug}/article.html`;

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

/**
 * Load audio for article from file or API
 *
 * - if file exists, does nothing
 * - otherwise, fetches from API and saves to file
 * - note: assumes directory exists
 * - note: no SID since from external CDN
 *
 * @param url URL of audio
 * @param slug slug of article
 * @param handle Substack handle
 * @returns HTML string of article
 */
export async function loadAudio(
  url: string,
  slug: string,
  handle: string,
): Promise<void> {
  // todo: is base of URL unique?
  const base = basename(url);
  console.debug(`Loading audio ${base}`);

  const path = `out/${handle}/${slug}/${base}`;

  if (
    await exists(path, {
      isReadable: true,
      isFile: true,
    })
  ) {
    return;
  }

  const body = await getAudio(url, handle);

  const file = await Deno.create(path);

  try {
    await body.pipeTo(file.writable);
  } catch (e) {
    await Deno.remove(path);
    file.close();
    throw new Error(`Download was interrupted: '${e}'`);
  }
}
