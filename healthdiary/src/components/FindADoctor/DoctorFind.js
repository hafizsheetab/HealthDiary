import axios from 'axios'
import React, { useState } from 'react'
import { departmentData } from '../Dashboard/Patient_Dashboard/DashboardData'
import { getToken } from '../Utility/localStorageAPI'
import DoctorCard from './DoctorCard'
import './findADoc.css'
import Navbar from './Navbar'

function DoctorFind({history}) {
  const [findField, setfindField] = useState({
    specialization: ""
  })
  const [doctors, setDoctors] = useState([])
  // const doctors = [
  //   {name:'Shafi',email:'hg@gmail.com',contactNo:'0192389302',specialization:'Psycology' ,qualification:'MBBS ABC',_id:'18391'}
  // ]
  const handleChange = (e) => {
    setfindField({...findField,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.defaults.headers.common['x-auth-token']=getToken()
    axios.get(`http://localhost:5000/api/doctor/finddoctors/${findField.specialization}`).then(
      function(res){
        let vDoctors = res.data;
        vDoctors = vDoctors.map(vDoctor => {
          vDoctor = {
            ...vDoctor.user,
            contactNo: vDoctors.contactNo,
            specialization: vDoctor.specialization,
            qualification:  "".concat(vDoctor.qualifications.map(qualification => qualification.name + " "))
          }
          return vDoctor
        })
        setDoctors(vDoctors)
      }
    )
  }
  
  return (
    <>
      <Navbar />
        <div className="find_container">
            <div className="search_box">
                <form method="POST" onSubmit = {handleSubmit}>
                  <div className="form__group field search_field">
                    <label for="department" className="form__label">Specialization</label>
                    <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization" onChange = {handleChange}>
                      <option value = "" selected disabled hidden>Choose Here</option>
                    {departmentData.value.map(con =>
                    (<option value={con}>{con}</option>))}
                    </select>
                  </div>
                  <button type="submit" className="button doc_find_btn">Search</button>
                </form>
            </div>
         <div className="doc-list">
        {doctors.map(i => (
          <DoctorCard doctor={i} history = {history}/>
            ))}
        </div>
      </div>
      </>
    )
}

export default DoctorFind
