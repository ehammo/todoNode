var bodyParser = require('body-parser') // pull information from HTML POST (express4)
var express = require('express')
var app = express()

module.exports = () => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  return app
}
