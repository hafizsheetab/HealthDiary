import React from 'react';
import '../../style/patientDashboardStyle.css';
import Navbar from '../Navbar';

function UploadReports() {
    return (
      <>
        <Navbar />
        <div className="up_container">
            <div className="upload_reports home marginOut">
                <div className="up_text">
                  <h4>Upload Reports</h4>
                  <p>(Blood Test,Urinde Test,X-Ray etc)</p>
                </div>
            
            <div>
             <form method="POST">
              <div className=''>
                <div className="form__group field">
                <input type="file" className="form__field" placeholder="report" name="report" id="report" />
                <label for="report" className="form__label">Report</label>
                </div>
              </div>
              <button type="submit" className="button doc_app_btn" >Upload</button>
             </form> 
            </div> 
            </div>
        </div>
        
        </>
    )
}

export default UploadReports
