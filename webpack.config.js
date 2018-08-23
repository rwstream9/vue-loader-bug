const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: ['./index.js'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
		sourceMapFilename: '[file].map'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.common.js',
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
		]
	}
};
