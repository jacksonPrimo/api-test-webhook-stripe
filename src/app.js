const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
app.get('/', (req, res)=> res.send('server running'))
app.get('/webhook', (req, res)=> {
  console.log("body=========>", req.body)
})
app.post('/webhook', (req, res)=> {
  console.log("body=========>", req.body)
  console.log("data=========>", req.body.data)
  console.log("id with body=>data =========>", req.body.data.id)
  console.log("object=========>", req.body.object)

  console.log("status with body =========>", req.body.status)
  console.log("status with data =========>", req.body.data.status)
  console.log("status with data=>object =========>", req.body.data.object.status)
  console.log("status with object =========>", req.body.object.status)
})
module.exports = app