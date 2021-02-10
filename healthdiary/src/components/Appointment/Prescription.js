import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './appointment.css';

function Prescription() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
           <Button variant="primary" onClick={handleShow}>
            Generate Prescription
      </Button>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modal-dialog modal-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
              <form className='' method="POST">
         <div>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Name" name="name" id="name" />
              <label for="name" className="form___label">Doctor's Name</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="Email" name="email" id="email"  />
              <label for="email" className="form___label">Doctor's Email</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="contactNo" name="contactNo" id="contactNo"/>
              <label for="contactNo" className="form___label">Doctor's Contact Number</label>
          </div>
          </div>
          
          <div className='doc_home'>
          
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Medicine" name="medicine" id="medicine"  />
              <label for="medicine" className="form___label">Medicine</label>
          </div>
          
              <div className="form__group field">
                <input type="checkbox" id="morning" name="morning" className="p_input"/>
                <label for="morning" className="p_label"> Morning</label>
                <input type="checkbox" id="evening" name="evening" className="p_input"/>
                <label for="evening" className="p_label">Evening</label>
                <input type="checkbox" id="night" name="night" className="p_input" />
                <label for="night" className="p_label"> Night</label>
            </div>
          </div>
          
             <div>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Name" name="name" id="name" />
              <label for="name" className="form___label">Patient's Name</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="Email" name="email" id="email"  />
              <label for="email" className="form___label">Patient's Email</label>
          </div>

           <div className="form__group field">
            <input type="text" className="form__field" placeholder="contactNo" name="contactNo" id="contactNo"/>
              <label for="contactNo" className="form___label">Patient's Contact Number</label>
          </div>
          
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Diagnosis" name="diagnosis" id="diagnosis"  />
              <label for="diagnosis" className="form___label">Diagnosis</label>
          </div>
          </div>
            
          </form>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal> 
        </>
    )
}

export default Prescription
