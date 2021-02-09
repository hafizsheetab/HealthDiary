import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { stringToTimeStamp, timesStampToString, timeStampToStringWithDate } from '../Utility/convertTimeStamp'
import { getToken, getUser } from '../Utility/localStorageAPI'
import './findADoc.css'

function DoctorProfile({history}) {
    let {doctorId} = useParams()
    const [appointment, setAppointment] = useState({
        time: "",
        patient: {
            user: {
                _id: getUser()._id
            }
        },
        doctor: {
            user: {
                _id: doctorId
            }
        }
    })
    const [doctor, setDoctor] = useState({
        user: {

        },
        email: "",
        contactNo: "",
        qualifications: [],
        experiences: []
    })
    const handleChange = (e) => {
        console.log(timeStampToStringWithDate(stringToTimeStamp(e.target.value)))
        setAppointment({
            ...appointment,
            time: stringToTimeStamp(e.target.value)
        })
        
        
    }
    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(timeStampToStringWithDate(appointment.time))
       axios.defaults.headers.common['x-auth-token']=getToken()
       axios.post('http://localhost:5000/api/appointment',{
           ...appointment
       }).then(function(res){
           if(res.status ===200){
               history.push('/patient/appointmenttable')
           }
       })
    }
    React.useEffect(() => {
        async function fetchData(){
            axios.defaults.headers.common['x-auth-token']=getToken()
            let response = await axios.get(`http://localhost:5000/api/doctor/getProfile/${doctorId}`)
            console.log(response.data)
            setDoctor(response.data)
        }
        fetchData()
    },[])
    return (
        <>
        <Card className='doc__profile'>
            <Card.Header className='doc__profile_heading'>Personal Information</Card.Header>
            <Card.Body>
                <Card.Title>{doctor.user.name}</Card.Title>
                <Card.Title>{doctor.user.email}</Card.Title>
                <Card.Title>{doctor.contactNo}</Card.Title>
            </Card.Body>
            
             <Card.Header className='doc__profile_heading'>Qualifications</Card.Header>
            <Table striped bordered hover>
                <tr>
                    <th>Degree Name</th>
                    <th>Degree Passing Date</th>
                </tr>
                <tbody>
                    {doctor.qualifications.map(qualification => (
                        <tr>
                        <td>
                            {qualification.name}
                        </td>
                        <td>
                            {timesStampToString(qualification.passingDate)}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            
            <Card.Header className='doc__profile_heading'>Work Profile</Card.Header>
            <Table striped bordered hover>
                <tr>
                    <th>Hospital Name</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Stil Working</th>
                </tr>
                <tbody>
                {doctor.experiences.map(experience => (
                        <tr>
                        <td>
                            {experience.hospitalName}
                        </td>
                        <td>
                            {timesStampToString(experience.duration.fromDate)}
                        </td>
                        <td>
                            {timesStampToString(experience.duration.toDate)}
                        </td>
                        <td>
                            {experience.duration.isStillWorking.toString()}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </Card> 

            <div className="app_slot">
            <form method="POST" onSubmit = {handleSubmit}>
              <div className="form__group field">
                <input type="datetime-local" dateTime className="form__field" placeholder="Appointment Time Slot" name="dateOfBirth" id="dateOfBirth" onChange = {handleChange} />
                <label for="dateOfBirth" className="form__label">Appointment Time Slot</label>
              </div>
            <Button type='submit' className="doc_profile_btn" value = {doctorId}>Book Appointment</Button>         
            </form>
        </div>

        </>
    )
}

export default DoctorProfile
