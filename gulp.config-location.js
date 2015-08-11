module.exports = function(){

var currentProject = './src/2001005000000000084/';
var config = require(currentProject + 'gulp.config')();  //runs the function as you require it

	return config;

}