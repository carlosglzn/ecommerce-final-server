const express           = require('express')
const router            = express.Router()
const { check }         = require('express-validator')
const userController    = require('./../controllers/userController')


router.post('/signup',
    [
        check('username', 'The username is required').not().isEmpty(),
        check('email', 'Enter a valid email address').isEmail(),
        check('password', 'Password must be at least 6 characters long').isLength({min: 6})
    ],
    userController.signup
)



module.exports = router