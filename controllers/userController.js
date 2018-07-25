'use strict'
// why use strict? https://www.w3schools.com/js/js_strict.asp
module.exports = function (tables) {
  var UserTable
  
  class UserController {
    
    constructor (tables) {
      UserTable = tables.User
    }

    createUser (User) {
      console.log('create user')
      console.log(User)
      return new Promise(function (resolve, reject) {
        UserTable.create(
          User
        ).then((returnValue) => {
          console.log('then')
          console.log(returnValue)
          // returnValue can be null?
          if (!returnValue) {
            reject(new Error('error'))
          }
          resolve(returnValue)
        }).catch((error) => {
          console.log('catch')
          reject(error)
        })
      })
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
