const path = require('path');

module.exports = {
	entry: './src/frontend/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [{
					loader: 'ts-loader',
					options: {
						configFile: path.join(__dirname, 'tsconfig.frontend.json')
					},
				}],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'frontend.js',
		path: path.resolve(__dirname, '..', 'public'),
	},
};