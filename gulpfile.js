const gulp = require('gulp');
const gutil = require('gulp-util');

gulp.task('default', function taskDefault() {
  gutil.log('Finish log');
});

gulp.task('test', function taskTest() {
  gutil.log('Success');
});
