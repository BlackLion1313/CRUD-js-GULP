const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('scripts', function() {
    return gulp.src(['./js/data.js', './js/helper.js', './js/index.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('styles', function() {
    return gulp.src('./css/*.css')
        .pipe(concat('main.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('build', gulp.parallel('scripts', 'styles'));

gulp.task('default', gulp.series('build'));


gulp.task('build', gulp.parallel('scripts', 'styles'));

gulp.task('default', gulp.series('build'));
