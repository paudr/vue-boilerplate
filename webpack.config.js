const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'build:dev' || TARGET === 'dev') {
  module.exports = require('./webpack.config.dev')
  console.info('--> ./webpack.config.dev.js')
} else {
  module.exports = require('./webpack.config.prod')
  console.info('--> ./webpack.config.prod.js')
}
