const express = require('express')
const proxy = require('express-http-proxy')

const forwarder = {}

forwarder.proxy = proxy

forwarder.fromMap = map => {

    const router = express.Router()

    Object.keys(map).forEach(key => {
        let route = `/${key}`
        let target = map[key]


        router.use(route, (req, res, next) => {

            console.log('catch router', route, target);
            
            proxy(target)(req, res, next)
        })
    })

    return router
}

module.exports = forwarder