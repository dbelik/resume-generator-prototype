// @NOTE: Plugins.
require('laravel-mix-eslint-config');

// @NOTE: Misc.
const mix = require('laravel-mix');
const path = require('path');

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
            // @NOTE: Aliases for React.
            '@actions': path.resolve(__dirname, 'resources/ts/actions'),
            '@components': path.resolve(__dirname, 'resources/ts/components'),
            '@constants': path.resolve(__dirname, 'resources/ts/constants'),
            '@pages': path.resolve(__dirname, 'resources/ts/pages'),
            '@reducers': path.resolve(__dirname, 'resources/ts/reducers'),
            '@router': path.resolve(__dirname, 'resources/ts/router'),
            '@store': path.resolve(__dirname, 'resources/ts/store'),
            '@theme': path.resolve(__dirname, 'resources/ts/theme'),
            '@interfaces': path.resolve(__dirname, 'interfaces'),

            // @NOTE: You can't create custom alias named "@types", because
            // Typescript will resolve it as some other package. Use "@js/types"
            // instead to import from types folder.
            // '@types': path.resolve(__dirname, 'types'),

            '@js': path.resolve(__dirname, 'resources/ts'),

            // @NOTE: Misc aliases.
            '@styles': path.resolve(__dirname, 'resources/sass'),
            '@public': path.resolve(__dirname, 'public'),
        },
    },

    output: {
        filename: '[name].js?id=[hash]',
    },
});

mix.ts('resources/ts/index.tsx', 'public/js')
    .eslint({
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {},
    })
    .sass('resources/sass/app.scss', 'public/css');
