const http = require('http')
const logger = require('./loginfo/logger')
const ip = require('ip')
require('dotenv').config()
const app = require('./app.js')
const port = process.env.server_port || 3000
logger.info(`Server running on: ${ip.address()}:${port}`)
const server = http.createServer(app)
server.listen(port)