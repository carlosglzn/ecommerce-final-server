// 1. IMPORTS

const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')


// 2. MIDDLEWARES

require('dotenv').config()
connectDB()
app.use(cors())
app.use(express.json({extended: true}))

// 3. ROUTES

app.get('/', (req, res) => {

    res.status(200).json({
        message: 'Hello from server'
    })

})

app.post('/data', (req, res) => {

    res.status(200).json({
        message: req.body
    })
})

// 4. SERVER

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
