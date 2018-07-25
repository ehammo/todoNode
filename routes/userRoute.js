var express = require('express')
var app = express()
var sendResponse = require('../util')
module.exports = function (userController) {

  app.post('/', function (req, res) {
    sendResponse(res, userController.createUser(req.body))
  })
  
  app.get('/', function (req, res) {
    var promise
    if (req.query.email != null) {
      promise = userController.readUser(req.query.email)
    } else {
      promise = userController.readAllUsers()
    }
    sendResponse(res, promise)
  })

  app.put('/', function (req, res) {
    sendResponse(res, userController.updateUser(req.query.email, req.body))
  })

  app.delete('/', function (req, res) {
    sendResponse(res, userController.deleteUser(req.query.email))
  })

  return app;
}