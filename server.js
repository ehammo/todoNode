var port = process.env.PORT || 3000 
// var morgan = require('morgan') // automatically log requests to the console (express4)
// var winston = require('winston) // mannually log stuff and save in a File
// configuration =================

// Configure express middlewares
var app = require('./config/express')()

// Configure the database connection with sequelize
var connection = require('./config/sequelize')()

// Configure the schema of the data base
var tables = require('./db/tables.js')(connection)

// Configure de controllers
var controllers = require('./controllers')(tables)

// Configure the routes
require('./routes')(app, controllers)

// Listen in the specified port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
