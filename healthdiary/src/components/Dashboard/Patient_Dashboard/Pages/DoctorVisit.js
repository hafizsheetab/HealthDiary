import React, { useState } from 'react';
import '../../style/patientDashboardStyle.css';
import { departmentData, divisionData, hospitalData } from '../DashboardData';

function DoctorVisit() {
  const [docData, setDocData] = useState({
    district: "",
    specialization: "",
    hospital: "",
    city: "",
    locality:"",
    reason: "",
    date: "",
    time:""
  })

  const handleOnChange = (e) => {
    setDocData({...docData,[e.target.name]:e.target.value})
  } 
  const handleFormSumbit = (e) => {
    e.preventDefault();
    console.log(docData.district);

  }


  return (
    <>
    <div className="dashboard marginOut">
      <h4>Doctor Visits</h4>
      <div>
         <h6>Make an Appointment</h6>
      </div>
      <div className=" doc_appointment">
        
          <form method="POST" onSubmit={handleFormSumbit}>
          <div className='home'>
          <div className="form__group field">
              <label htmlFor="district" className="form__label">District</label>
              <select type="text" className="form__field" placeholder="District" name="district" id="district"
              value={docData.district} onChange={e=>handleOnChange(e)}>
                {divisionData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
          </div>
    
        <div className="form__group field">
            <input type="text" className="form__field" placeholder="City" name="city" id="city" value={docData.city} onChange={e=>handleOnChange(e)}/>
            <label for="" className="form__label">City</label>
        </div>
        <div className="form__group field">
            <input type="text" className="form__field" placeholder="Locality" name="locality" id="locality" value={docData.locality} onChange={e=>handleOnChange(e)}/>
            <label for="" className="form__label">Locality</label>
          </div>
          
          <div className="form__group field">
              <label for="department" className="form__label">Specialization</label>
              <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization" value={docData.specialization} onChange={e=>handleOnChange(e)}>
                {departmentData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
          </div>

           <div className="form__group field">
              <label for="hospital" className="form__label">Hospital</label>
              <select type="text" className="form__field"    placeholder="Hospital" name="hospital" id="hospital" value={docData.hospital} onChange={e=>handleOnChange(e)}>
                {hospitalData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
          </div>
         
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Reason For Visit" name="reason" id="reason"  value={docData.reason} onChange={e=>handleOnChange(e)} />
            <label for="reason" className="form__label">Reason For Visit</label>
          </div>

           <div className="form__group field">
            <input type="date" className="form__field" placeholder="Date" name="date" id="date" value={docData.date} onChange={e=>handleOnChange(e)} />
            <label for="date" className="form__label">Date</label>
          </div>

          <div className="form__group field">
            <input type="time" className="form__field" placeholder="Time" name="time" id="time" value={docData.time} onChange={e=>handleOnChange(e)}/>
            <label for="time" className="form__label">Time</label>
          </div>
          </div>
           <button type ="submit" onClick={handleFormSumbit} className='button doc_app_btn' >Book Appointment</button>
        </form>
      </div>
    </div> 
    </>
  );
}

export default DoctorVisit;