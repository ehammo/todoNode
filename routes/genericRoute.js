var express = require('express')
var app = express()
var sendResponse = (res, promise) => {
  promise.then((User) => {
      res.send(User)
  }).catch((error) => {
      res.send(error)
  })
}

module.exports = {

  getGenericApp : function (controller) {

    app.post('/', function (req, res) {
      sendResponse(res, controller.createUser(req.body))
    })
    
    app.get('/', function (req, res) {
      var promise
      if (req.query.email != null) {
        promise = controller.readUser(req.query.email)
      } else {
        promise = controller.readAllUsers()
      }
      sendResponse(res, promise)
    })

    app.put('/', function (req, res) {
      sendResponse(res, controller.updateUser(req.query.email, req.body))
    })

    app.delete('/', function (req, res) {
      sendResponse(res, controller.deleteUser(req.query.email))
    })

    return app;
  },
  sendResponse : sendResponse
  
}