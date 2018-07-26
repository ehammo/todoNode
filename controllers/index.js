module.exports = (tables) => {

  // Create controllers that are going to be used
  var userController = require('./userController')(tables)
  // var taskController = require('./taskController')(tables)
  // var tagController = require('./tagController')(tables)
  return {
    'userController': userController,
  //   'taskController': taskController,
  //   'tagController': tagController
  }
}
