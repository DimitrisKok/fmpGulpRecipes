module.exports = function(){

	var client = './src/2001005000000000095/';
	var clientApp = client + 'app';
	var server = './express-server-template';
	var temp = './.tmp/';
	var build = './dist/';

	var config = {

	/* paths */
	temp: temp,
	build: build,
	server: server + 'server.js',
	client: client + 'index.html',
	index: 'html-injection-test.html',
	
	jsx:{
		_in:[
						'./src/react-components/**.js' //,
						//'./node_modules/react-dropdown/example/main.js'
					],
		concatFileName: 'all.js',
		fmpReactComponents_out: build + 'react-components',
		dist_out: build + 'concats/'
	},



	styles_preprocessors: {
		_out : temp, 
		sass: {
			_in: [client + 'styles/main.scss'],
			_out: temp
			},
		less: {
			_in: [client + 'styles/less/main.less'],
			_out: temp
			},
		stylus: {
			_in: [client + 'styles/styl/main.styl'],
			_out: temp
			}
	},

	css: {
			_in: [temp + 'styles.css',
				temp + 'main.css'
				],
			_out: build + 'styles/'
	},
	cssoptim: {
			_in: [
					temp + 'styles.css',
					temp + 'main.css'
				],
			options: {},
			_out: build + 'styles/'
	},



	html2jade:{
		_in: client + 'includes/donut-chart.html',
		options: {},
		_out: client + 'includes/'
			},
	jade2html:{
		_in: client + 'app.jade',
		locals: {},
		pretty: true,
		_out: build
			},
	jade2js:{
		_in: '',
		locals: {},
		_out: ''
			},

	html2md:{
		_in: '',
		_out:''
			},
	markdown:{
		_in: '',
		_out: ''
			},



	fonts: {
		_in: [  './src/client/fonts/**/*.*', 
					  './bower_components/font-awesome/fonts/**/*.*'
					],
		_out: build + 'fonts/'
			},


	images:{
		_in: [ client + 'images/**/*.*'],
		optimizationLevel: 3,
		_out: build + 'images/'
			},
	html:{
		_in:[
			client + 'app.html'
		],
		_out: build
	},

	copyjs:{
		_in:[
			client + 'scripts/**/*.js'
		],
		_out: build + 'scripts/'
	},

	concat: { // Files will be concatenated in the order that they are specified in the gulp.src function
		_in: [],
		_out: build + 'concats/'
	},

	rename: {
		_in:[],
		dirname: "main/text/ciao",
    basename: "aloha",
    prefix: "bonjour-",
    suffix: "-hola",
    extname: ".md",
    _out: build + 'renamed/'
	},

	uglify:{
		_in:[

				],
		preserveComments: false,
		mangling: true,
		_out: build + 'compressed'
	},

	minifyHTML: {	 
		_in:[],
		_out: build + 'compressed',	
		options : {
      conditionals: true,
      spare:true
    //   All options are false by default.
    // empty - do not remove empty attributes
    // cdata - do not strip CDATA from scripts
    // comments - do not remove comments
    // conditionals - do not remove conditional internet explorer comments
    // spare - do not remove redundant attributes
    // quotes - do not remove arbitrary quotes
    // loose - preserve one whitespace
    	}
  },

	beautify:{
		_in:[],
		mode: 'VERIFY_AND_WRITE',
		_out: build + 'decompressed'
//  config: "path/to/.jsbeautifyrc",
// jsbeautifier Default Options:
//     html: {
//         braceStyle: "collapse",
//         indentChar: " ",
//         indentScripts: "keep",
//         indentSize: 4,
//         maxPreserveNewlines: 10,
//         preserveNewlines: true,
//         unformatted: ["a", "sub", "sup", "b", "i", "u"],
//         wrapLineLength: 0
//     },
//     css: {
//         indentChar: " ",
//         indentSize: 4
//     },
//     js: {
//         braceStyle: "collapse",
//         breakChainedMethods: false,
//         e4x: false,
//         evalCode: false,
//         indentChar: " ",
//         indentLevel: 0,
//         indentSize: 4,
//         indentWithTabs: false,
//         jslintHappy: false,
//         keepArrayIndentation: false,
//         keepFunctionIndentation: false,
//         maxPreserveNewlines: 10,
//         preserveNewlines: true,
//         spaceBeforeConditional: true,
//         spaceInParen: false,
//         unescapeStrings: false,
//         wrapLineLength: 0
//     }
	},

	/* script + css dependencies -- html inject */
	bower: {
			json: './bower.json',
			directory: './bower_components/',
			ignorePath: '../..'  /* I believe that gets rid of relative path '../' './' notation prefixes */
			},

	js: [
				clientApp + '**/*.module.js',
				clientApp + '**/*.js',
				'!' + clientApp + '**/*.spec.js'  /* '!' EXCLUDES FILES */
	],


	/* node server */
	defaultPort: 3000,
	nodeServer: './express-server-template/server.js'

	};


	config.getWiredepDefaultOptions = function(){
		var options = {
			bowerJson: config.bower.json,
			directory: config.bower.directory,
			ignorePath: config.bower.ignorePath

		};
		return options;
	};



	return config;

}