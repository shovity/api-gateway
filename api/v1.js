const express = require('express')

const forwarder = require('./forwarder')
const oldPythonMap = require('./maps/old-python')
const socketGatewayMap = require('./maps/socket-gateway')

const v1 = express.Router()

v1.use('/ball', (req, res, next) => {
    res.json({ objects: [1,2,3] })
})

v1.use(forwarder.fromMap(oldPythonMap))
v1.use(forwarder.fromMap(socketGatewayMap))

module.exports = v1