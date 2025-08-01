# Jordan Thirus's Shared 11ty Plugins

This repo holds some things that I've made or abstracted from other 11ty starters that I want to share among my 11ty sites so I don't need to copy files around. Not published on npm because I'm (probably) the only one using this.

## Plugins

### `processSass`

Adds an extension that processes `.scss` files into `css` files. The output will be minified by default and the extension supports importing from node packages with the `pkg` prefix. The site's configuration will need to manually include the `scss` template format.

### `minMaxHtml`

Minify or pretty print HTML depending on environment variable `ELEVENTY_ENV`.

- `development` = pretty printed
- `production` = minified

### `tags`

Filters and collections sourced from the [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) and [eleventy-duo](https://github.com/yinkakun/eleventy-duo) starters.

- `getKeys` = get keys from object
- `filterTagList` = removes `all` and `posts` from a list of tags
- `sortAlphabetically`
- `tagList` = collection containing all tags excepting `all`, `nav`, `post`, `posts`

### `dateFilters`

Date filters sourced from the [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) starter.

- `htmlDateString` = format date as `yyyy-MM-dd`
- `readableDate` = format date as `dd LLLL yyyy`