const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: {
    main: `${paths.src}/index.tsx`
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tinder Clone App',
      template: `${paths.src}/template.html`,
      filename: 'index.html',
      favicon: `${paths.public}/favicon.png`
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env']
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    // Resolve in this order
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.md']
  }
};
