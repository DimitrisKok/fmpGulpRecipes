var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it




/* - - - - - - JSX Transform to Individual JS React Component Files - - - - - - - */

gulp.task('clean-react-components', function(done){
		var files = config.jsx.fmpReactComponents_out + '**/*.*';
		clean(files, done);
});



// TODO: Module loading and ES6 do not seem to work
/*gulp.task('reactComponentize', ['clean-react-components'], function(){
	log('Transforming JSX into JS via react-tools');
	return gulp
			.src(config.jsx._in)
				.pipe($.react({harmony: true, es6modules: true}))
				.pipe($.if(args.verbose, $.print()))
				.pipe(gulp.dest(config.jsx.fmpReactComponents_out));
});
*/

gulp.task('reactComponentize', ['clean-react-components'], function(){
	log('Transforming JSX into JS via Babel');
	return gulp
			.src(config.jsx._in)
				.pipe($.babel())
				.pipe($.if(args.verbose, $.print()))
				.pipe(gulp.dest(config.jsx.fmpReactComponents_out));
});


gulp.task('concatReact', function(){
	log(config.jsx.fmpReactComponents_out);
return gulp
		.src(config.jsx.fmpReactComponents_out)
		.pipe($.concat(config.jsx.concatFileName))
		.pipe(gulp.dest(config.jsx.dist_out));

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

