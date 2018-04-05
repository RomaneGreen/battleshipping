let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
let sass = require("gulp-sass");
 
gulp.task('minify-css', () => {
  return gulp.src('src/*.scss')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('imagemins', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('sass',  () => 
     gulp.src('./src/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist'))
  );
   
  gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
  });

  gulp.task("default", ["sass", "imagemins", "minify-css"], function() {
    
    
  });