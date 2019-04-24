var gulp = require("gulp");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
	browserSync.init({
		server: "./"
	});
});

gulp.task('sass', function () {
	gulp.src('sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync', 'sass'], function () {
	gulp.watch(['**/*.html'], browserSync.reload);
	gulp.watch(['css/*.css'], browserSync.reload);

	gulp.watch('sass/*.sass', ['sass']);
});


// run 'npm init' for create package.json if have't file

// npm install --save-dev gulp
// npm install --save-dev gulp-ruby-sass
// npm install browser-sync gulp --save-dev