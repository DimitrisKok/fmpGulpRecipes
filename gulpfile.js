var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});

var config = require('./gulp.config-location')();  //runs the function as you require it






/* - - - - - - MARKDOWN 2 HTML - - - - - - - */

/* - - - - - - HTML 2 MARKDOWN - - - - - - - */

/* - - - - - - IMAGES COMPRESSION AND COPYING - - - - - - - */












var requireDir = require('require-dir');
var tasks = requireDir('./tasks');


gulp.task('help', $.taskListing);

gulp.task('default', ['help']);

gulp.task('clean', function(done){
		var delConfig = [].concat(config.build, config.temp);
		log('Cleaning: ' + $.util.colors.blue(delConfig));
		del(delConfig, done);
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

