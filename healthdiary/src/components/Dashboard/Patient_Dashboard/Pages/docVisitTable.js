
import axios from 'axios'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { timeStampToStringWithDate } from '../../../Utility/convertTimeStamp'
import { getToken } from '../../../Utility/localStorageAPI'
import '../../style/patientDashboardStyle.css'
import Navbar from '../Navbar'

function DocVisitTable({history}) {
    const handleClick = (e) => {
        history.push(`/patient/appointment/details/${e.target.value}`)
    }
    const[tableData, setTableData] = useState([])
    React.useEffect(()=> {
      async function fetcData(){
        axios.defaults.headers.common['x-auth-token']=getToken()
        let response = await axios.get('http://localhost:5000/api/appointment/patient')
        setTableData(response.data)
      }
      fetcData()
    },[])
    return (
      <>  
        <Navbar />
        <div className="doc_table marginOut">
       <div className="app_head">
         <h6>Upcoming/Follow up Appointment</h6>
       </div>
        <Table striped bordered hover>
       <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Patient Name</th>
            <th>Time</th>
            <th>Confirmed</th>
            <th>Completed</th>
            <th>View Appointment Details</th>
          </tr>
       </thead>
        <tbody>
          {tableData.map(data => (
            <tr>
              <td>
                {data.doctor.name}
              </td>
              <td>
                {data.patient.name}
              </td>
              <td>
              <input type="datetime-local" dateTime className="form__field" placeholder="Appointment Time Slot" name="dateOfBirth" id="dateOfBirth" value = {timeStampToStringWithDate(data.time)} onClick = {(e) => e.preventDefault()} />
              </td>
              <td>
                {data.confirmed.status.toString()}
              </td>
              <td>
                {data.completed.status.toString()}
              </td>
              <td><button value = {data._id} onClick = {handleClick}>View Details</button></td>
            </tr>
          ))}
       </tbody>
       </Table>
      </div> 
            
        </>
    )
}

export default DocVisitTable
