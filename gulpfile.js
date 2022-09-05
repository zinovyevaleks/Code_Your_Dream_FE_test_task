const gulp = require('gulp');
const { parallel } = require('gulp');

let crashOnError = true;

function catchCompileError(message) {
  return function (error) {
    console.log(message + ' Error:');
    console.log(error);

    if (!crashOnError) {
      this.emit('end');
    }
  };
}

gulp.task('css', function () {
  const sass = require('gulp-sass')(require('sass'));
  const postcss = require('gulp-postcss');

  return gulp
    .src('./app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .on('error', catchCompileError('SCSS compile error.'))
    .pipe(postcss([
      require('autoprefixer'),
    ]))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function () {
  const babel = require('gulp-babel');

  return gulp.src([
    './app/script.js',
  ])
    .pipe(babel({
      'presets': ['@babel/preset-env']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  "use strict";

  // Do not stop watch when error.
  crashOnError = false;

  gulp.watch('./app/scss/**/**.scss', parallel('css'));
  gulp.watch('./app/script.js', parallel('js'));
});

