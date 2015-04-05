'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 9000
    });
});

gulp.task('styles', function() {
    gulp.src('./scss/styles.scss')
        .pipe(sass())
        .on('error', function(error) {
            console.log(error);
        })
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    watch(['index.html', 'js/**', 'css/**'], function() {
        connect.reload();
    });

    watch('scss/**/*.scss', function() {
        gulp.run('styles');
    });
});

gulp.task('default', ['styles', 'connect', 'watch']);
