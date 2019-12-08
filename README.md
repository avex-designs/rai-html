# Documentation

## Minimum requirements

* node >= 9.5.0
* npm >= 5.6.0
* gulp >= 4.0.0
* gulp-cli >= 2.0.1

## Start working

* `npm i`
* `gulp`

## Gulp tasks

* `default` - the main task, runs `build`, `watch` and `serve`.
* `build` - builds all files, launches `copy`, `images`, `sprites:png`, `sprites:svg`, `pug`, `scss`, `js` tasks.
* `watch` - starts tracking files, so that when they are changed, they are automatically reassembled.
* `serve` - launches the Browsersync server.
* `pug` - starts the assembly of Pug-templates.
* `images` - starts the assembly of images.
* `sprites:png` - starts the generation of PNG sprites.
* `sprites:svg` - starts the generation of SVG sprites.
* `scss` - starts the assembly of styles.
* `js` - starts the assembly of scripts.
* `copy` - starts the assembly of additional resources.
* `lint` - runs `lint:js`, `lint:pug`, `lint:scss` sequentially.
* `lint:js` - checks JavaScript files with ESLint linter.
* `lint:pug` - checks Pug files with the pug-lint linter.
* `lint:scss` - checks SCSS files with the stylelint linter.
* `optimize:svg` - optimizes and formats the code of SVG files in the `src/images` folder.
* `optimize:images` - optimizes images in the `src/images` folder.
* `zip` - creates a project archive.

## Extra options:

* `--ci` - enables CI mode (`--no-cache --no-notify --no-open --throw-errors`).
* `--fix` - automatically fixes errors when checking the code with a linter (only for `lint:js`).
* `--minify` - enables file minification (only for `sprites:svg`, `pug`, `scss` and `js`).
* `--minify-html` - enables minification of HTML files (takes precedence over `--minify`).
* `--minify-css` - enables minification of CSS files (takes precedence over `--minify`).
* `--minify-js` - enables the minification of JS files (takes precedence over `--minify`).
* `--minify-svg` - enables minification of SVG files (takes precedence over `--minify`).
* `--no-cache` - disables caching (only for `copy`, `images` and `pug`).
* `--no-debug` - disables debug output of the list of processed files.
* `--no-notify` - disables error notifications.
* `--no-open` - disables the automatic launch of the browser (only for `serve`).
* `--port` - sets the server port (only for `serve`).
* `--spa` - enables single-page application mode (`serve` only).
* `--throw-errors` - aborts the assembly when an error occurs.
