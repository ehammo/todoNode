module.exports = (app, controllers) => {
  var userRoutes = require('./userRoute')(controllers.userController)
  app.use('/user/', userRoutes)

  // var taskRoutes = require('./taskRoute')(controllers.taskController)
  // app.use('/task/', taskRoutes)

  // var tagRoutes = require('./tagRoute')(controllers.tagController)
  // app.use('/tag/', tagRoutes)

}
