import axios from 'axios';
import React, { useState } from 'react';
import { getToken, getUser } from '../../../Utility/localStorageAPI';
import { departmentData } from '../../Patient_Dashboard/DashboardData';
import {stringToTimeStamp, timesStampToString} from '../../../Utility/convertTimeStamp'
import '../../style/doctorDashboardStyle.css';
var moment = require('moment'); // require
moment().format();

function DoctorDashboard() {

  const [profile, setProfile] = useState({
    name: '',
    email: "",
    contactNo: "",
    dateOfBirth:"",
    specialization:""
  })

  const handleChange = (e) => {
    setProfile({...profile,[e.target.name]:e.target.value})
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    let payload = {
      specialization: profile.specialization,
      dateOfBirth: stringToTimeStamp(profile.dateOfBirth),
      contactNo: profile.contactNo
    }
    axios.defaults.headers.common['x-auth-token']=getToken()
    axios.put('http://localhost:5000/api/doctor',{
      ...payload
    }).then(function(res){
      console.log(res)
    })
  }


  React.useEffect(() => {
    async function fetchData(){
      console.log(getUser())
      try{
        console.log('chole na')
        axios.defaults.headers.common['x-auth-token']=getToken()
        let response = await axios.get('http://localhost:5000/api/doctor',{
      })
      let doctor = response.data
      console.log(doctor)
       setProfile({
         name: doctor.user.name,
         email: doctor.user.email,
         contactNo: doctor.contactNo,
         dateOfBirth: timesStampToString(doctor.dateOfBirth),
          specialization: doctor.specialization
       })
       console.log(profile)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  return (
    <div className="dashboard marginOut">
      <h4>Personal Information</h4>
      <div>
      <form className='doc_home' method="POST" onSubmit={handleFormSubmit}>
         
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Name" name="name" id="name" value={profile.name} onChange={(e) => {e.preventDefault()}} />
              <label for="name" className="form__label">Name</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="Email" name="email" id="email"  value={profile.email} onChange={(e) => {e.preventDefault()}} />
              <label for="email" className="form__label">Email</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="contactNo" name="contactNo" id="contactNo"  value={profile.contactNo} onChange={handleChange} />
              <label for="contactNo" className="form__label">contactNo</label>
          </div>

          <div className="form__group field">
            <input type="date" className="form__field" placeholder="Date Of Birth" name="dateOfBirth" id="dateOfBirth"  value={profile.dateOfBirth} onChange={handleChange} />
              <label for="dateOfBirth" className="form__label">Date Of Birth</label>
          </div>

           <div className="form__group field">
              <label for="department" className="form__label">Specialization</label>
              <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization" value={profile.specialization} onChange={handleChange}>
                {departmentData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
             </div>
                      
           <button className='button dashboard_button' >Save</button>
        </form>
        </div>
    </div>
  );
}

export default DoctorDashboard;