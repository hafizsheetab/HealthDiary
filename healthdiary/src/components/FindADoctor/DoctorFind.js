import axios from 'axios'
import React,{useState} from 'react'
import { Table } from 'react-bootstrap'
import { departmentData, hospitalData } from '../Dashboard/Patient_Dashboard/DashboardData'
import { getToken, getUser } from '../Utility/localStorageAPI'
import './findADoc.css'

function DoctorFind() {
  const [appointmentData, setAppointmentDate] = useState({})
  const [tableData, setTableData] = useState([])
  const [findField, setfindField] = useState({
    specialization: ""
  })
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Doctor Name</th>
                  <th>Specialization</th>
                  <th>Make Appointment</th>
                  <th>Rating </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(data => (
                  <tr>
                    <td>{data.user.name}</td>
                    <td>{data.specialization}</td>
                    <button name = {data.user.specialization} value ={data.user._id} onClick = {handleAppointment}>Make Appointment</button>
                    <td>5</td>
                  </tr>
                ))}
              </tbody>
              </Table>       
        </div>
    )
}

export default DoctorFind
