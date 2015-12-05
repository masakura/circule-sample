const gulp = require('gulp');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const protractor = require('gulp-protractor').protractor;

gulp.task('default', function taskDefault() {
  gutil.log('Finish log');
});

gulp.task('serve:test', function taskServeTest() {
  connect.server({
    port: 8001,
    root: 'app',
  });
});

gulp.task('protractor', ['serve:test'], function taskProtractor() {
  return gulp.src('./spec/**/*.spec.js')
    .pipe(protractor())
    .on('error', e => {throw e;});
});

gulp.task('test', ['protractor'], function taskTest() {
  connect.serverClose();
});
