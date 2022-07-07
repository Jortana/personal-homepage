const express = require('express')

const router = express.Router()

// 用户相关 api
router.use('/user', require('./user'))

// 认证 api
router.use('/auth', require('./auth'))

// 页面相关 api
router.use('/page', require('./page'))

module.exports = router
