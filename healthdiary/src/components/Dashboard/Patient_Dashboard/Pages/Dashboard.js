import axios from 'axios';
import React, { useState } from 'react';
import { timesStampToString } from '../../../Utility/convertTimeStamp';
import { getToken } from '../../../Utility/localStorageAPI';
import '../../style/patientDashboardStyle.css';
import Navbar from '../Navbar';

function Dashboard() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contactNo: "",
    height: "",
    weight: "",
    age: "",
    nid: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: ""
  })
  const setProfileHook = (patient) => {
    setProfile({
      name: patient.user.name,
      email: patient.user.email,
      contactNo: patient.contactNo,
      height:  patient.height,
      weight:  patient.weight,
      age:  patient.age,
      nid:  patient.nid,
      dateOfBirth: timesStampToString(patient.dateOfBirth),
      gender:  patient.gender,
      bloodGroup: patient.bloodGroup
    })
  }
  const handleChange = (e) => {
    setProfile({...profile,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(profile)
    axios.defaults.headers.common['x-auth-token']=getToken()
    axios.put('http://localhost:5000/api/patient',{
      ...profile
    }).then(function (res){
      setProfileHook(res.data)
    }).catch(function(err){
      console.log(err)
    })
    
    
  }
  React.useEffect(()=> {
    async function fetchData(){
      try{
        axios.defaults.headers.common['x-auth-token']=getToken()
      let response = await axios.get('http://localhost:5000/api/patient')
      let patient = response.data
      setProfileHook(patient)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  return (
    <>
      <Navbar />
    <div className="dashboard marginOut">
      <h4>Personal Information</h4>
      <div>
      <form className='home' method="POST" onSubmit = {handleSubmit}>
      <div className="form__group field">
            <input type="text" className="form__field" placeholder="Name" name="name" id="name" value = {profile.name} onChange={(e) => {e.preventDefault()}} />
              <label for="name" className="form__label">Name</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="Email" name="email" id="email" value = {profile.email} onChange={(e) => {e.preventDefault()}}  />
              <label for="email" className="form__label">Email</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="contactNo" name="contactNo" id="contactNo" value = {profile.contactNo} onChange = {handleChange}    />
              <label for="contactNo" className="form__label">contactNo</label>
          </div>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="height" name="height" id="height"  value = {profile.height} onChange = {handleChange}   />
              <label for="height" className="form__label">height</label>
          </div>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="weight" name="weight" id="weight"  value = {profile.weight} onChange = {handleChange}   />
              <label for="weight" className="form__label">weight</label>
          </div>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="age" name="age" id="age" value = {profile.age} onChange = {handleChange}    />
              <label for="age" className="form__label">age</label>
          </div>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="nid" name="nid" id="nid"  value = {profile.nid} onChange = {handleChange}   />
              <label for="nid" className="form__label">nid</label>
          </div>

          <div className="form__group field">
            <input type="date" className="form__field" placeholder="Date Of Birth" name="dateOfBirth" id="dateOfBirth" value = {profile.dateOfBirth} onChange = {handleChange}   />
              <label for="dateOfBirth" className="form__label">Date Of Birth</label>
          </div>
          <div className="form__group field">
             <label className="form__label" for="cars">Gender</label>
              <select name="gender" id="gender" className="form__field" value = {profile.gender} onChange = {handleChange} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                
              </select>
            </div>
            <div className="form__group field">
             <label className="form__label" for="cars">Blood Group</label>
              <select name="bloodGroup" id="blood" className="form__field" value = {profile.bloodGroup} onChange = {handleChange}>
                <option value="" >Select Your Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <button className='button dashboard_button' >Save</button>
        </form>
        </div>
     
      </div>
      </>
  );
}

export default Dashboard;