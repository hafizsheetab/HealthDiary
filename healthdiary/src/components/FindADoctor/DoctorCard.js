import React from 'react'
import { Button, Card } from 'react-bootstrap'
import login from '../../resources/imgaes/login.svg'

function DoctorCard({doctor, history}) {
    const handleChange = (e) => {
        e.preventDefault()
        history.push(`/patient/finddoctor/${e.target.value}`)
    }
    return (
        <>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={login}  />
                <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>Email: {doctor.email}</Card.Text>
                    <Card.Text>{doctor.contactNo}</Card.Text>
                    <Card.Text>{doctor.specialization}</Card.Text>
                    <Card.Text>{doctor.qualification}</Card.Text>
                    <Button variant="primary" value={doctor._id} onClick = {handleChange}>View Profile</Button>
                </Card.Body>
            </Card> 
        </>
    )
}

export default DoctorCard

