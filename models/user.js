const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    userid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', user)