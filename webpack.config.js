const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIS_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIS_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: DIS_DIR,
    open: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      include: SRC_DIR,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: 'defaults',
            }],
            '@babel/preset-react',
          ],
        },
      }],
    }],
  },
};
