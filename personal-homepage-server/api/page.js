const express = require('express')

const auth = require('../middleware/auth')
const pageController = require('../controller/page')

const router = express.Router()

// 获取所有页面
router.get('/pages', auth, pageController.pages)

// 添加页面
router.post('/page', auth, pageController.createPage)

module.exports = router
