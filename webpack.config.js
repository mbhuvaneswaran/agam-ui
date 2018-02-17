var path  = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, "./app/entry")

  ],
  output : {
    path : path.join(__dirname,'public','static'),
    filename : '[name].js',
    publicPath : '/static/',
  },
  devtool:'eval-cheap-source-map',
  devServer: {
    hot : true,
    // enable HMR on the server
    contentBase: path.join(__dirname,'public'),
    // match the output path

    publicPath: '/static/',
    proxy: [{
      context: ["/dsops-hourly-sla", "/dsops-daily-sla"],
      target: "https://mbalasub-ld2.linkedin.biz:15266",
      secure:false
    }],
    // match the output `publicPath`
    historyApiFallback: {
        index: 'index.html'
      }


  },
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        options : {
          presets : ['react','es2015']
        }
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback:'style-loader',
      use : [
        {
          loader : 'css-loader',
          }]
        }
      )},
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader:'css-loader',
            }, {loader : 'sass-loader',options : {outputStyle : 'expanded'}}]
        })//ExtractTextPlugin.extract("style","css?localIdentName=[hash:base64:5]&modules&importLoaders=1!postcss-loader!sass?outputStyle=expanded")
      }
    ]
  },
  resolve : {
    alias : {
      '@components' : path.join(__dirname,'./app/components'),
      '@data'  :path.join(__dirname,'./app/data'),
      '@containers' : path.join(__dirname,'./app/containers'),
    },
    // extensions listed here can be omitted in `import`s
    extensions: ['.js', '.jsx'],
    // directories which are searched implicitly in `import`s
    modules: ['node_modules']
  },
  plugins: [new ExtractTextPlugin('[name].css'),
  new webpack.HotModuleReplacementPlugin(),
new webpack.NoEmitOnErrorsPlugin(),
new HtmlWebpackPlugin({
  template : path.join(__dirname,'./app/template.html'),
  inject : 'body',
  filename : '../index.html',
  title : 'Test'
})
          ]
}