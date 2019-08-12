const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    uniqid: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    balance: {
        type: Number
    },
    funding: [String],
    img: [{}]
});

module.exports = mongoose.model('Users', UserSchema);