var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it


/*
gulp.task('serve-dev', ['inject'], function(){
		var nodeOptions = {
				script: config.nodeServer, //TODO app.js
				delayTime: 1,
				env: {
					'PORT': port,
					'NODE_ENV': isDev ? 'dev' : 'build'
				}
		};

		return $.nodemon(nodeOptions);

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