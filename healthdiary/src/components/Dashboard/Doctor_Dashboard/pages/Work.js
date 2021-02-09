import axios from 'axios'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { stringToTimeStamp, timesStampToString } from '../../../Utility/convertTimeStamp'
import { getToken } from '../../../Utility/localStorageAPI'
import { departmentData } from '../../Patient_Dashboard/DashboardData'
import '../../style/doctorDashboardStyle.css'
import Navbar from '../Navbar'

function Work() {
  const [tableData, setTableData] = useState([])
   const [work, setWork] = useState({
    hospitalName: "",
    specialization:"",
    fromDate: "",
    toDate: "",
    isStillWorking: false
  })
  const deleteExperience = (e) => {
    axios.defaults.headers.common['x-auth-token']=getToken()
      axios.delete(`http://localhost:5000/api/doctor/experiences/${e.target.value}`)
      .then(function(res){
        setTableData(res.data)
      })

  }
  const handleChange = (e) => {
    setWork({...work,[e.target.name]:e.target.value})
  }

  const handleChangeCheckBox = (e) => {
    e.target.checked ? setWork({...work,[e.target.name]:true}) : setWork({...work,[e.target.name]:false})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let payload = {
      hospitalName: work.hospitalName,
      specialization: work.specialization,
      duration: {
        fromDate: stringToTimeStamp(work.fromDate),
        toDate: stringToTimeStamp(work.toDate),
        isStillWorking: work.isStillWorking
      }
    }
    axios.defaults.headers.common['x-auth-token']=getToken()
    axios.post('http://localhost:5000/api/doctor/experiences',{
      ...payload
    }).then(function(res){
      setTableData(res.data)
    })
    console.log(work);
  }
  React.useEffect(() => {
    async function fetchTableData(){
      axios.defaults.headers.common['x-auth-token']=getToken()
      let response = await axios.get('http://localhost:5000/api/doctor/experiences')
      setTableData(response.data)
      console.log(response.data)
    }
    fetchTableData()
  }, [])
    return (
      <>
        <Navbar />
        <div className="dashboard marginOut">
           <h4>Work Profile</h4>
           <div className="edu_container">
                <form method="POST" onSubmit={handleFormSubmit}>
                <div className="edu_data">
                
                <div class="form__group field edu_data_item">
                                <input type="text" className="form__field" placeholder="hospitalName" name="hospitalName" id="hospitalName" value={work.hospitalName} onChange={handleChange} />
                    <label for="hospitalName" className="form___label">Hospital</label>
                </div>
               
                <div className="form__group field">
                    <label for="department" className="form___label">Specialization</label>
                    <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization" value={work.specialization} onChange={handleChange}>
                        {departmentData.value.map(con =>
                        (<option value={con}>{con}</option>))}
                    </select>
                </div>
                 
                <div class="form__group field edu_data_item">
                    <input type="date" className="form__field" placeholder="experience" name="fromDate" id="fromDate" value={work.fromDate} onChange={handleChange}/>
                    <label for="fromDate" className="form___label">Start Date</label>
                </div>

                 <div class="form__group field edu_data_item">
                    <input type="date" className="form__field" placeholder="experience" name="toDate" id="toDate" value={work.toDate} onChange={handleChange}/>
                    <label for="toDate" className="form___label">End Date</label>
                </div> 

                <div class="form__group field edu_data_item">
                    <input type="checkbox" className="form__field" placeholder=" Still isStillWorking" name="isStillWorking" id="isStillWorking"  onClick={handleChangeCheckBox}/>
                    <label for="isStillWorking" className="form___label">Still Working</label>
                </div>         
                   
              </div> 
              
              <button type="submit" className="button doc_app_btn edu_btn">ADD</button>
             </form>
            </div>

            <div className="app_head">
         <h6>Upcoming/Follow up Appointment</h6>
       </div>
        <Table striped bordered hover>
       <thead>
          <tr>
            <th>Hospital</th>
            <th>Specialization</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Still Working</th>
            <th>Delete Experience</th>
          </tr>
       </thead>
        <tbody>
        {tableData.map(data => (
      <tr >
        <td>
          {data.hospitalName}
        </td>
        <td>
          {data.specialization}
        </td>
        <td>
          {timesStampToString(data.duration.fromDate)}
        </td>
        <td>
          {timesStampToString(data.duration.toDate)}
        </td>
        <td>
          {data.duration.isStillWorking.toString()}
        </td>
        <button name = {data._id} value = {data._id} onClick = {deleteExperience}>delete</button>
      </tr>
    ))}
       </tbody>
       </Table>
      </div> 
            
        </>
    )
}

export default Work
