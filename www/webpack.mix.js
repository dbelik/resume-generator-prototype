// @NOTE: Misc.
const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        // @NOTE: These aliases must be synced with paths in "tsconfig.json" file.
        alias: {
            "@frontend": path.resolve(__dirname, "resources/js/frontend"),
            "@styles": path.resolve(__dirname, "resources/sass"),
            "@public": path.resolve(__dirname, "public"),
        },
    },

    output: {
        filename: "[name].js?id=[hash]",
    },
});

mix.ts("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
