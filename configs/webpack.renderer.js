const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
	entry: './src/renderer.ts',
	target: 'node',
	externals: [nodeExternals()],
	externalsPresets: {
		node: true // in order to ignore built-in modules like path, fs, etc. 
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [{
					loader: 'ts-loader',
					options: {
						configFile: path.join(__dirname, 'tsconfig.renderer.json')
					},
				}],
			},
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
	output: {
		filename: 'renderer.js',
		path: path.resolve(__dirname, '..', 'public'),
	},
};