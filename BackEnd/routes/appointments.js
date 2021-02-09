const express = require('express')
const router = express.Router()
const Doctor = require('../Models/Doctor')
const Appointment = require('../Models/Appointment')
const Patient = require('../Models/Patient')

router.get('/doctor',auth,async(req,res) => {
    let user = await User.findById(req.user.user.id)
     let doctor = await Doctor.findOne({'user' : `${user._id}`})
    try{
        await Appointment.find({'doctor':`${doctor._id}`},(err, appointments) => {
            if(err){
                console.log(err.message)
            }
            res.send(appointments)
        })
    }
    catch(err){
        console.log(err.message)
        res.json({err : err.message})
    }


})
router.get('/patient',auth, async(req,res) => {
    let user = await User.findById(req.user.user.id)
    let patient = await Patient.findOne({'user' : `${user._id}`})
    try{
        await Appointment.find({'patient':`${patient._id}`},(err, appointments) => {
            if(err){
                console.log(err.message)
            }
            res.send(appointments)
        })
    }
    catch(err){
        console.log(err.message)
        res.json({err: err.message})
    }


})
router.post('/create',async(req,res)=>{
    let{doctor, patient, time} = req.body
    try{
        let appointment = new Appointment({
            doctor,
            patient,
            time
        })
        await appointment.save()
        res.json({msg: 'Success'})
    }
    catch(err){
        console.log(err.message)
        res.send({msg: err.message})
    }
})


module.exports = router