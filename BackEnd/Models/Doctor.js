const mongoose =  require('mongoose')

const DoctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    Department:{
        type: String,
        required: true
    },
    Qualifications: [
        {
            name: {
                type: String,
                required: true
            },
            passingDate: {
                type: Date,
                required: true
            }
        }
    ]
})

module.exports = Doctor = mongoose.model('Doctor',DoctorSchema)