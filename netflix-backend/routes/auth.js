const express = require('express')

const router = express.Router()

//middlewares

//controllers
const {register, login} = require('../controllers/auth')

router.post('/api/login', login)

router.post('/api/register', register)

module.exports = router