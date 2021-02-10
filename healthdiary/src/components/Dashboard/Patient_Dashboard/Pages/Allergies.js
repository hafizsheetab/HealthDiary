import React from 'react';
import '../../style/patientDashboardStyle.css';
import { drugData, reactionData } from '../DashboardData';
import Navbar from '../Navbar';

function Allergies() {
  return (
    <>
     <Navbar />
    <div className="dashboard marginOut">
      <h4>Allergies</h4>
    </div>
    <div>
      <div className="drug_allergies ">
        <h6>Alleries to Drug</h6>
        <form method="POST">
        <div className='home'>
           <div className="form__group field">
              <label htmlFor="drug" className="form___label">Select Drug name</label>
              <select type="text" className="form__field" placeholder="drug" name="drug" id="drug">
                {drugData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
            </div>
            
            <div className="form__group field">
            <input type="text" className="form__field" placeholder="otherDrug" name="otherDrug" id="otherDrug" />
            <label for="otherDrug" className="form___label">Any Other Drug</label>
            </div>
            
             <div className="form__group field">
              <label htmlFor="reaction" className="form___label">Reaction</label>
              <select type="text" className="form__field" placeholder="reaction" name="reaction" id="reaction">
                {reactionData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
              </div>  
        </div>
           <button type ="submit" className='button doc_app_btn allergies_btn' >Save</button>
        
          </form>
      </div> 
       <div className="drug_allergies ">
          <h6>Other Allergies</h6>
         <form method="POST">
           <div className='home'>
              <div className="form__group field">
              <input type="text" className="form__field" placeholder="allergy" name="allergy" id="allergy" />
              <label for="allergy" className="form___label">Description</label>
              </div>
 
              <div className="form__group field">
              <input type="text" className="form__field" placeholder="reaction" name="reaction" id="reaction" />
              <label for="reaction" className="form___label">Reaction</label>
            </div>
            </div>
            <button type ="submit" className='button doc_app_btn allergies_btn' >Save</button>
         </form>
       </div>
        
    </div>
    </>
  );
}

export default Allergies;