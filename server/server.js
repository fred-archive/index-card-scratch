//requirements
require('dotenv').config()
const express = require('express')
const {PORT} = process.env
const ctrl = require('./controller')

//run express
const app = express()
app.use(express.json())

//endpoint(s)
app.get('/api/cards', ctrl.getCard)

//listening
app.listen(PORT, ()=> console.log(`${PORT} is working, more or less`))