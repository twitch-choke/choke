const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
	entry: './src/backend/index.ts',
	devtool: 'inline-source-map',
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
						configFile: path.join(__dirname, 'tsconfig.backend.json')
					},
				}],
			},
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
	output: {
		filename: 'electron.js',
		path: path.resolve(__dirname, '..', 'public'),
	},
};