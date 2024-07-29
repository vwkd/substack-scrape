# README

Scrape articles from Substack



## Features

- download articles as HTML
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
