

// require - подключение модуля, который мы установили через npm i
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer');

// все таски начинаются с gulp.
// после названия таска пишется функция, которая будет выполнятся при вызове таска

gulp.task('scripts', function() {  // сжатие и коккатинация
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify()) // сжимаем файл
  .pipe(gulp.dest('app/js'));
});

gulp.task('sassCompile', function() {
  return gulp.src('app/sass/**/*.+(sass|scss)')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync', 'sassCompile', 'scripts'], function(){
  gulp.watch('app/sass/**/*.+(sass|scss)', ['sassCompile']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});
