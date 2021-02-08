import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { departmentData } from '../../Patient_Dashboard/DashboardData'
import '../../style/doctorDashboardStyle.css'

function Work() {
   const [work, setWork] = useState({
    hospital: "",
    specialization:"",
    experience_start: "",
    experience_end: "",
    working:""
  })

  const handleChange = (e) => {
    setWork({...work,[e.target.name]:e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(work);
  }
    return (
        <>
        <div className="dashboard marginOut">
           <h4>Work Profile</h4>
           <div className="edu_container">
                <form method="POST" onSubmit={handleFormSubmit}>
                <div className="edu_data">
                
                <div class="form__group field edu_data_item">
                                <input type="text" className="form__field" placeholder="hospital" name="hospital" id="hospital" value={work.hospital} onChange={handleChange} />
                    <label for="hospital" className="form__label">Hospital</label>
                </div>
               
                <div className="form__group field">
                    <label for="department" className="form__label">Specialization</label>
                    <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization" value={work.specialization} onChange={handleChange}>
                        {departmentData.value.map(con =>
                        (<option value={con}>{con}</option>))}
                    </select>
                </div>
                 
                <div class="form__group field edu_data_item">
                    <input type="date" className="form__field" placeholder="experience" name="experience_start" id="experience_start" value={work.experience_start} onChange={handleChange}/>
                    <label for="experience_start" className="form__label">Start Date</label>
                </div>

                 <div class="form__group field edu_data_item">
                    <input type="date" className="form__field" placeholder="experience" name="experience_end" id="experience_end" value={work.experience_end} onChange={handleChange}/>
                    <label for="experience_end" className="form__label">End Date</label>
                </div> 

                <div class="form__group field edu_data_item">
                    <input type="checkbox" className="form__field" placeholder=" Still Working" name="working" id="working" value={work.working} onClick={handleChange}/>
                    <label for="working" className="form__label">Still Working</label>
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
            
          </tr>
       </thead>
        <tbody>
          <tr>
              <td>mmb</td>
              <td>Mbbs</td>
              <td>12/3/2005</td>
          </tr>
          <tr>
              <td>Mbbs</td>
              <td>Mbbs</td>
              <td>12/3/2005</td>
          </tr>
       </tbody>
       </Table>
      </div> 
            
        </>
    )
}

export default Work
