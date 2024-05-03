const express = require('express')
const xcareRouter = express.Router()
const logger = require('winston').loggers.get('app')
const registerUserService = require('../service/registerUserService')
const createCarouselService = require('../service/createCarouselService')
const getCarouselService = require('../service/getCarouselService')
const scheduleHoursService = require('../service/scheduleHoursService')

// Register user
xcareRouter.post('/register',async (req, res) => {
    await registerUserService(req, res)
})

// Create Carousel
xcareRouter.post('/carousel', async (req, res) => {
    await createCarouselService(req, res)
})

// Get All Carousel
xcareRouter.get('/carousel', async (req, res) => {
    await getCarouselService(req, res)
})

xcareRouter.post('/schedule_hours',async (req, res) => {
    await scheduleHoursService(req, res)
})


module.exports = xcareRouter