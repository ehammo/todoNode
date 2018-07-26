var bodyParser = require('body-parser')
var express = require('express')
var app = express()

module.exports = () => {

  // Express can understand json or urlenconded packages
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  
  return app
}
