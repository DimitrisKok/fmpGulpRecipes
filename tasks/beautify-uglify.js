var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it




gulp.task('uglifyjs', function() {
  return gulp.src(config.uglify._in)
    .pipe($.uglify({
    	preserveComments: config.uglify.preserveComments,
    	mangling: config.uglify.mangling
    }))
    .pipe(gulp.dest(config.uglify._out));
});

 
gulp.task('cssoptim', function(){
    log('Optimizing css');
    return gulp
      .src(config.cssoptim._in)
      .pipe($.csso(config.cssoptim.options))
      .pipe(gulp.dest(config.cssoptim._out));
});

gulp.task('minifyHTML', function() {
 
  return gulp
  	.src(config.minifyHTML._in)
    .pipe($.minifyHtml(config.minifyHTML.options))
    .pipe(gulp.dest(config.minifyHTML._out));
});
 
gulp.task('beautify', function() {
  return gulp
  	.src(config.beautify._in)
    .pipe($.jsbeautifier({config: '.jsbeautifyrc', mode: 'VERIFY_AND_WRITE'}))
    .pipe(gulp.dest(config.beautify._out))
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