const express = require('express')
const router = express.Router()
const controller = require('../app/controller')
const prefix = '/admin/'
const productRouter = require('./product/index')

router.get('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('Hello World')
})

router
	.post(`${prefix}user/login`, controller.user.login)
	.post(`${prefix}user/signIn`, controller.user.signIn)
	.post(`${prefix}user/signOut`, controller.user.signOut)
	.post(`${prefix}user/update`, controller.user.update)
	.post(`${prefix}user/remove`, controller.user.remove)

router.use('/product', productRouter)

module.exports = router
