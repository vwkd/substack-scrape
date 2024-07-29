import { type Article } from "./types/article.ts";

/**
 * matches `<script>window._preloads        = JSON.parse("...")</script>`
 */
const re = /<script>window\._preloads\s*=\s*JSON\.parse\((.+?)\)<\/script>/;

/**
 * Parse article from JSON in script tag in HTML
 *
 * @param html string with HTML
 */
export function parse(html: string): Article {
  const matches = html.match(re);

  if (!matches) {
    throw new Error(`No JSON found in HTML`);
  }

  const jsonStr = matches[1];

  // note: parse twice since first is JavaScript string literal
  // todo: verify that conforms to types
  const json: string = JSON.parse(jsonStr);
  const obj: Article = JSON.parse(json);

  return obj;
}
