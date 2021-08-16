const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    firstName : {
        type: String,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contact: {
        type: String
    },
    profilePicture: {
        type: String
    }

}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

module.exports = User