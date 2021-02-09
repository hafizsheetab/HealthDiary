import React from 'react';
import { familyRelationData } from "../DashboardData";
import Navbar from '../Navbar';

function FamilyHistory() {
    const preExistData = [
        {place:'Condition/Diseases',value:"diseases"},
        {place:'Treatment Taken',value:"treatment"},
        {place:'Medicine Used',value:"medicine"},
    ]
    return (
      <>
        <Navbar />
          <div className="dashboard marginOut">
            <h4>Health & Family History</h4>
          
        <form method="POST">
        <div className='home'>
           <div className="form__group field">
              <label htmlFor="relation" className="form__label">Family Relation</label>
              <select type="text" className="form__field" placeholder="Relation" name="relation" id="relation">
                {familyRelationData.value.map(con =>
                (<option value={con}>{con}</option>))}
              </select>
            </div>
             
            <div className="form__group field">
                <input type="text" className="form__field" placeholder="diagnosis" name="diagnosis" id="diagnosis" />
                <label for="diagnosis" className="form__label">Diagnosis</label>
            </div>
           </div>
            <button type='submit' className="button doc_app_btn history_btn">Save</button>        
           </form> 
           
           <div className="history_head"><h6>Pre Existing Condition</h6></div>
           
           <form method="POST" >
            <div className="home">
             {preExistData.map(con =>
             (
                <div class="form__group field">
                    <input type="text" className="form__field" placeholder={con.place} name={con.value} id={con.value} />
                    <label for={con.value} className="form__label">{con.place}</label>
                </div>
                
        ))}
            </div>
             <button type='submit' className="button doc_app_btn history_btn_2">Save Pre-Existing Condition</button>  
           </form>     
        </div>
        </>
    )
}

export default FamilyHistory
