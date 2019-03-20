'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync');

gulp.task('sass', async function () {
    gulp.src('app/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        server: "./app"
    });
    gulp.watch('app/scss/*.scss', gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'serve'));