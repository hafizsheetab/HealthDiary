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
    department:{
        type: String,
        required: true
    },
    qualifications: [
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