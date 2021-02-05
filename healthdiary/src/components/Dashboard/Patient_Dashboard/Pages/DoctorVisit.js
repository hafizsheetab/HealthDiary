import React from 'react';
import '../../style/patientDashboardStyle.css';
import { departmentData, divisionData, hospitalData } from '../DashboardData';


function DoctorVisit() {

  return (
    <div className="dashboard marginOut">
      <h4>Doctor Visits</h4>
      <div className="">
         <h6>Make an Appointment</h6>
      </div>
      <div className=" doc_appointment">
        
        <form className='home' method="POST">
          <div class="form__group field">
              <label for="district" className="form__label">District</label>
              <select type="text" className="form__field"     placeholder="District" name="district" id="district" >
                {divisionData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
          </div>
    
        <div class="form__group field">
            <input type="text" className="form__field" placeholder="City" name="city" id="city" />
            <label for="" className="form__label">City</label>
        </div>
        <div class="form__group field">
            <input type="text" className="form__field" placeholder="Locality" name="locality" id="locality" />
            <label for="" className="form__label">Locality</label>
          </div>
          
          <div class="form__group field">
              <label for="department" className="form__label">Specialization</label>
              <select type="text" className="form__field"     placeholder="Specialization" name="department" id="department" >
                {departmentData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
          </div>

           <div class="form__group field">
              <label for="hospital" className="form__label">Hospital</label>
              <select type="text" className="form__field"    placeholder="Hospital" name="hospital" id="hospital" >
                {hospitalData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
          </div>
         
          <div class="form__group field">
            <input type="text" className="form__field" placeholder="Reason For Visit" name="reason" id="reason" />
            <label for="reason" className="form__label">Reason For Visit</label>
          </div>

           <div class="form__group field">
            <input type="date" className="form__field" placeholder="Date" name="date" id="date" />
            <label for="date" className="form__label">Date</label>
          </div>

          <div class="form__group field">
            <input type="time" className="form__field" placeholder="Time" name="time" id="time" />
            <label for="time" className="form__label">Time</label>
          </div>

        </form>
      </div>
      <button className='button doc_app_btn' >Book Appointment</button>
    </div>  
  );
}

export default DoctorVisit;