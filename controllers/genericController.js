'use strict'
// why use strict? https://www.w3schools.com/js/js_strict.asp
module.exports = function (table) {
  var table
  
  class GenericController {
    
    constructor (table) {
      this.table = table
    }

    sendResponse(promise, errorMessage, successMessage){
        console.log('sendResponse')
        return new Promise(function (resolve, reject) {
            promise.then((returnValue) => {
                console.log('then')
                // returnValue can be null?
                if (!returnValue) {
                    reject(new Error(errorMessage))
                }
                if(successMessage != null && successMessage.length>0) {
                    resolve(returnValue+' '+successMessage)
                } else {
                    resolve(returnValue)
                }
            }).catch((error) => {
                console.log('catch')
                console.log(error)
                reject(error)
            })
        })
    }

    create(object) {
        console.log("create generic")
        return this.sendResponse(table.create(object), 'Unable to create')
    }

    read(where) {
        var promise = table.findOne({where: where});
        return this.sendResponse(promise, 'No registered User with this Id')
    }

    readAll() {
      return this.sendResponse(table.findAll(), 'No registered Users')
    }

    update(where, type, object) {
        var promise = table.update(object, {where: where});
        return this.sendResponse(promise, 'Unable to update',type+'(s) updated successfully')
      
    }

    delete(where, type) {
        var promise = table.destroy({where: where})
        return this.sendResponse(promise,'Nenhum '+type+ ' deletado', type+'(s) deleted successfully')
    }
  }
  return new GenericController(table)
}
