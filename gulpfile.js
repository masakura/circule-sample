const gulp = require('gulp');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const protractor = require('gulp-protractor').protractor;
const rimraf = require('rimraf');
const wiredep = require('wiredep').stream;

gulp.task('default', function taskDefault() {
  gutil.log('Finish log');
});

gulp.task('wiredep', function taskWiredep() {
  return gulp.src('app/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app', { overwrite: true }));
});

gulp.task('clean:test', function taskCleanTest() {
  rimraf('reports/tests', () => {});
});

gulp.task('serve:test', ['wiredep'], function taskServeTest() {
  connect.server({
    port: 8001,
    root: [
      '.tmp',
      '.',
      'app',
    ],
  });
});

gulp.task('protractor', ['clean:test', 'serve:test'], function taskProtractor() {
  return gulp.src('./spec/**/*.spec.js')
    .pipe(protractor())
    .on('error', e => {throw e;});
});

gulp.task('test', ['protractor'], function taskTest() {
  connect.serverClose();
});
