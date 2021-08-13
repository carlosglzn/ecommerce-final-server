const mongoose = require('mongoose')
const bcrypt   = require('bcryptjs')

const UserSchema = new mongoose.Schema({

    firstName : {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
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
        default: 'admin'
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


UserSchema.virtual('password')
.set(function(password) {
    this.hash_password = bcrypt.hashSync(password, 10)
})

UserSchema.methods = {
    authenticate: function() {
        return bcrypt.compareSync(password, this.hash_password)
    }
}

const User = mongoose.model('User', UserSchema)

module.exports = User