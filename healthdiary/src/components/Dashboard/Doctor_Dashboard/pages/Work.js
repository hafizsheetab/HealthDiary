import React from 'react'
import { departmentData } from '../../Patient_Dashboard/DashboardData'
import '../style/doctorDashboardStyle.css'

function Work() {
    const workData = [
        { place: 'Hospital/Clinic', value: 'hospital' },
        { place: 'Hospital/Clinic (Previously worked)', value: 'prev_hospital' },
        { place: 'Experience (Year)', value: 'experience' },
    ]
    return (
        <div className="dashboard marginOut">
           <h4>Work Profile</h4>
           <div className="edu_container">
                <form method="POST" >
                <div className="edu_data">
                {workData.map(con =>
                (
                <div class="form__group field edu_data_item">
                    <input type="text" className="form__field" placeholder={con.place} name={con.value} id={con.value} />
                    <label for={con.value} className="form__label">{con.place}</label>
                </div>
                
               ))}
                <div className="form__group field">
              <label for="department" className="form__label">Specialization</label>
              <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization">
                {departmentData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
          </div>
              </div> 
              
              <button type="submit" className="button doc_app_btn edu_btn">Save</button>
             </form>
            </div>
        </div>
    )
}

export default Work
