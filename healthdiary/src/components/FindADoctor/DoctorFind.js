import axios from 'axios'
import React, { useState } from 'react'
import { departmentData } from '../Dashboard/Patient_Dashboard/DashboardData'
import { getToken, getUser } from '../Utility/localStorageAPI'
import DoctorCard from './DoctorCard'
import './findADoc.css'

function DoctorFind() {
  const [appointmentData, setAppointmentDate] = useState({})
  const [tableData, setTableData] = useState([])
  const [findField, setfindField] = useState({
    specialization: ""
  })
  const doctors = [
    {name:'Shafi',email:'hg@gmail.com',contactNo:'0192389302',specialization:'Psycology' ,qualification:'MBBS ABC',_id:'18391'}
  ]
  const handleChange = (e) => {
    setfindField({...findField,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.defaults.headers.common['x-auth-token']=getToken()
    axios.get(`http://localhost:5000/api/doctor/finddoctors/${findField.specialization}`).then(
      function(res){
        setTableData(res.data)
      }
    )
  }
  
  const handleAppointment = (e) => {
    axios.defaults.headers.common['x-auth-token']=getToken()
    let payload  = {
      patient: {
        user: getUser()
      },
      doctor: {
        user: {_id : e.target.value}
      }
    }
    axios.post('http://localhost:5000/api/appointment', {
      ...payload
    }).then(function (res){
      console.log(res)
    })
    console.log(payload)
  }
    return (
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

        {doctors.map(i => (
          <DoctorCard doctor={i}/>
            ))}
        
        </div>
    )
}

export default DoctorFind
