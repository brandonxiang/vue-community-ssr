var utils = require('./utils')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  preserveWhitespace: false,
  loaders: utils.cssLoaders({
    sourceMap: isProduction,
    extract: isProduction
  })
}
