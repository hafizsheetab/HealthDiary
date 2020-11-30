 const mongoose = require('mongoose')

 const AppointmentSchema = new mongoose.Schema({
     doctor: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Doctor'
     },
     patient: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Patient'
     },
     time: {
        type: String,
        required: true
     }
 })

 module.exports = Appointment = mongoose.model('Appointment',AppointmentSchema)