const express = require('express')
const xcareRouter = express.Router()
const logger = require('winston').loggers.get('app')
const registerUserService = require('../service/registerUserService')
const createCarouselService = require('../service/createCarouselService')
const getCarouselService = require('../service/getCarouselService')
const createScheduleHoursService = require('../service/createScheduleHoursService')
const getScheduleHoursService = require('../service/getScheduleHoursService')
const getLocationCardsService = require('../service/getLocationCardsService')
const getAboutUsService = require('../service/getAboutUsService')
const getTestmonialsService = require('../service/gettestimonialsService')
const getOurServiceService = require('../service/getOurServiceService')
const getBlogsService = require('../service/getBlogsService')
const getLocationService = require('../service/getLocationService')

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
    await createScheduleHoursService(req, res)
})

// Get All Schedule Hours
xcareRouter.get('/schedule_hours', async (req, res) => {
    await getScheduleHoursService(req, res)
})

// Get All Location Cards
xcareRouter.get('/location_cards', async (req, res) => {
    await getLocationCardsService(req, res)
})

// Get About Us Page Data
xcareRouter.get('/about_us', async (req, res) => {
    await getAboutUsService(req, res)
})

// Get ALL TESTIMONIALS
xcareRouter.get('/testimonials', async (req, res) => {
    await getTestmonialsService(req, res)
})

// Get ALL OUR SERVICE
xcareRouter.get('/our_services', async (req, res) => {
    await getOurServiceService(req, res)
})

// Get ALL blogs
xcareRouter.get('/blogs', async (req, res) => {
    await getBlogsService(req, res)
})

// Get Locations
xcareRouter.get('/locations', async (req, res) => {
    await getLocationService(req, res)
})
module.exports = xcareRouter