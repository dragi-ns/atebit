const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    index: './src/js/atebit.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'atebit.js',
    library: 'AteBit',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
