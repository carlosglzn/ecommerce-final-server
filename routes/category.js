const express   = require('express')
const { addCategory } = require('../controllers/categoryController')
const router    = express.Router()

router.post('/category/create', addCategory)

module.exports = router