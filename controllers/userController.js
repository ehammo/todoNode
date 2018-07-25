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
      return new Promise(function (resolve, reject) {
        UserTable.findOne(
          {
            where: {
              email: email
            }
          }
        ).then((User) => {
          if (!User) {
            reject(new Error('No registered User with this Id'))
          }
          resolve(User)
        }).catch((error) => {
          reject(error)
        })
      })
    }

    readAllUsers () {
      return new Promise(function (resolve, reject) {
        UserTable.findAll().then((Users) => {
          if (!Users) {
            reject(new Error('No registered Users'))
          }
          resolve(Users)
        })
      })
    }

    updateUser (email, User) {
      return new Promise(function (resolve, reject) {
        UserTable.update(
          User,
          {
            where: {
              email: email
            }
          }).then((returnValue) => {
          // returnValue can be null?
          if (!returnValue) {
            reject(new Error('erro'))
          }
          resolve('Updated ' + returnValue + ' User(s) sucessfully')
        }).catch((error) => {
          reject(error)
        })
      })
    }

    deleteUser (email) {
      return new Promise(function (resolve, reject) {
        UserTable.destroy(
          {
            where: {
              email: email
            }
          }).then((returnValue) => {
          if (returnValue === 0) {
            reject(new Error('Nenhum elemento deletado'))
          }
          resolve('Deleted ' + returnValue + ' User(s) sucessfully')
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
  return new UserController(tables)
}
