var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it

var templatizer = require('templatizer');


/* - - - - - - JADE & HTML2JADE - - - - - - - */


gulp.task('html2jade', function(){
	log('Converting html to jade');
	var options = {nspaces:2};

  return gulp.src(config.html2jade._in)
    .pipe($.html2jade(options))
    .pipe(gulp.dest(config.html2jade._out));
});


gulp.task('jade2html', function() {
	log('Converting jade to html');
  var YOUR_LOCALS = {};
 
  return gulp
  	.src(config.jade2html._in)
    .pipe($.jade({
      locals: config.jade2html.locals,
      pretty: true
    }))
    .pipe(gulp.dest(config.jade2html._out))
});


gulp.task('jade2js', function() {
	log('Converting jade to html');
 
  return gulp
  	.src(config.jade2html._in)
    .pipe($.jade({
      client: true
    }))
    .pipe(gulp.dest(config.jade2html._out))
});


gulp.task('templatizer', function(){

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

