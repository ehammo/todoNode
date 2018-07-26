var getGenericApp = require('./genericRoute').getGenericApp
var sendResponse = require('./genericRoute').sendResponse
module.exports = function (userController) {
  
  // Generic CRUD
  var app = getGenericApp(userController)

  // Add other routes that are not CRUD here

  return app;
}