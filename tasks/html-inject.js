var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it


/* - - - - - - HTML INJECTION - - - - - - - */

gulp.task('wiredep', function(){
		log('Wire up the bower css js and our app js into the HTML');
		var options = config.getWiredepDefaultOptions();
		var wiredep = require('wiredep').stream;
		return gulp
					.src(config.index)
					.pipe(wiredep(options))
					.pipe($.inject(gulp.src(config.js)))
					.pipe(gulp.dest(config.index));
});

/*
gulp.task('inject', ['wiredep', 'styles'], function(){
		log('Wire up the app css into the HTML and call wiredep');

		return gulp
					.src(config.index)
					.pipe($.inject(gulp.src(config.css)))
					.pipe(gulp.dest(config.client));
});
*/





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