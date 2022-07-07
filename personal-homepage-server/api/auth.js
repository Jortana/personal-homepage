const express = require('express')

const authController = require('../controller/auth')
const auth = require('../middleware/auth')

const router = express.Router()

// 认证登录
router.get('/auth', auth, authController.auth)

module.exports = router
