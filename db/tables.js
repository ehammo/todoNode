var Sequelize = require('sequelize')

module.exports = function (connection) {
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


  // cardinalidades
  User.hasMany(Task)
  User.hasMany(Tag)
  Task.hasMany(Tag)

  connection.sync() // create tables if dont exist

  var tables = {
    User,
    Tag,
    Task,
    connection
  }
  return tables
}
