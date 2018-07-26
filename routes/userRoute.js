var genericRoute = require('./genericRoute')
module.exports = function (userController) {
  
  // Generic CRUD
  var app = genericRoute(userController)

  // Add other routes that are not CRUD here

  return app;
}