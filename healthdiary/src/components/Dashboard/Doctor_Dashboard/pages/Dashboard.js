import React, { useState } from 'react';
import { departmentData } from '../../Patient_Dashboard/DashboardData';
import '../../style/doctorDashboardStyle.css';

function DoctorDashboard() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contact: "",
    dob:"",
    specialization:""
  })

  const handleChange = (e) => {
    setProfile({...profile,[e.target.name]:e.target.value})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  }
  
  return (
    <div className="dashboard marginOut">
      <h4>Personal Information</h4>
      <div>
      <form className='doc_home' method="POST" onSubmit={handleFormSubmit}>
         
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Name" name="name" id="name" value={profile.name} onChange={handleChange} />
              <label for="name" className="form__label">Name</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="Email" name="email" id="email"  value={profile.email} onChange={handleChange} />
              <label for="email" className="form__label">Email</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="contact" name="contact" id="contact"  value={profile.contact} onChange={handleChange} />
              <label for="contact" className="form__label">Contact</label>
          </div>

          <div className="form__group field">
            <input type="date" className="form__field" placeholder="Date Of Birth" name="dob" id="dob"  value={profile.dob} onChange={handleChange} />
              <label for="dob" className="form__label">Date Of Birth</label>
          </div>

           <div className="form__group field">
              <label for="department" className="form__label">Specialization</label>
              <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization" value={profile.specialization} onChange={handleChange}>
                {departmentData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
             </div>
                      
           <button className='button dashboard_button' >Save</button>
        </form>
        </div>
    </div>
  );
}

export default DoctorDashboard;