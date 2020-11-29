const express = require('express')
const router = express.Router()
const Doctor = require('../Models/Doctor')
const Appointment = require('../Models/Appointment')
const Patient = require('../Models/Patient')

router.get('/doctor',async(req,res) => {
    let {doctor} = req.body
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
    }


})
router.get('/patient',async(req,res) => {
    let {patient} = req.body
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
    }
    catch(err){
        console.log(err.message)
    }
})


module.exports = router