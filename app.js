const http = require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const api = require('./api')

const PORT = 80

const app = express()
const server = http.createServer(app)

app.set('view engine', 'pug')

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.use(express.static('public'))

// use api
app.use('/api', api)

app.get('/', (req, res, next) => {
    return res.render('home')
})

server.listen(PORT, () => {
    console.log('api gateway app is running')
})