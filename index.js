// 1. IMPORTS

const express       = require('express')
const app           = express()
const cors          = require('cors')
const connectDB     = require('./config/db')
const path          = require('path')

// 2. MIDDLEWARES

require('dotenv').config()
connectDB()
app.use(cors())
app.use(express.json({extended: true}))


// 3. ROUTES

app.use('/public', express.static(path.join(__dirname, 'uploads')))

const authRoutes = require('./routes/auth')
app.use('/api', authRoutes)

const adminRoutes = require('./routes/admin/auth')
app.use('/api', adminRoutes)

const categoryRoutes = require('./routes/category')
app.use('/api', categoryRoutes)

const productRoutes = require('./routes/product')
app.use('/api', productRoutes)

const cartRoutes = require('./routes/cart')
app.use('/api', cartRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// 4. SERVER

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
