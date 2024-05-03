const express = require('express')
const xcareRouter = express.Router()
const logger = require('winston').loggers.get('app')
const registerUserService = require('../service/registerUserService')


xcareRouter.post('/register',async (req, res) => {
    await registerUserService(req, res)
})


module.exports = xcareRouter