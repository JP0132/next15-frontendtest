const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Configuring the paths
const files = {
    htmlPath: 'src/**/*.html',
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js',
    imagePath: 'src/assets/**/*'
};

// Compile HTML and copy it to dist
function htmlTask() {
    return src(files.htmlPath)
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}

// Compile Sass to CSS
function scssTask() {
    return src(files.scssPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

// Bundle and Minify JavaScript
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream());
}

// Copy images to dist
function imageTask() {
    return src(files.imagePath, {base: 'src', encoding: false})
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}

// Watch files and serve via BrowserSync
function watchTask() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    watch(files.htmlPath, htmlTask);
    watch(files.scssPath, scssTask);
    watch(files.jsPath, jsTask);
    watch(files.imagePath, imageTask);
}

// Export tasks
exports.default = series(
    parallel(htmlTask, scssTask, jsTask, imageTask),
    watchTask
);