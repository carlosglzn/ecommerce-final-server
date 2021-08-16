const express                   = require('express')
const { signup, signin, requireSignin }        = require('../../controllers/admin/authController')
const router                    = express.Router()



router.post('/admin/signup', signup)
router.post('/admin/signin', signin)



module.exports = router