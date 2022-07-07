require('dotenv').config()
const express = require('express')
const router = require('./routes')
const app = express()
const PORT = process.env.PORT || 4001
const cors = require('cors')
const errorHandler = require('./middlewares/error-handler')
const { connection } = require('./config/mongodbConnection')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', router)
app.use(errorHandler)

connection()
.then(async (db) => {
  console.log('connected to db');
  app.listen(PORT, ()=>console.log('http://localhost:'+PORT))
})
