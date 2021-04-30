const express = require('express')
const path = require('path')
// const helmet = require('helmet')

const indexRouter = require('./routes/index')

const app = express()

app.use(express.json())

// app.enable('trust proxy')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// app.use(cors());
// app.options('*', cors());
// app.use(helmet())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

module.exports = app
