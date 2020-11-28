const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    consultationHistory: [
        {
            doctor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Doctor',
                required: true
            },
            diagnosis:{
                type: String,
                required: true
            },
            prescription: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = Patient = mongoose.model('Patient',PatientSchema)