# Jordan Thirus's Shared 11ty Plugins

This repo holds some things that I've made or abstracted from other 11ty starters that I want to share among my 11ty sites so I don't need to copy files around. Not published on npm because I'm (probably) the only one using this.

## Plugins

### `tailwindSass`

Creates a filter `postcss` processing of a Tailwind SCSS file using PostCSS. Suports imports. The the output CSS will be minified.


### Notes:
- Compatible with Tailwind 4.x.
- Expects the file to process to be located at `'./_includes/css/styles.css'`. Can be overridden by passing an input file as an option. i.e. `eleventyConfig.addPlugin(tailwindSass, {inputFile: './path/to/file.css});`

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