const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const PORT = 3100

const app = express()
const server = http.createServer(app)

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(cookieParser())

app.use(express.static('public'))

app.get('/', (req, res, next) => {
    return res.render('home')
})

server.listen(PORT, () => {
    console.log(`api getway app listening at ${PORT}`)
})