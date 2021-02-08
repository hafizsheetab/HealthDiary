import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../../style/doctorDashboardStyle.css';

function Education() {
    const [education, setEducation] = useState({
    qualification: "",
    passingDate: "",
    school: ""
  })

  const handleChange = (e) => {
    setEducation({...education,[e.target.name]:e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(education);
  }
    
    return (
        <>
          <div className="dashboard marginOut">
           <h4>Educational Information</h4>
            <div className="edu_container">
                <form method="POST" onSubmit={handleFormSubmit} >
                <div className="edu_data">
                
                <div class="form__group field edu_data_item">
                                <input type="text" className="form__field" placeholder="qualification" name="qualification" id="qualification" value={education.qualification} onChange={handleChange}/>
                    <label for="qualification" className="form__label">Qualifications</label>
                </div>
                
                <div class="form__group field edu_data_item">
                    <input type="date" className="form__field" placeholder="Passing Date" name="passingDate" id="passingDate" value={education.passingDate} onChange={handleChange}/>
                    <label for="passingDate" className="form__label">Passing Date</label>
                </div>
                
                 <div class="form__group field edu_data_item">
                    <input type="text" className="form__field" placeholder="Medical School" name="school" id="school" value={education.school} onChange={handleChange}/>
                    <label for="school" className="form__label">Medical School</label>
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
            <th>Qualification Name</th>
            <th>Medical School</th>
            <th>Passing Date</th>
            
          </tr>
       </thead>
        <tbody>
          <tr>
              <td>Mbbs</td>
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

export default Education;
