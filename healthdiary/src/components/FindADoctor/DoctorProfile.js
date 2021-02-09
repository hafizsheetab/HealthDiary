import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './findADoc.css'

function DoctorProfile() {
    return (
        <>
        <Card className='doc__profile'>
            <Card.Header className='doc__profile_heading'>Personal Information</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nesciunt iure ea, architecto dolorum eos ex maxime odio fugit autem similique, amet omnis officiis adipisci dicta ipsa. Officiis, ex. Iure!
                </Card.Text>
            </Card.Body>
            
             <Card.Header className='doc__profile_heading'>Qualifications</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nesciunt iure ea, architecto dolorum eos ex maxime odio fugit autem similique, amet omnis officiis adipisci dicta ipsa. Officiis, ex. Iure!
                </Card.Text>
            </Card.Body>


            <Card.Header className='doc__profile_heading'>Work Profile</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nesciunt iure ea, architecto dolorum eos ex maxime odio fugit autem similique, amet omnis officiis adipisci dicta ipsa. Officiis, ex. Iure!
                </Card.Text>
            </Card.Body>    
            </Card> 

            <div className="app_slot">
            <form method="POST">
              <div className="form__group field">
                <input type="datetime-local" dateTime className="form__field" placeholder="Appointment Time Slot" name="appointmentTime" id="appointmentTime"  />
                <label for="appointmentTime" className="form__label">Appointment Time Slot</label>
              </div>
            <Button type='submit' className="doc_profile_btn" >Book Appointment</Button>         
            </form>
        </div>

        </>
    )
}

export default DoctorProfile
