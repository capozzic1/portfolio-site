const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('default', () =>
  gulp.src('public/img/*')
  .pipe(imagemin([
    imageminMozjpeg({quality:'85'}),
    imageminPngquant({quality:'85'})
  ], {verbose:true}))
  .pipe(gulp.dest('public/imgs_compressed'))
);
