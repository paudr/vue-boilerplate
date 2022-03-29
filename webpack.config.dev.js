const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = () => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    library: {
      name: 'app',
      type: 'var',
      export: 'default'
    },
    filename: 'app.js'
  },
  resolve: {
    extensions: ['...', '.js'],
    mainFiles: ['index'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm-browser.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: { modules: true }
            }
          ]
        }, {
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: { esModule: false }
            }
          ]
        }]
      },
      {
        test: /\.less$/,
        oneOf: [{
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: { modules: true }
            },
            'less-loader'
          ]
        }, {
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: { esModule: false }
            },
            'less-loader'
          ]
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'assets/prod' },
        { from: 'assets/dev', force: true, priority: 10 }
      ]
    })
  ],
  devServer: {
    historyApiFallback: {
      index: '/index.html'
    },
    port: 8080,
    hot: true
  }
})
