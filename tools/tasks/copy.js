import { join } from 'path';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import { stream } from 'browser-sync';

import { SOURCE_ROOT, DIST_ROOT } from '../constants';

gulp.task('copy', () => {
  return gulp.src([
      join(SOURCE_ROOT, 'favicon.ico'),
      join(SOURCE_ROOT, 'robots.txt')
    ])
    .pipe(plumber())
    .pipe(changed(DIST_ROOT))
    .pipe(gulp.dest(DIST_ROOT))
    .pipe(stream());
});