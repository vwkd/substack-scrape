# README

Scrape articles from Substack



## Features

- download articles as HTML
- download TTS audios as MP3
- cache raw files



## Requirements

- Substack handle, e.g. from page url `https://foo.substack.com/`
- (for paywalled articles) Substack access token from account with subscription, e.g. from cookie `substack_sid`
- Deno



## Usage

- set environmental variables in `.env` file
- scrape articles

```sh
deno task articles
```

- scrape TTS audios

```sh
deno task audios
```

- can convert HTML to markdown using pandoc and Nushell

```sh
ls out/handle/ | where type == "dir" | get name | par-each { cd $in; pandoc --wrap=none --strip-comments -f html-native_divs-native_spans -t gfm-tex_math_dollars-raw_html -o article.md article.html }
```
