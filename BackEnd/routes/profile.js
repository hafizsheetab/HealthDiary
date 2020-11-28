const express = require('express')
const router = express.Router()
const Doctor = require('../Models/Doctor')
const Patient = require('../Models/Patient')
const Hospital = require('../Models/Hospital')
const auth = require('../Middleware/auth')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const config = require('config')


router.get('/patient', async(req,res) => {
   try{
    let user = req.body.user
    // console.log(req.body)
    // console.log(user._id)
    let patient = await Patient.findOne({'user' : `${user._id}`})
    if(!patient){
        return res.status(400).json({msg : 'ProfileNotFound'})
    }

    res.send(patient)

   }
   catch(err){
       console.log(err.message)
   }

})
router.post('/patient/create',async (req,res) =>{
    let {user, consultationHistory} = req.body
    let patient = new Patient({
        user,
        consultationHistory
    })
    await patient.save()
    res.send("Success")
    
    

})
router.get('/patient/hospitals',async(req,res) =>{
    try{
        await Hospital.find({},{},(err,hospitals) => {
            if(err){
                console.log(err.message)
            }
            else{
                res.send(hospitals)
            }
        })
        

    }
    catch(err){
        console.log(err.message)
        
    }
})
router.get('/patient/hospitals/doctors',  async(req,res) =>{
    try{
        let {hospital} = req.body
        await Doctor.find({'hospital' :`${hospital._id}` },(err,hospitals) => {
        if(err){
            console.log(err.message)
        }
        else{
            res.json(hospitals)
        }
 })

    }
    catch(err){
        console.log(err.message)
    }
})


//doctor route
router.get('/doctor', async(req,res) => {
    try{
     let user = req.body.user
     let doctor = await Doctor.findOne({'user' : `${user._id}`})
     if(!doctor){
         return res.status(400).json({msg : 'ProfileNotFound'})
     }
 
     res.send(doctor)
 
    }
    catch(err){
        console.log(err.message)
    }
 
 })
 router.post('/doctor/create',async (req,res) =>{
     let {user,hospital,department, qualifications} = req.body
     let doctor = new Doctor({
         user,
         hospital,
         department,
         qualifications
     })
     await doctor.save()
     res.send("Success")
     
     
 
 })
 router.get('/hospital', async(req,res) => {
    try{
     let user = req.body.user
     let hospital = await Hospital.findOne({'user' : `${user._id}`})
     if(!hospital){
         return res.status(400).json({msg : 'ProfileNotFound'})
     }
 
     res.send(hospital)
 
    }
    catch(err){
        console.log(err.message)
    }
 
 })
 router.post('/hospital/create',async (req,res) =>{
     let {user,address} = req.body
     let hospital = new Hospital({
         user,
         address
     })
     await hospital.save()
     res.send("Success")
     
     
 
 })

module.exports = router