const mongoose = require('mongoose')
const bcrypt   = require('bcryptjs')

const userSchema = new mongoose.Schema({

    firstName : {
        type: String,
        trim: true,
        required: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        trim: true,
        requires: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
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

userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10)
})

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`
})

userSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.hash_password)
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User