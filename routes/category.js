const express                               = require('express')
const { addCategory, getCategories }        = require('../controllers/categoryController')
const { requireSignin, adminMiddleware }    = require('../middleware')
const router                                = express.Router()

router.post('/category/create', requireSignin, adminMiddleware, addCategory)
router.get('/category/getcategory', getCategories)

module.exports = router