const express = require('express')
const router = express.Router()
const { add } = require('../controllers/user-controller')

router.post('/', add)

module.exports = router
