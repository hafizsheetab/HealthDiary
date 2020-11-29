const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const config = require('config')

router.post('/',[
    check('name','Give a valid name').not().isEmpty(),
    check('email','Give Valid email').isEmail(),
    check('password','Give more than 6 characters').isLength(6),
    check('usertype','select Type').not().isEmpty()
],async (req,res) => {
  
   try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        let {name, email, password,password2, usertype} = req.body
        if(!password.equals(password2)){
            return res.status(400).json({msg: 'Passwords do not match'})
        }
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({errors:{message: 'Already Registered'}})
        }
        const avatar = gravatar.url(email,{
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        
        const salt = await bcrypt.genSaltSync(10);
        password = await bcrypt.hash(password,salt)
        user = new User({
            name,
            email,
            password,
            usertype,
            gravatar
        })
        await user.save()
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),{expiresIn:360000},(err,token) =>{
            if(err) throw err
            res.json({token})
        })
        

   }
   catch(error){
       console.error(error.message)
       res.status(500).send('Server Error')
   }
  
})

module.exports = router