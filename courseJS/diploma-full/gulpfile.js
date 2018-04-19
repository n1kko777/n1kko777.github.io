var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var concatCss     = require('gulp-concat-css');


// Запускаем сервер + отслеживаем sass/html файлы
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app"
    });

    gulp.watch("app/sass/**/*.sass", ['sass']);
    gulp.watch("app/js/script.js").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Компилируем sass в CSS и вставляем изменения в браузер
gulp.task('sass', function() {
    return gulp.src("app/sass/**/*.sass")
        .pipe(sass())
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

/*// Выгружаем все файлы через FTP на хостинг
gulp.task('ftp', function () {
return gulp.src('src/**')
.pipe(ftp({
    host: '',
    user: '',
    pass: '',
    remotePath: '/'
}))
.pipe(gutil.noop());
});
*/
gulp.task('default', ['serve']);