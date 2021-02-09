import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../../style/doctorDashboardStyle.css';
import Navbar from '../Navbar';

function DocAppoitments() {

     const [state, setState] = useState([])
    
    return (
      <>   
       <Navbar /> 
        <div className="doc_table marginOut">
       <div className="app_head">
         <h6>Upcoming/Follow up Appointment</h6>
       </div>
        <Table striped bordered hover>
       <thead>
          <tr>
            <th>Patient</th>
            <th>Problem</th>
            <th>Date</th>
            <th>Time</th>
            <th>Additional</th>
            <th>Status</th>
          </tr>
       </thead>
        <tbody>
          {state.map((items,index)=>
            <tr key={index+1}>
            <td>{items.specialization}</td>
            <td>{items.hospital}</td>
            <td>{items.date}</td>
            <td>{items.time}</td>
            <td>{items.reason}</td>
          </tr>
          )}
       </tbody>
       </Table>
      </div> 
            
        </>
    )
}

export default DocAppoitments
