import React from 'react';
import '../style/doctorDashboardStyle.css';

function DoctorDashboard() {
  const content = [
    { f_type: "text", f_place: "Name", f_value: 'name',s_type: "number", s_place: "Age", s_value: 'age' },
    { f_type: "email", f_place: "Email", f_value: 'e', s_type: "input", s_place: "Contact No.", s_value: 'contact' },
    { f_type: "date", f_place: "Date of Birth", f_value: 'dob', s_type: "input", s_place: "NID", s_value: 'nid' },
    {f_type:"number",f_place:"Height (cm)",f_value:'height',s_type:"number",s_place:"Weight (kg)",s_value:'weight'},
  ]

  return (
    <div className="dashboard marginOut">
      <h4>Personal Information</h4>
      <div>
      <form className='home' method="POST">
        {content.map(con =>
        (
         <> 
          <div class="form__group field">
            <input type={con.f_type} className="form__field" placeholder={con.f_place} name={con.f_value} id={con.f_value} />
              <label for={con.f_value} className="form__label">{con.f_place}</label>
          </div>
          <div class="form__group field">
            <input type={con.s_type} className="form__field" placeholder={con.s_place} name={con.s_value} id={con.s_value} />
            <label for={con.s_value} className="form__label">{con.s_place}</label>
          </div>
         </> 
        ))}
        <div className="form__group field">
          <div className="radio_data"> Gender</div>
      
            <input className="radio_btn radio_btn_first" type="radio" id="male" name="gender" value="male"  />
            <label for="male">Male</label>
        
            <input className="radio_btn" type="radio" id="female" name="gender" value="female"  />
            <label for="female">Female</label>
          
            <input className="radio_btn" type="radio" id="other" name="gender" value="other"  />
            
          </div>
            <div className="form__group field">
             <label className="form__label" for="cars">Blood Group</label>
              <select name="blood" id="blood" className="form__field">
                <option value="A_pos">A+</option>
                <option value="A_neg">A-</option>
                <option value="B_pos">B+</option>
                <option value="B_neg">B-</option>
                <option value="O_pos">O+</option>
                <option value="O_pos">O-</option>
                <option value="AB_pos">AB+</option>
                <option value="AB_pos">AB-</option>
              </select>
            </div>
        </form>
        </div>
      <button className='button dashboard_button' >Save</button>
    </div>
  );
}

export default DoctorDashboard;