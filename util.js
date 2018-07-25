module.exports = (res, promise) => {
    promise.then((User) => {
        res.send(User)
    }).catch((error) => {
        res.send(error)
    })
}
