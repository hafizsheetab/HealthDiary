const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    consultationHistory: [
        {
            doctor: {
                type: String,
                required: true
                // type: mongoose.Schema.Types.ObjectId,
                // ref: 'Doctor',
                // required: true
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