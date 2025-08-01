const isDevEnv = process.env.ELEVENTY_ENV === 'development';
const isProduction = process.env.ELEVENTY_ENV === "production";

import prettier from "prettier"; 
import htmlnano from "htmlnano";

export function minMaxHtml(eleventyConfig) {
        // https://bnijenhuis.nl/notes/adding-prettier-in-eleventy-using-transforms/
        eleventyConfig.addTransform("minMaxHtml", function (content) {
            if (isDevEnv && (this.page.outputPath || "").endsWith(".html")) {
        
                let prettified = prettier.format(content, {
                    bracketSameLine: true,
                    printWidth: 128,
                    parser: "html",
                    tabWidth: 2
                });
                return prettified;
            }
        
            // If not an HTML output, return content as-is
            return content;
        });
        // Compress/Minify HTML output on production builds
        eleventyConfig.addTransform("compressHTMLOutput", (content, outputPath) => {
            const options = {
                removeEmptyAttributes: false, // Disable the module "removeEmptyAttributes"
                collapseWhitespace: "conservative", // Pass options to the module "collapseWhitespace",
                minifySvg: false,   //Disable minifying SVGs
                minifyJs: false,   //Disable minifying JS
           };
            // posthtml, posthtml-render, and posthtml-parse options
            const postHtmlOptions = {
                lowerCaseTags: true, // https://github.com/posthtml/posthtml-parser#options
                quoteAllAttributes: false, // https://github.com/posthtml/posthtml-render#options
            };

            if (isProduction && outputPath && outputPath.endsWith(".html")) {
                return htmlnano
                    .process(content, options, htmlnano.safe, postHtmlOptions)
                    .then(function (result) {
                        return result.html;
                    })
                    .catch(function (err) {
                        console.error(err);
                    });
            }

            return content;
        });
}