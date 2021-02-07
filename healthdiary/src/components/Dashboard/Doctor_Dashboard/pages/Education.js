import React from 'react';
import '../style/doctorDashboardStyle.css';

function Education() {
    const educationalData = [
        {place:'Medical School',value:"school"},
        {place:'Board Certification',value:"certification"},
        {place:'Fellowships',value:"fellow"},
        {place:'Articals/Research Paper',value:"articals"},
        {place:'Special Clinical Trainings',value:"trainings"},
        {place:'Special Clinical Interests',value:"interest"},
    ]
    return (
        <>
          <div className="dashboard marginOut">
           <h4>Educational Information</h4>
            <div className="edu_container">
                <form method="POST" >
                <div className="edu_data">
                {educationalData.map(con =>
                (
                <div class="form__group field edu_data_item">
                    <input type="text" className="form__field" placeholder={con.place} name={con.value} id={con.value} />
                    <label for={con.value} className="form__label">{con.place}</label>
                </div>
                
               ))}
              </div> 
              <button type="submit" className="button doc_app_btn edu_btn">Save</button>
             </form>
            </div>
          </div>
        </>
    )
}

export default Education;
