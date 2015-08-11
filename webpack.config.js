module.exports = {

   //context: __dirname + "/node_modules/classnames",
    entry: {
    "classnames" : __dirname + "/node_modules/classnames/index.js",
    },
    output: {
        path: __dirname + "/dist/lib/",   /* '/.tmp/lib/' */
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "var"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" } //,
        		//{ test: /.*\/src\/**\/.*\.js$/, loader: "uglify" }
    		]
		},

    externals:  {

    }
		// 'uglify-loader': {
		//     mangle: false
		// }

};