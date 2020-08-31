module.exports = {
  entry: {
    main: './main.js'
  },
  mode: 'development', // 开发者模式
  optimization: {
    minimize: false // 代码不要压缩
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',  // 使用JSX
                {pragma: 'createElement'}
              ]
            ]
          }
        }
      }
    ]
  }
}