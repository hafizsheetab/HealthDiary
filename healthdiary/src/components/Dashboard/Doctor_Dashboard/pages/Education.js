import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { timesStampToString } from '../../../Utility/convertTimeStamp';
import { getToken } from '../../../Utility/localStorageAPI';
import '../../style/doctorDashboardStyle.css';
import Navbar from '../Navbar';

function Education() {
    const [tableData, setTableData] = useState([])
    const [education, setEducation] = useState({
    name: "",
    passingDate: "",
    passingSchool: ""
  })
  const deleteEducation = (e) => {
      axios.defaults.headers.common['x-auth-token']=getToken()
      axios.delete(`http://localhost:5000/api/doctor/qualifications/${e.target.value}`)
      .then(function(res){
        setTableData(res.data)
      })
  }
  const handleChange = (e) => {
    setEducation({...education,[e.target.name]:e.target.value})
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/doctor/qualifications',{
      ...education
    }).then(function(res){
      setTableData(res.data)
    })
  }
  React.useEffect(() => {
    async function fetchTableData(){
      axios.defaults.headers.common['x-auth-token']=getToken()
      let response = await axios.get('http://localhost:5000/api/doctor/qualifications')
      setTableData(response.data)
    }
    fetchTableData()
  }, [])
    return (
      <>
        <Navbar />
          <div className="dashboard marginOut">
           <h4>Educational Information</h4>
            <div className="edu_container">
                <form method="POST" onSubmit={handleFormSubmit} >
                <div className="edu_data">
                
                <div class="form__group field edu_data_item">
                                <input type="text" className="form__field" placeholder="qualification" name="name" id="qualification" value={education.qualification} onChange={handleChange}/>
                    <label for="qualification" className="form___label">Qualification Name</label>
                </div>
                
                <div class="form__group field edu_data_item">
                    <input type="date" className="form__field" placeholder="Passing Date" name="passingDate" id="passingDate" value={education.passingDate} onChange={handleChange}/>
                    <label for="passingDate" className="form___label">Passing Date</label>
                </div>
                
                 <div class="form__group field edu_data_item">
                    <input type="text" className="form__field" placeholder="Medical passingSchool" name="passingSchool" id="passingSchool" value={education.passingSchool} onChange={handleChange}/>
                    <label for="passingSchool" className="form___label">Medical School Name</label>
                </div>
                            
              </div> 
              <button type="submit" className="button doc_app_btn edu_btn">ADD</button>
             </form>
            </div>
            
             
       <div className="edu_head">
         <h6 className="app_head">Upcoming/Follow up Appointment</h6>
      
        <Table striped bordered hover >
       <thead>
          <tr>
            <th>Qualification Name</th>
            <th>Medical School</th>
            <th>Passing Date</th>
            <th >Delete</th>
          </tr>
       </thead>
        <tbody>
          {tableData.map(data => (
      <tr >
        <td>
          {data.name}
        </td>
        <td>
          {data.passingSchool}
        </td>
        <td>
          {timesStampToString(data.passingDate)}
        </td>
        <button name = {data._id} value = {data._id} onClick = {deleteEducation}>delete</button>
      </tr>
    ))}
       </tbody>
       </Table>
      </div> 
       </div>      
        
        </>
    )
}

export default Education;
