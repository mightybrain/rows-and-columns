const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devtool: 'source-map',

	output: {
		filename: 'index.js',
	},

	module: {
		rules: [
			{
				test: /\.png$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name]-[hash][ext]',
				}
			},

			{
				test: /\.woff2$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				}
			},

			{
				test: /\.pug$/,
				use: [
					{ 
						loader: 'pug-loader',
						options: {
							pretty: true,
						}
					}
				]
			},

      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
						options: {
							insert: 'head',
							injectType: 'singletonStyleTag',
						}
          },
          {
            loader: 'css-loader',
          },
					{
						loader: 'stylus-loader',
					}
				]
      },
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.pug',
			inject: 'body',
		}),
	]
}