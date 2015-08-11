var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it



gulp.task('clean-code', function(done){
	var files = [].concat(
			config.temp + '**/*.js',
			config.build + '**/*.html',
			config.build + 'scripts/**/*.js'
		);
	log('Cleaning : ' + files);
	clean(files, done);
});




//For html files that use gulp-inject & proper markup
/*gulp.taks('optimize', ['inject'], function(){
	log('Optimizing the javascript, css and html');

	var assets = $.useref.assets({searchPath: './'});
	

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