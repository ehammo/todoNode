var Sequelize = require('sequelize')

module.exports = function (connection) {
  
  // Define the tables
  var User = connection.define('User', {
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    password: Sequelize.STRING
  })

  var Tag = connection.define('Tag', {
    name: Sequelize.STRING
  })

  var Task = connection.define('Task', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
  })


  // Define cardinalities
  User.hasMany(Task)
  User.hasMany(Tag)
  Task.hasMany(Tag)

  // create tables if dont exist
  connection.sync()

  var tables = {
    User,
    Tag,
    Task,
    connection
  }
  return tables
}
