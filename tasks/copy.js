var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it



/* - - - - - - FONTS - - - - - - - */

gulp.task('clean-fonts', function(done){
		var files = config.fonts._out + '**/*.*';
		clean(files, done);
});




gulp.task('fonts', ['clean-fonts'], function(){
		log('Copying fonts');
		return gulp
			.src(config.fonts._in)
			.pipe(gulp.dest(config.fonts._out));
});


gulp.task('html', function(){
	log('Copying html files to build folder');
	return gulp
		.src(config.html._in)
		.pipe(gulp.dest(config.html._out));
});	


gulp.task('js', function(){
	log('Copying script files to build folder');
	return gulp
		.src(config.copyjs._in)
		.pipe(gulp.dest(config.copyjs._out));
});	

gulp.task('build',['sass', 'cssoptim', 'jade2html', 'js']);

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