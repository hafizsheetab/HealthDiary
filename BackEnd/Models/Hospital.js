const mongoose = require('mongoose')

const HospitalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address:{
        type: String,
        required: true
    }
})

module.exports = Hospital = mongoose.model('Hospital',HospitalSchema)