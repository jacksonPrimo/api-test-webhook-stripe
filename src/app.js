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


  console.log("status with data=>object =========>", req.body.data.object.status)
  console.log("plan with data=>object =========>", req.body.data.object.plan)
  console.log("items with data=>object =========>", req.body.data.object.items)
  console.log("subscription with data=>object =========>", req.body.data.object.id)
  console.log("customer with data=>object =========>", req.body.data.object.customer)

})
module.exports = app