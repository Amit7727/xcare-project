'use strict'

const config = require('config')
const logger = require('winston').loggers.get('app')
const app = require('./app')

const httpPort = config.get('server.httpPort')
const httpsPort = config.get('server.httpsPort')

app.listen(httpPort, () => logger.info(`xcare server started on ${httpPort}`))