import React from 'react'
import { Button, Card } from 'react-bootstrap'
import login from '../../resources/imgaes/login.svg'
import './appointment.css'

function DoctorAppointmentDetails() {
    return (
        <>
        <div>
        <h3 className="appdet-head">Appointment Details</h3>
        <div className="doc-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={login}  />
                <Card.Body>
                    <Card.Title className='appdet-title'>Doctor Profile</Card.Title>
                    <Card.Text>Email</Card.Text>
                    <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem assumenda veritatis, animi quam corporis distinctiendi! Dolores, optio saepe.</Card.Text>
                    <Button className='appdet-btn' variant="primary" disabled>View Profile</Button>
                </Card.Body>
            </Card> 
          
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={login}  />
                <Card.Body>
                    <Card.Title className='appdet-title'>Patient Profile</Card.Title>
                    <Card.Text>Email</Card.Text>
                    <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem assumenda veritatis, animi quam corporis distinctiendi! Dolores, optio saepe.</Card.Text>
                    <Button className='appdet-btn' variant="primary">View Profile</Button>
                </Card.Body>
            </Card> 
            </div>
           
              <Card className="appdet-card-container">  
              <Card.Header className='doc__profile_heading appdet-card-head'>Appointment Status</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <div className='appdet-main-text'>
                <Card.Text className="appdet-div">
                 <div className="appdet-para">Appointment Confirmed : </div><p>YES</p>
                </Card.Text>
                 <Card.Text className="appdet-div">
                 <div>
                     <div className="form__group field">
                <input type="datetime-local" dateTime className="form__field" placeholder="Appointment Time Slot" name="appointmentTime" id="appointmentTime"  />
                <label for="appointmentTime" className="form__label">Appointment Time Slot</label>
              </div>
                 </div>
                </Card.Text>
                 <Card.Text className="appdet-div">
                 <div className="appdet-para">Appointment Completed : </div><p>No</p>
                </Card.Text>
                </div>
            </Card.Body>    
            </Card>    
                
        </div>
        </>
    )
}

export default DoctorAppointmentDetails
