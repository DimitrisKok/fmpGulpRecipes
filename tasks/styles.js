var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it


/* - - - - - - STYLES PRECOMPILATION - - - - - - - */

gulp.task('clean-styles', function(done){
		var files = config.styles_preprocessors._out + '**/*.css';
		clean(files, done);
});

// SASS

gulp.task('sass', ['clean-styles'],function(){
		log('Compiling sass --> css');

		return gulp
				.src(config.styles_preprocessors.sass._in)
				.pipe($.plumber())
				.pipe($.sass())
				.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
				.pipe(gulp.dest(config.styles_preprocessors._out));
});

gulp.task('sass-watcher', function(){
		gulp.watch([config.styles_preprocessors.sass._in], ['sass']);
});

gulp.task('bootstrap-sass', function(){
	return gulp
		.src(__dirname + '/bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss')
		.pipe($.sass())
		.pipe(gulp.dest(__dirname + '/bower_components/bootstrap-sass/dist/'));
});

// LESS

gulp.task('less', ['clean-styles'], function(){
		log('Compiling less --> css');

		return gulp
				.src(config.styles_preprocessors.less._in)
				.pipe($.plumber())
				.pipe($.less())
				.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
				.pipe(gulp.dest(config.styles_preprocessors._out));
});

gulp.task('less-watcher', function(){
		gulp.watch([config.styles_preprocessors.less._in], ['less']);
});


// STYLUS

gulp.task('stylus', ['clean-styles'], function(){
		log('Compiling stylus --> css');

		return gulp
				.src(config.styles_preprocessors.stylus._in)
				.pipe($.plumber())
				.pipe($.stylus())
				.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
				.pipe(gulp.dest(config.styles_preprocessors._out));
});

gulp.task('stylus-watcher', function(){
		gulp.watch([config.styles_preprocessors.stylus._in], ['stylus']);
});






/////////   HELPER FUNCTIONS   ////////////

function clean(path, done){
	log('Cleaning' + $.util.colors.blue(path));
	del(path, done);
}


function log(msg){
	if(typeof(msg) === 'object'){
		for( var item in msg ) {
			if(msg.hadOwnProperty(item)){
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}