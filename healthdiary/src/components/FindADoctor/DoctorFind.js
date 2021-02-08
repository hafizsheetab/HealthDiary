import React from 'react'
import { departmentData, hospitalData } from '../Dashboard/Patient_Dashboard/DashboardData'
import './findADoc.css'

function DoctorFind() {
    return (
        <div className="find_container">
            <div className="search_box">
                <form method="POST">
                  <div className="form__group field search_field">
                    <label for="department" className="form__label">Specialization</label>
                    <select type="text" className="form__field"     placeholder="Specialization" name="specialization" id="specialization">
                    {departmentData.value.map(con =>
                    (<option value={con}>{con}</option>))}
                    </select>
                  </div>
                  
                  <div className="form__group field search_field">
                    <label for="hospital" className="form__label">Hospital</label>
                    <select type="text" className="form__field"     placeholder="Hospital" name="hospital" id="hospital">
                    {hospitalData.value.map(con =>
                    (<option value={con}>{con}</option>))}
                    </select>
                  </div>
                  <button type="submit" className="button doc_find_btn">Search</button>
                </form>
            </div>       
        </div>
    )
}

export default DoctorFind
