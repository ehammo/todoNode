var express = require('express')
var app = express()
var sendResponse = require('../util')
module.exports = function (userController) {

  app.post('/', function (req, res) {
    userController.createUser(req.body).then((User) => {
      res.send(User)
    }).catch((error) => {
      res.send(error)
    })
  })
  
  app.get('/', function (req, res) {
    var promise
    if (req.query.email != null) {
      promise = userController.readUser(req.query.email)
    } else {
      promise = userController.readAllUsers()
    }
    promise.then((User) => {
      res.send(User)
    }).catch((error) => {
      res.send(error)
    })
  })

  app.put('/', function (req, res) {
    userController.updateUser(req.query.email, req.body).then((returnObject) => {
      res.send(returnObject)
    }).catch((error) => {
      res.send(error)
    })
  })

  app.delete('/', function (req, res) {
    userController.deleteUser(req.query.email).then((returnValue) => {
      res.send(returnValue)
    }).catch((error) => {
      res.send(error)
    })
  })

  
  
  return app;
}