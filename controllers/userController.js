'use strict'
// why use strict? https://www.w3schools.com/js/js_strict.asp
module.exports = function (tables) {
  var UserTable
  var type
  var genericController
  
  class UserController {
    
    constructor (tables) {
      UserTable = tables.User
      type = 'User'
      genericController = require('./genericController')(UserTable)
    }

    createUser (User) {
      return genericController.create(User)
    }

    readUser (email) {
      var where = {
        email: email
      }
      return genericController.read(where)
    }

    readAllUsers () {
      return genericController.readAll()
    }

    updateUser (email, User) {
      var where = {
        email: email
      }
      return genericController.update(where, type, User)
    }

    deleteUser (email) {
      var where =  {
        email: email
      }
      return genericController.delete(where, type)
    }
  }
  return new UserController(tables)
}
