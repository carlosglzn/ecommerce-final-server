// 1. IMPORTS

const express       = require('express')
const app           = express()
const cors          = require('cors')
const connectDB     = require('./config/db')


// 2. MIDDLEWARES

require('dotenv').config()
connectDB()
app.use(cors())
app.use(express.json({extended: true}))

// 3. ROUTES

const authRoutes = require('./routes/auth')
app.use('/api', authRoutes)



app.get('/', (req, res) => {
    res.send('Hello World!')
})


// 4. SERVER

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
