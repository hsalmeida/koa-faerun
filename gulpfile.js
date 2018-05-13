const gulp = require('gulp');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const plumber = require('gulp-plumber');

gulp.task('app', function () {
    return gulp.src(['public/app/js/app.js', 'public/app/js/services/*.js', 'public/app/js/components/**/*.js', 'public/app/js/directives/*.js', 'public/app/js/components/*.js'])
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate({ add: true }))
        .pipe(plumber.stop())
        .pipe(gulp.dest('public/app/dist/'));
});

gulp.task('watch', ['app'], function () {
    return gulp.watch(['public/app/js/**/*.js', 'public/app/js/componentes/**/*.js', 'public/app/js/directives/**/*.js', 'public/app/services/**/*.js'], ['app']);
});

gulp.task('default', ['watch', 'app']);