var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it





gulp.task('clean-images', function(done){
		var files = config.images._out + '**/*.*';
		clean(files, done);
});


gulp.task('images', function(){
		log('Copying and compressing the images');

		return gulp
			.src(config.images._in)
			.pipe($.imagemin({
						optimizationLevel: config.images.optimizationLevel		
			}))
			.pipe(gulp.dest(config.images._out));
	
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