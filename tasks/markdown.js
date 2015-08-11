var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('../gulp.config-location')();  //runs the function as you require it






 
gulp.task('markdown2html', function () {
		log('Converting markdown --> html');
  
    return gulp.src(config.markdown._in)
        .pipe($.markdown())
        .pipe(gulp.dest(config.markdown._out));
});


gulp.task('html2markdown', function(){
	log('Converting html --> markdown');

  return gulp
  	.src(config.html2md._in)
    .pipe($.html2md())
    .pipe(gulp.dest(config.html2md._out));
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

