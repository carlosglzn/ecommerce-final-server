exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const user = jwt.verify(token, process.env.SECRET)
    req.user = user
    next()
    // jwt.decode()

}