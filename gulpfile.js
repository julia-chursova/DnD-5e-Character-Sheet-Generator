var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var minimifyJS = require('gulp-uglify');
var bundle = require('gulp-concat');


// DEBUG build - without minimification
gulp.task('process-app-scripts-debug', function () {
    return gulp.src('./scripts/app/**/*.js')
        .pipe(bundle('app.js'))
        .pipe(gulp.dest('./scripts'));
});

gulp.task('process-libs-scripts-debug', function () {
    return gulp.src(['./scripts/libs/angular.min.js', './scripts/libs/ngDraggable.modified.js', './scripts/libs/acute.select.modified.js', './scripts/libs/dexie.js'])
        .pipe(bundle('libs.js'))
        .pipe(gulp.dest('./scripts'));
});

gulp.task('process-app-styles-debug', function () {
    return gulp.src('./styles/app/**/*.less')
        .pipe(less())
        .pipe(bundle('appstyles.css'))
        .pipe(gulp.dest('./styles'));
});

gulp.task('process-libs-styles-debug', function () {
    return gulp.src('./styles/libs/**/*.css')
        .pipe(bundle('libstyles.css'))
        .pipe(gulp.dest('./styles'));
});

// RELEASE build - minimified
gulp.task('process-app-scripts-release', function () {
    return gulp.src('./scripts/app/**/*.js')
        .pipe(minimifyJS())
        .pipe(bundle('app.js'))
        .pipe(gulp.dest('./scripts'));
});

gulp.task('process-libs-scripts-release', function () {
    return gulp.src(['./scripts/libs/angular.min.js', './scripts/libs/ngDraggable.modified.js', './scripts/libs/acute.select.modified.js', './scripts/libs/dexie.js'])
        .pipe(minimifyJS())
        .pipe(bundle('libs.js'))
        .pipe(gulp.dest('./scripts'));
});

gulp.task('process-app-styles-release', function () {
    return gulp.src('./styles/app/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(bundle('appstyles.css'))
        .pipe(gulp.dest('./styles'));
});

gulp.task('process-libs-styles-release', function () {
    return gulp.src('./styles/libs/**/*.css')
        .pipe(minifyCSS())
        .pipe(bundle('libstyles.css'))
        .pipe(gulp.dest('./styles'));
});

gulp.task('debug', [
    'process-app-scripts-debug',
    'process-libs-scripts-debug',
    'process-app-styles-debug',
    'process-libs-styles-debug'
], function () {

});

gulp.task('release', [
    'process-app-scripts-release',
    'process-libs-scripts-release',
    'process-app-styles-release',
    'process-libs-styles-release'
], function () {

});

gulp.task('default', ['debug'], function () {

});