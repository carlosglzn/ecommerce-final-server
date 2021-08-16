const User              = require('../models/User')

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user ) return res.status(400).json({
            message: 'User already registered'
        })
        
        const {
            username,
            email,
            password
        } = req.body

        const _user = new User({ username, email, password })

        _user.save((error, data) => {
            if(error) {
                return res.json({
                    message: 'Something went'
                })
            }
    
            if(data) {
                return res.status(201).json({
                    message: 'User created Sucessfully'
                })
            }
    
        })
    })
}