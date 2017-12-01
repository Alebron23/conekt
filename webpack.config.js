var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path 			  = require('path');

module.exports = {

	entry	: './src/index.js',

	output	: {
		path: __dirname + '/build',							//This is just breaking the path name down into to sepearate elements of the object. 
		filename: 'bundle.js'
	},

	module  : {
		rules: [
			{
				test: /\.css$/, 
				use : ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use		: ['css-loader', 'sass-loader']
				})
			},

			{
				test: /\.js$/,
				exclude: /node_modules/, 
				use : 'babel-loader'
			} 	 											//can use 'use' or can use 'loaders'. Proper webpack 2 syntax is to use use and not loaders but you still can use loaders, you just have to use ! separating the loaders instead of an array.   
		]
	},

	devServer: {											//By default it launches on port 8080 but can specify a port property to tell it which port to run on. 
		contentBase: path.join(__dirname, "build"),			//This is the folder from where we want to serve our files. 
  		compress   : true,									//To zip all the files or not. enables gzip compression for everything served. 							//specifies what webpack should log. Just search stats in the webpack devServer section, which is under configuration, if you want to know more. 
  		stats 	   : "errors-only" 							//Specifies to only show errors when the log is outputed in the terminal. 
  															//open: true opens snew window everytime it runs. 
	},

	plugins  : [

		new HtmlWebpackPlugin({
			title   : 'Project Demo',
			minify  : {
				collapseWhitespace: true
			},
			hash    : true,
			template: './src/index.html',
		}),

		new ExtractTextPlugin({
			filename : 'app.css',
			allChunks: true
		})
	]
}