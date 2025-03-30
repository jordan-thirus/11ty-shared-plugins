
import postcss from 'postcss';
import atImport from 'postcss-import';
import tailwindcss from '@tailwindcss/postcss';
import postcssSass from "@csstools/postcss-sass";
import cssnano from "cssnano"; 

const defaultCssFile = './_includes/css/styles.css';

export function tailwindSass(eleventyConfig, pluginOptions) {
    eleventyConfig.addAsyncFilter('postcss', (code) => {
        // we call PostCSS here.
        return postcss([
            atImport,
            tailwindcss({}), 
            postcssSass({}),
            cssnano({})
        ])
            .process(code, {
                from: pluginOptions.inputFile || defaultCssFile,
            }).then(result => {
                return result.css
            });
    });
}