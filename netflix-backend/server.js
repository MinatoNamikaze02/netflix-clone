require('dotenv').config()
const auth = require('./routes/auth')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const uri = process.env.ATLAS_URI
//main
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(cors())

//routes
app.use(auth)

//Mongo DB

mongoose
    .connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('DB connection error'))


//misc

const PORT = 3001

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
