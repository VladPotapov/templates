const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('borwser-sync');

function style() {
    return gulp.src('./sass/**/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
}

exports.style = style;