const path = require('path')
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
}

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
	hot: true,
	open: true,
	inline: true,	
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
	  /*{
      test: /\.s[ac]ss$/i,
		  use: ['style-loader',
			 'css-loader',
       'sass-loader']
      },*/
	  {
		  test: /\.(jpg|png|gif|svg)$/, 
		  loader: 'file-loader',
		  options: {
			  name: '[path]/[name].[ext]',
        publicPath: './',
		  },
	  },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new ExtractTextPlugin('style.css'),
    new MiniCssExtractPlugin({filename: 'main.css'}),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
