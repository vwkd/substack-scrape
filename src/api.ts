import { type Entry } from "./types/entries.ts";
import { sleep } from "./utils.ts";

const LIMIT = 12;
const DELAY = 1000;

/**
 * Get article entries from API
 *
 * @param handle Substack handle
 * @param sid Substack session ID
 * @returns list of entries
 */
export async function getArticles(
  handle: string,
  sid?: string,
): Promise<Entry[]> {
  console.debug(`Fetching article entries`);

  const entries: Entry[] = [];

  for (let offset = 0;; offset += LIMIT) {
    console.debug(`Fetching page ${offset / LIMIT + 1}`);

    const url =
      `https://${handle}.substack.com/api/v1/archive?sort=new&search=&offset=${offset}&limit=${LIMIT}`;

    const res = await fetch(url, {
      headers: buildHeaders(handle, sid),
    });

    if (!res.ok) {
      throw new Error(`Got error ${res.status} ${res.statusText}`);
    }

    // todo: verify that conforms to types
    const entriesPerPage: Entry[] = await res.json();

    if (entriesPerPage.length === 0) {
      break;
    }

    entries.push(...entriesPerPage);

    await sleep(DELAY);
  }

  return entries;
}

/**
 * Get article from API
 *
 * @param slug slug of article
 * @param handle Substack handle
 * @param sid Substack session ID
 * @returns HTML string of article
 */
export async function getArticle(
  slug: string,
  handle: string,
  sid?: string,
): Promise<string> {
  console.debug(`Fetching article`);

  // note: sleep here since in loop doesn't know if loaded from file, at worst sleeps once too much
  await sleep(DELAY);

  const url = `https://${handle}.substack.com/p/${slug}`;

  const res = await fetch(url, {
    headers: buildHeaders(handle, sid),
  });

  if (!res.ok) {
    throw new Error(`Got error ${res.status} ${res.statusText}`);
  }

  return await res.text();
}

/**
 * Get audio for article from API
 *
 * @param url URL of audio
 * @param handle Substack handle
 * @returns readable stream of audio
 */
export async function getAudio(
  url: string,
  handle: string,
): Promise<ReadableStream<Uint8Array>> {
  console.debug(`Fetching audio`);

  // note: sleep here since in loop doesn't know if file exists, at worst sleeps once too much
  await sleep(DELAY);

  const res = await fetch(url, {
    headers: buildHeaders(handle),
  });

  if (!res.ok) {
    throw new Error(`Got error ${res.status} ${res.statusText}`);
  }

  const body = res.body;

  if (!body) {
    throw new Error(`Got no body`);
  }

  return body;
}

/**
 * Build headers
 *
 * @param handle Substack handle
 * @param sid Substack session ID
 * @returns headers
 */
function buildHeaders(handle: string, sid?: string): Headers {
  return new Headers({
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    ...(sid && { "Cookie": `substack.sid=${sid}` }),
    "Host": `${handle}.substack.com`,
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.1",
  });
}
