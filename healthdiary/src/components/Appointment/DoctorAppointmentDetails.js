import React, {useState} from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import login from '../../resources/imgaes/login.svg'
import './appointment.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../Utility/localStorageAPI'
import { timeStampToStringWithDate } from '../Utility/convertTimeStamp'
import { saveAs } from 'file-saver';

function DoctorAppointmentDetails({history}) {
    let {appointmentId} = useParams()
    const[medicine, setMedicine] = useState({
        name: "",
        takeMorning: false,
        takeDay: false,
        takeNight: false
    })
    const [appointment, setAppointment] = useState({
        doctor: {

        },
        patient: {

        },
        confirmed: {

        },
        completed : {
            
        },
        time: "",
        medicines: []
    })
    React.useEffect(() => {
        async function fetchAppointment(){
            axios.defaults.headers.common['x-auth-token']=getToken()
            let response = await axios.get(`http://localhost:5000/api/appointment/${appointmentId}`)
            console.log(response)
            setAppointment(response.data)
        }
        fetchAppointment()
    },[])
    const createAndDownloadPdf = () => {
        console.log(appointment)
        axios.get(`http://localhost:5000/api/prescription/${appointmentId}`, { responseType: 'blob' })
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlob, 'prescription.pdf');
          }).then(()=> {
              axios.delete('http://localhost:5000/api/prescription/')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    
    const onClickConfirm = (e) => {
        axios.defaults.headers.common['x-auth-token']=getToken()
        axios.put(`http://localhost:5000/api/appointment/${appointmentId}/confirm`).then(function(response){
            setAppointment(response.data)
        })
    }
    const onClickComplete= (e) => {
        axios.defaults.headers.common['x-auth-token']=getToken()
        axios.put(`http://localhost:5000/api/appointment/${appointmentId}/complete`).then(function(response){
            setAppointment(response.data)
        })
    }
    const handleChangeCheckBox = (e) => {
        e.target.checked ? setMedicine({...medicine,[e.target.name]:true}) : setMedicine({...medicine,[e.target.name]:false})
      }

      const handleChange = (e) => {
        setMedicine({...medicine,[e.target.name]:e.target.value})
      }
    
    const handleClickLiveChat = (e) => {
        history.push(`/messages/${e.target.value}`)
    }
    const deleteMedicine = (e) => {
        axios.defaults.headers.common['x-auth-token']=getToken()
        axios.delete(`http://localhost:5000/api/appointment/${appointmentId}/medicines/${e.target.value}`).then(function(response){
            setAppointment({...appointment,medicines:response.data})
        })
    
      }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.defaults.headers.common['x-auth-token']=getToken()
        axios.post(`http://localhost:5000/api/appointment/${appointmentId}/medicines`,{
            ...medicine
        }).then(function(response){
            setAppointment({...appointment,medicines:response.data})
        })
        console.log(medicine)
      }
    return (
        <>
        <div>
        <h3 className="appdet-head">Appointment Details</h3>
        <div className="doc-card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6I0YyRjJGMjsiIGQ9Ik01MTIsNDM0LjAxNnY3Ny4wMTNIMHYtNzcuMDEzYzAtMjAuMzczLDEyLjQ4LTM4LjczMSwzMS40NTYtNDYuMDhsMTA3Ljk1Ny00Mi40NTNsODQuMjY3LDkyLjU5Nw0KCWwyNi40NDMtNTMuODY3di0wLjEwN0wyNTYsMzcyLjA0M2w1Ljk4NCwxMi4wNjRsMjYuNDUzLDUzLjk3M2w4NC4xNDktOTIuNTk3bDEwOC4wNjQsNDIuNDUzDQoJQzQ5OS41MiwzOTUuNDAzLDUxMiw0MTMuNjQzLDUxMiw0MzQuMDE2Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjhCNjRDOyIgZD0iTTMzMS41MiwzMjkuNDgzaDAuMTA3di00My44NGMtNS42LDguNDkxLTEyLjEwNywxNy4xMDktMTkuNjY5LDI1LjcyOGwtMTAuNDUzLDExLjUyDQoJYy05LjYsMTAuNDQzLTIzLjI1MywxNi41MzMtMzcuNDQsMTYuNTMzaC0xNmMtMTQuMTg3LDAtMjcuODUxLTYuMDgtMzcuNDQtMTYuNTMzbC0xMC40NTMtMTEuNTINCgljLTcuNjQ4LTguNjkzLTE0LjIyOS0xNy40MjktMTkuODUxLTI2LjAwNXY0NC4wNDNsMC4xNzEsMC4wODVsNjUuODEzLDM3LjEybDkuNzA3LDUuNDRsOS43MDctNS40NEwzMzEuNTIsMzI5LjQ4M3oiLz4NCjxnIHN0eWxlPSJvcGFjaXR5OjAuMTsiPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNDA1OTZCOyIgZD0iTTIyOS4wMjQsMzM1LjUyYy0wLjA2NC0wLjAyMS0wLjEyOC0wLjA0My0wLjE5Mi0wLjA2NGMtMC4xMDctMC4wNDMtMC4yMjQtMC4wNzUtMC4zMzEtMC4xMDcNCgkJCWMtMC4xMDctMC4wNTMtMC4yMjQtMC4wNjQtMC4zNzMtMC4xMTdsNDAuMjI0LDI5Ljg3N2w2My4xNjgtMzUuNjI3aDAuMDY0bDAuMDQzLTQzLjYxNmMtMC4xMDcsMC4xNi0xNC45OTcsMTkuNjY5LTE5LjY2OSwyNS40ODMNCgkJCWwtMTAuNDUzLDExLjUzMWMtOS42LDEwLjQ0My0yMy4yNTMsMTYuNTMzLTM3LjQ0LDE2LjUzM2gtMTZjLTMuMjMyLDAtNi40LTAuMzUyLTkuNTA0LTEuMDEzDQoJCQlDMjM1LjI3NSwzMzcuNzcxLDIzMi4xMDcsMzM2Ljc4OSwyMjkuMDI0LDMzNS41MiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOEI2NEM7IiBkPSJNMTgxLjE0MSwxOTYuMzA5YzEuNjY0LDE5LjE0Ny03LjYyNywzNS42MDUtMjAuNzQ3LDM2LjczNg0KCQljLTEzLjE0MSwxLjE1Mi0yNS4xNDEtMTMuNDUxLTI2LjgzNy0zMi41OTdjLTEuNjY0LTE5LjE0Nyw3LjYyNy0zNS41ODQsMjAuNzY4LTM2LjczNg0KCQlDMTY3LjQ1NiwxNjIuNTYsMTc5LjQ3NywxNzcuMTUyLDE4MS4xNDEsMTk2LjMwOSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOEI2NEM7IiBkPSJNMzc4LjUzOSwyMDAuNDY5Yy0xLjY2NCwxOS4xNDctMTMuNjg1LDMzLjczOS0yNi44MTYsMzIuNTg3DQoJCWMtMTMuMTQxLTEuMTUyLTIyLjQ0My0xNy41ODktMjAuNzQ3LTM2LjczNmMxLjY2NC0xOS4xNDcsMTMuNjg1LTMzLjc0OSwyNi44MTYtMzIuNTk3DQoJCUMzNzAuOTMzLDE2NC44NTMsMzgwLjIyNCwxODEuMzEyLDM3OC41MzksMjAwLjQ2OSIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDE1QzsiIGQ9Ik0zNjQuODUzLDE5Ni4zNzNjLTIuMDE2LDIxLjQ0LTEyLjE3MSw2OC42ODMtNTIuODk2LDExNC45NzZsLTEwLjQ1MywxMS41Mg0KCWMtOS42LDEwLjQ1My0yMy4yNTMsMTYuNTQ0LTM3LjQ0LDE2LjU0NGgtMTZjLTE0LjE4NywwLTI3Ljg1MS02LjA4LTM3LjQ0LTE2LjU0NGwtMTAuNDUzLTExLjUyDQoJYy00MC43NDctNDYuMjkzLTUwLjc3My05My41NDctNTIuOTE3LTExNC45NzZjLTIuODgtMjkuNTQ3LTEuNzA3LTY3LjA5MywwLTc2LjhjOS43MDctNTYuODUzLDU4LjM1Ny05Mi4xNiwxMDguODExLTkyLjE2DQoJYzUwLjQ0MywwLDk5LjA4MywzNS4zMDcsMTA4Ljc4OSw5Mi4xNkMzNjYuNTYsMTI5LjI4LDM2Ny43MzMsMTY2LjgzNywzNjQuODUzLDE5Ni4zNzMiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM0MDU5NkI7IiBkPSJNMTcyLjg5Niw1NC4zNjhjMCwwLDAuNzQ3LTcxLjgxOSwxMDUuMTYzLTQ4Ljg3NWMwLDAsNTEuODA4LDE2LjI3Nyw4NS4xNDEsNjQuNDI3DQoJYzAsMCwzMS4yNzUsNDUuNDE5LDE0LjI3Miw4My42MjdjLTUuNTI1LDEyLjQwNS0xMS40NTYsMjYuNjAzLTEwLjc3MywzOC4wMDVjMCwwLTUuNzkyLTI0LjIwMy05LjI0OC00NC4zNzMNCgljLTIuODkxLTE2Ljg5Ni0xMC4xNjUtMzIuNzI1LTIxLjMzMy00NS43MTdsLTAuMzMxLTAuMzk1Yy0xOC4wOC0yMC45MzktNDYuMzc5LTMwLjczMS03My4xNDEtMjMuODI5DQoJYy0xMi43NjgsMy4yOTYtMjcuMjk2LDkuNzI4LTQzLjI3NSwyMS4xMzFjMCwwLTQzLjQ5OS0yOS4xOTUtNjUuMDAzLDIxLjkwOWMwLDAtOS41NzksMzcuMzU1LTguMjI0LDY2Ljg1OQ0KCUMxNDYuMTQ0LDE4Ny4xMjUsODYuMjcyLDYxLjc3MSwxNzIuODk2LDU0LjM2OCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0FDQjNCQTsiIGQ9Ik0zOTguNjAzLDM3NS4zNDljLTAuMjEzLTEuODEzLTAuNjI5LTE4LjQ0My00LjA0My0yNS4xNjNjLTUuNzcxLTExLjMxNy0xNi4xMDctMTguODgtMjguNTg3LTIwLjgNCglsLTM0LjM0Ny02LjkzM3Y3LjA0aC0wLjEwN2wtNC45MTcsMi43NzNsMzcuNjY0LDcuNjhjOS4wNjcsMS4zODcsMTYuNjUxLDYuODI3LDIwLjY5MywxNS4wMjkNCgljMi42NjcsNS4yMjcsMy43NTUsMTAuODkxLDIuODkxLDE2LjQzN2wtMC4yMjQsMi43NzNjLTQ1LjEyLDM5LjE0Ny01Ny45Miw3NC40NTMtNTguNDUzLDc2LjA1Mw0KCWMtMy4zOTIsMTAuMTMzLTMuMTg5LDE4LjEzMywwLjU0NCwyMy44OTNjNC4xNzEsNi41MDcsMTAuOTc2LDcuMjUzLDExLjgyOSw3LjM2bDEuMDY3LTEwLjY2N2MtMC4xMDcsMC0yLjY2Ny0wLjQzNy00LjA0My0yLjY2Nw0KCWMtMS43MDctMi43ODQtMS41MDQtNy44OTMsMC43NDctMTQuNDExYzAuMTA3LTAuMjI0LDYuNC0xNy41ODksMjUuNi00MS4wNzdjNS4zMzMtMi42NjcsMTEuMjk2LTMuMTg5LDE3LjA2Ny0xLjQ5Mw0KCWM1LjU0NywxLjcwNywxMC4yMjksNS40NTEsMTMuMTIsMTAuNDQzYzIuMTIzLDMwLjgzNy0yLjU2LDQ4Ljk3MS0yLjY2Nyw0OS4wNzdjLTIuMDM3LDYuNjEzLTQuODExLDEwLjk4Ny03Ljg5MywxMi4xNg0KCWMtMi40NTMsMS4wNzctNC43MDQtMC4xMDctNC43MDQtMC4yMTNsLTIuNjY3LDQuNjgzbC0yLjc3Myw0LjYxOWMwLjQzNywwLjMyLDMuNzMzLDIuMTMzLDguMTA3LDIuMTMzDQoJYzEuODEzLDAsMy43NTUtMC4zMiw1Ljc3MS0xLjE3M2M2LjQtMi40NDMsMTEuMzE3LTguODUzLDE0LjQ5Ni0xOS4wOTNDNDAzLjIxMSw0NzIuMjEzLDQxMy4xMiw0MzQuOTc2LDM5OC42MDMsMzc1LjM0OQ0KCSBNMzg0LjQzNyw0MDIuOTc2Yy0zLjIxMS0wLjk2LTYuNjI0LTEuMzc2LTkuODM1LTEuMjY5YzQuNjA4LTUuMDI0LDkuNzA3LTEwLjEzMywxNS40NzctMTUuMzQ5DQoJYzEuNiw3LjQ1NiwyLjc3MywxNC42MDMsMy42MjcsMjEuMzMzQzM5MC45MzMsNDA1LjY0MywzODcuODI5LDQwNC4wNTMsMzg0LjQzNyw0MDIuOTc2Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjhCNjRDOyIgZD0iTTM1MC45MzMsNDc4LjAzN2MtMC44NTMsNC4yODgtNS4wMjQsNy4wODMtOS4zMTIsNi4yNGMtNC4yNjctMC44NDMtMS4yMjctMTYuMzg0LDMuMDYxLTE1LjU0MQ0KCQlDMzQ4Ljk3MSw0NjkuNTc5LDM1MS43NzYsNDczLjc0OSwzNTAuOTMzLDQ3OC4wMzciLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjhCNjRDOyIgZD0iTTM2OC4yMjQsNDgzLjM3MWMtMS44MTMsMy45NzktMC4wODUsOC42NzIsMy44OTMsMTAuNDk2YzMuOTc5LDEuODI0LDEwLjU4MS0xMi41NjUsNi42MDMtMTQuNA0KCQlDMzc0Ljc3Myw0NzcuNjQzLDM3MC4wNTksNDc5LjM5MiwzNjguMjI0LDQ4My4zNzEiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNBQ0IzQkE7IiBkPSJNMTgwLjQ4LDMyOS40ODNsLTAuMTcxLTAuMDg1di02Ljk1NWwtMjMuMDYxLDQuNzQ3Yy0yNC42MDgsNS4wNjctNDUuMzEyLDIwLjc2OC01Ni44NTMsNDMuMDYxDQoJYy0xMS41MiwyMi4zMTUtMTIuMzUyLDQ4LjI5OS0yLjI1MSw3MS4yOTZsOS43NzEtNC4yODhjLTguNzg5LTIwLjAzMi04LjEwNy00Mi42NTYsMS45NjMtNjIuMTAxDQoJYzEwLjAzNy0xOS40MTMsMjguMDg1LTMzLjA5OSw0OS41MDQtMzcuNTA0bDI2LjA1OS01LjM2NUwxODAuNDgsMzI5LjQ4M3oiLz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDREQ2RTA7IiBwb2ludHM9IjM3Mi41ODcsMzQ1LjQ4MyAyOTMuODc3LDQ0OC43MzYgMjU2LDM3Mi4wNDMgMjY1LjcwNywzNjYuNjAzIDMzMS41MiwzMjkuNDgzIA0KCQkzMzEuNjI3LDMyOS40ODMgMzMxLjczMywzMjkuMzc2IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojQ0RENkUwOyIgcG9pbnRzPSIxMzkuNDEzLDM0NS40ODMgMjE4LjI1MSw0NDguNzM2IDI1NiwzNzIuMDQzIDI0Ni4yOTMsMzY2LjYwMyAxODAuNDgsMzI5LjQ4MyANCgkJMTgwLjI2NywzMjkuMzc2IAkiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiMzMzRBNUU7IiBwb2ludHM9IjIxOC4yNTEsNTExLjAyOSAyMzkuNzg3LDQ2MS45NjMgMjMwLjQ5Niw0NDguMzA5IDIyMy42OTEsNDM4LjA2OSAyNTAuMTIzLDM4NC4xMDcgDQoJMjU2LDM3Mi4wNDMgMjYxLjk4NCwzODQuMTA3IDI2MS45ODQsMzg0LjIxMyAyODguNDM3LDQzOC4wNjkgMjgxLjUwNCw0NDguMjEzIDI3Mi4yMTMsNDYxLjk2MyAyOTMuODc3LDUxMS4wMjkgIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojMkE0MzU2OyIgcG9pbnRzPSIyODguNDM3LDQzOC4wNjkgMjgxLjUwNCw0NDguMjEzIDI1Ni4xMDcsMzk2LjI1NiAyMzAuNDk2LDQ0OC4zMDkgMjIzLjY5MSw0MzguMDY5IA0KCTI1MC4xMjMsMzg0LjEwNyAyNTYsMzcyLjA0MyAyNjEuOTg0LDM4NC4xMDcgMjYxLjk4NCwzODQuMjEzICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGNzA1ODsiIGQ9Ik0xMzUuMTA0LDQ1OC4yNTFjMCwxMy4zMzMtMTAuODM3LDI0LjE2LTI0LjE3MSwyNC4xNnMtMjQuMTQ5LTEwLjgyNy0yNC4xNDktMjQuMTYNCgljMC0xMy4zMzMsMTAuODE2LTI0LjE0OSwyNC4xNDktMjQuMTQ5UzEzNS4xMDQsNDQ0LjkxNywxMzUuMTA0LDQ1OC4yNTEiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMkYyRjI7IiBkPSJNMTI3LjE2OCw0NTguMjUxYzAsOC45Ni03LjI1MywxNi4yMjQtMTYuMjEzLDE2LjIyNGMtOC45ODEsMC0xNi4yNDUtNy4yNzUtMTYuMjQ1LTE2LjIyNA0KCXM3LjI3NS0xNi4yMjQsMTYuMjQ1LTE2LjIyNEMxMTkuOTE1LDQ0Mi4wMjcsMTI3LjE2OCw0NDkuMjkxLDEyNy4xNjgsNDU4LjI1MSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0FDQjNCQTsiIGQ9Ik0xMjIuMzE1LDQ1OC4yNTFjMCw2LjI5My01LjA4OCwxMS4zNzEtMTEuMzQ5LDExLjM3MWMtNi4yOTMsMC0xMS4zOTItNS4wODgtMTEuMzkyLTExLjM3MQ0KCWMwLTYuMjcyLDUuMTA5LTExLjM2LDExLjM5Mi0xMS4zNkMxMTcuMjI3LDQ0Ni44OTEsMTIyLjMxNSw0NTEuOTc5LDEyMi4zMTUsNDU4LjI1MSIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="  />
                <Card.Body>
                    <Card.Title className='appdet-title'>{appointment.doctor.name}</Card.Title>
                    <Card.Text>{appointment.doctor.email}</Card.Text>
                    <Button className='appdet-btn' variant="primary" value = {appointment.doctor._id}>View Profile</Button>
                </Card.Body>
            </Card> 
          
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTIyNy42MTEgODYuNDc5aDIzMS4xNjR2OTAuNzM1aC0yMzEuMTY0eiIgZmlsbD0iIzY4OGQ5NyIvPjxwYXRoIGQ9Im00OTMuODE1IDQzNy44MDl2NjMuODg5YzAgNS42OS00LjYxMiAxMC4zMDItMTAuMzAyIDEwLjMwMmgtMjgwLjY0MWMtNS42OSAwLTEwLjMwMi00LjYxMi0xMC4zMDItMTAuMzAydi02My44ODljMC03MS4zNjMgNTcuODUxLTEyOS4yMTUgMTI5LjIxNS0xMjkuMjE1aDQyLjgxNWM3MS4zNjMgMCAxMjkuMjE1IDU3Ljg1MiAxMjkuMjE1IDEyOS4yMTV6IiBmaWxsPSIjMjFjMWY4Ii8+PGc+PHBhdGggZD0ibTQ0Mi43IDQyNC4xNTZ2ODcuODQ0aC0xNS40NTN2LTg3Ljg0NGMwLTQuMjY1IDMuNDYyLTcuNzI2IDcuNzI2LTcuNzI2IDQuMjY2IDAgNy43MjcgMy40NjEgNy43MjcgNy43MjZ6IiBmaWxsPSIjMWZhYWVlIi8+PC9nPjxnPjxwYXRoIGQ9Im0yNTkuMTQyIDQyNC4xNTZ2ODcuODQ0aC0xNS40NTN2LTg3Ljg0NGMwLTQuMjY1IDMuNDUxLTcuNzI2IDcuNzI2LTcuNzI2IDQuMjY2IDAgNy43MjcgMy40NjEgNy43MjcgNy43MjZ6IiBmaWxsPSIjMWZhYWVlIi8+PC9nPjxwYXRoIGQ9Im00OTMuODE2IDQzNy44MTN2NjMuODgxYzAgNS42OS00LjYxMiAxMC4zMDItMTAuMzAyIDEwLjMwMmgtMjQuNjA2di03NC4xODNjMC03MS4zNjYtNTcuODUyLTEyOS4yMTgtMTI5LjIwOC0xMjkuMjE4aDM0Ljg5OGM3MS4zNjUtLjAwMSAxMjkuMjE4IDU3Ljg1MiAxMjkuMjE4IDEyOS4yMTh6IiBmaWxsPSIjMWZhYWVlIi8+PHBhdGggZD0ibTM3MC42MDEgMjc3LjY3djQ4Ljc2N2MwIDE1LjEzMy0xMi4yNzQgMjcuNDA2LTI3LjQwNiAyNy40MDYtMTUuMTQ0IDAtMjcuNDE4LTEyLjI3NC0yNy40MTgtMjcuNDA2di00OC43Njd6IiBmaWxsPSIjZmRiMGEwIi8+PGcgZmlsbD0iI2Y5YTA4ZiI+PHBhdGggZD0ibTM3MC42MDEgMjc3LjY3djM2Ljc3Yy04LjI5MiAzLjc0My0xNy41ODMgNS44NDItMjcuNDA2IDUuODQyLTkuODI0IDAtMTkuMTI1LTIuMDk5LTI3LjQxOC01Ljg0MnYtMzYuNzd6Ii8+PGNpcmNsZSBjeD0iNDQyLjU3NSIgY3k9IjE4MC4xNDciIHI9IjMxLjM5MiIvPjxjaXJjbGUgY3g9IjI0My44MSIgY3k9IjE4MC4xNDciIHI9IjMxLjM5MiIvPjwvZz48cGF0aCBkPSJtNDMzLjY5OCAxMzguODgydjYwLjMwM2MwIDQ5LjkwOS0zOS45MTcgOTEuMjU3LTg5LjgyNiA5MS42MzgtNTAuMy4zNjEtOTEuMTk1LTQwLjI4Ny05MS4xOTUtOTAuNTA1di02MS40MzZjMC00OS45OTEgNDAuNTM1LTkwLjUwNSA5MC41MTYtOTAuNTA1IDI1LjAwMSAwIDQ3LjYyMiAxMC4xMjYgNjQuMDAxIDI2LjUwNSAxNi4zNjggMTYuMzg5IDI2LjUwNCAzOS4wMSAyNi41MDQgNjR6IiBmaWxsPSIjZmRiMGEwIi8+PHBhdGggZD0ibTQzMy42OTggMTM4Ljg4MnYxMy4xNjVjLTcuMjYyIDIuMzgtMTQuOTg4IDMuNjM2LTIyLjk0IDMuNjM2aC0xMzUuMTJjLTcuOTUyIDAtMTUuNjc4LTEuMjY3LTIyLjk2MS0zLjY0N3YtMTMuMTU0YzAtNDkuOTkxIDQwLjUzNS05MC41MDUgOTAuNTE2LTkwLjUwNSAyNS4wMDEgMCA0Ny42MjIgMTAuMTI2IDY0LjAwMSAyNi41MDUgMTYuMzY4IDE2LjM4OSAyNi41MDQgMzkuMDEgMjYuNTA0IDY0eiIgZmlsbD0iI2Y5YTA4ZiIvPjxwYXRoIGQ9Im0zMDUuMzUyIDBjLTM5LjczMiAwLTc0LjEwNiAyOC4zMDQtODEuMDE0IDY3LjQzMS0uNTIxIDIuOTUyLS45NDggNS45NDQtMS4yNzcgOC45Ny0uOTU2IDguODAzLjMwMSAxNy43MSAzLjY3MSAyNS44OTlsLjAxMi4wMjljOC4xNTQgMTkuODE2IDI3LjQ2NCAzMi43NTEgNDguODkyIDMyLjc1MWgxMzUuMTI1YzIxLjQ1MSAwIDQwLjc3Ni0xMi45NjEgNDguOTE2LTMyLjgwOCAzLjM1Mi04LjE3NCA0LjYtMTcuMDU5IDMuNjQ4LTI1Ljg0Mi0uMzI5LTMuMDM2LS43NTctNi4wMzctMS4yOC04Ljk5OC02LjkwOC0zOS4xMjctNDEuMjgyLTY3LjQzMi04MS4wMTQtNjcuNDMyeiIgZmlsbD0iIzNmNTk1OSIvPjxwYXRoIGQ9Im00NjMuNjMzIDgyLjE2NWMwIDYuODgxLTEuMzM5IDEzLjcxMS0zLjk1NSAyMC4xMDgtOC4xMzggMTkuODUtMjcuNDYzIDMyLjgwOS00OC45MiAzMi44MDloLTMyLjIwMWMyMS40NTcgMCA0MC43ODItMTIuOTU5IDQ4LjkyLTMyLjgwOSAyLjYxNi02LjM5NyAzLjk1NS0xMy4yMjYgMy45NTUtMjAuMTA4IDAtMS45MDYtLjEwMy0zLjgyMi0uMzA5LTUuNzM4LS4zMy0zLjAyOC0uNzUyLTYuMDM3LTEuMjc3LTguOTkzLTYuOTEyLTM5LjEzNC00MS4yODctNjcuNDMxLTgxLjAxOC02Ny40MzFoMzIuMjAxYzM5LjczMSAwIDc0LjEwNiAyOC4yOTcgODEuMDE4IDY3LjQzMS41MjUgMi45NTYuOTQ4IDUuOTY0IDEuMjc3IDguOTkzLjIwNiAxLjkxNi4zMDkgMy44MzIuMzA5IDUuNzM4eiIgZmlsbD0iIzM4NDg0OCIvPjxwYXRoIGQ9Im0xMzMuMDc5IDQ1Ni4xMTdoLTI0LjY5N2MtNS42OSAwLTEwLjMwMi00LjYxMi0xMC4zMDItMTAuMzAydi0yNC42OTdjMC01LjY5IDQuNjEyLTEwLjMwMiAxMC4zMDItMTAuMzAyaDI0LjY5N2M1LjY5IDAgMTAuMzAyIDQuNjEyIDEwLjMwMiAxMC4zMDJ2MjQuNjk3Yy0uMDAxIDUuNjktNC42MTMgMTAuMzAyLTEwLjMwMiAxMC4zMDJ6IiBmaWxsPSIjMjRkMWY4Ii8+PHBhdGggZD0ibTE0My4zNzggNDIxLjExNnYyNC43MDRjMCA1LjY4Ny00LjYwNSAxMC4zMDItMTAuMzAyIDEwLjMwMmgtMjIuNjQzYzUuNjg3IDAgMTAuMzAyLTQuNjE1IDEwLjMwMi0xMC4zMDJ2LTI0LjcwNGMwLTUuNjg3LTQuNjE1LTEwLjMwMi0xMC4zMDItMTAuMzAyaDIyLjY0M2M1LjY5NyAwIDEwLjMwMiA0LjYxNSAxMC4zMDIgMTAuMzAyeiIgZmlsbD0iIzIxYzFmOCIvPjxwYXRoIGQ9Im0xMDMuMDYzIDI0MS4xODdjLS44MjQuMjYyLTEuNzE0LjI2Mi0yLjUzOCAwLTIxLjcxNi02LjkwNi0zOC42My0xOC41ODQtNTAuMzM1LTM0Ljc3Mi0yLjIxMi0zLjA2LTQuMDQ3LTYuMDM0LTUuNTYtOC44MDEtNC4xMjctNy41NDgtNi4yMzItMTYuMDM1LTYuMjMyLTI0LjYzN3YtNjQuMTg5YzAtMS45NDQgMS4zMjktMy42MzYgMy4yMTgtNC4wOTZsNTkuMTgtMTQuNDEyYy42NTUtLjE2IDEuMzQtLjE2IDEuOTk1IDBsNTkuMTggMTQuNDEyYzEuODg5LjQ2IDMuMjE4IDIuMTUyIDMuMjE4IDQuMDk2djcwLjQyYzAgMi41MjEtLjQyNCA1LjAyMi0xLjI2OSA3LjM5Ny0xLjY2NSA0LjY4NS00Ljg1IDExLjk2NS0xMC41MjQgMTkuODExLTExLjcwMyAxNi4xODctMjguNjE3IDI3Ljg2NS01MC4zMzMgMzQuNzcxeiIgZmlsbD0iIzMxYTdmYiIvPjxwYXRoIGQ9Im0xNjUuMTg1IDEwOC43ODd2NzAuNDIzYzAgMi41MTQtLjQyMiA1LjAxNy0xLjI2NyA3LjM5Ny0xLjY1OSA0LjY3Ny00Ljg0MiAxMS45Ni0xMC41MTggMTkuODEtMTEuNzAzIDE2LjE4NC0yOC42MTggMjcuODY2LTUwLjMzNSAzNC43NjktLjgyNC4yNTgtMS43Mi4yNTgtMi41NDUgMC03LjE5MS0yLjI4Ny0xMy44NTYtNS4xLTE5Ljk3NS04LjQyNyAyMC4zNDYtNi45OTUgMzYuMjgzLTE4LjM0OCA0Ny40Ni0zMy44MSA1LjY3Ni03Ljg1IDguODYtMTUuMTIzIDEwLjUyOC0xOS44MS44NDUtMi4zOCAxLjI2Ny00Ljg4MyAxLjI2Ny03LjM5N3YtNzAuNDIzYzAtLjc5My0uMjE2LTEuNTM1LS41OTctMi4xNzRsMjIuNzY3IDUuNTQzYzEuODg2LjQ2MyAzLjIxNSAyLjE1MiAzLjIxNSA0LjA5OXoiIGZpbGw9IiMxYzk2ZjkiLz48Zz48cGF0aCBkPSJtMzg1Ljg0NCAxNzAuMDE2LS4wODgtLjAwMWMtLjAzLS4wMDEtLjA2LS4wMDEtLjA5MS0uMDAxLTQuMjI0IDAtNy42MzIgMy40MDEtNy42OCA3LjYzOC0uMDQ5IDQuMjY3IDMuNDEzIDcuNzY3IDcuNjgxIDcuODE1LjAzLjAwMS4wNi4wMDEuMDkxLjAwMSA0LjIyNSAwIDcuNjc1LTMuNDAxIDcuNzIzLTcuNjM4LjA1LTQuMjY3LTMuMzY4LTcuNzY2LTcuNjM2LTcuODE0eiIgZmlsbD0iIzNmNTk1OSIvPjxwYXRoIGQ9Im0zMDAuNzE1IDE3MC4wMTVoLS4wODZjLTQuMjY4IDAtNy42ODQgMy40NTktNy42ODQgNy43MjYgMCA0LjI2OCAzLjUwMiA3LjcyNiA3Ljc3IDcuNzI2czcuNzI2LTMuNDU5IDcuNzI2LTcuNzI2Yy4wMDEtNC4yNjctMy40NTgtNy43MjYtNy43MjYtNy43MjZ6IiBmaWxsPSIjM2Y1OTU5Ii8+PHBhdGggZD0ibTE2OS41ODEgMjc0LjE0NWMtMS40NS0xLjQ0OS0zLjQxNC0yLjI2My01LjQ2NC0yLjI2M2gtMTM4LjIwNmMtNC4yNjggMC03LjcyNiAzLjQ1OS03LjcyNiA3LjcyNnMzLjQ1OSA3LjcyNiA3LjcyNiA3LjcyNmgxMzUuMDA2bDcyLjk4NSA3Mi45ODdjMS41MDkgMS41MDggMy40ODYgMi4yNjMgNS40NjQgMi4yNjMgMS45NzcgMCAzLjk1NS0uNzU1IDUuNDY0LTIuMjYzIDMuMDE3LTMuMDE4IDMuMDE3LTcuOTA5IDAtMTAuOTI4eiIgZmlsbD0iI2VmZjVmNiIvPjxwYXRoIGQ9Im0xNDMuNzAxIDMwOS41MDdoLTk3LjcyMmMtNC4yNjggMC03LjcyNiAzLjQ1OS03LjcyNiA3LjcyNnMzLjQ1OSA3LjcyNiA3LjcyNiA3LjcyNmg5Ny43MjJjNC4yNjggMCA3LjcyNi0zLjQ1OSA3LjcyNi03LjcyNnMtMy40NTgtNy43MjYtNy43MjYtNy43MjZ6IiBmaWxsPSIjMjFjMWY4Ii8+PHBhdGggZD0ibTE0My43MDEgMzM2LjYzNmgtNTUuNjcxYy00LjI2OCAwLTcuNzI2IDMuNDU5LTcuNzI2IDcuNzI2czMuNDU5IDcuNzI2IDcuNzI2IDcuNzI2aDU1LjY3MWM0LjI2OCAwIDcuNzI2LTMuNDU5IDcuNzI2LTcuNzI2cy0zLjQ1OC03LjcyNi03LjcyNi03LjcyNnoiIGZpbGw9IiM3ZGEyYjAiLz48cGF0aCBkPSJtMTQzLjcwMSAzNjMuNzY0aC01NS42NzFjLTQuMjY4IDAtNy43MjYgMy40NTktNy43MjYgNy43MjZzMy40NTkgNy43MjYgNy43MjYgNy43MjZoNTUuNjcxYzQuMjY4IDAgNy43MjYtMy40NTkgNy43MjYtNy43MjZzLTMuNDU4LTcuNzI2LTcuNzI2LTcuNzI2eiIgZmlsbD0iIzdkYTJiMCIvPjxwYXRoIGQ9Im04My4xNzcgMTY5LjI1N2gxMC44OXYxMC44OWMwIDQuMjY4IDMuNDU5IDcuNzI2IDcuNzI2IDcuNzI2IDQuMjY4IDAgNy43MjYtMy40NTkgNy43MjYtNy43MjZ2LTEwLjg5aDEwLjg5YzQuMjY4IDAgNy43MjYtMy40NTkgNy43MjYtNy43MjZzLTMuNDU5LTcuNzI2LTcuNzI2LTcuNzI2aC0xMC44OXYtMTAuODljMC00LjI2OC0zLjQ1OS03LjcyNi03LjcyNi03LjcyNi00LjI2OCAwLTcuNzI2IDMuNDU5LTcuNzI2IDcuNzI2djEwLjg5aC0xMC44OWMtNC4yNjggMC03LjcyNiAzLjQ1OS03LjcyNiA3LjcyNnMzLjQ1OSA3LjcyNiA3LjcyNiA3LjcyNnoiIGZpbGw9IiNlZmY1ZjYiLz48cGF0aCBkPSJtMzY5Ljg1NCAyMTQuMjkxYy00LjI3Ny0uMTQyLTcuODQ2IDMuMTc4LTggNy40NDMtLjM2NCAxMC4wOTItOC41NjMgMTcuOTk3LTE4LjY2NiAxNy45OTctMTAuMTA0IDAtMTguMzAzLTcuOTA0LTE4LjY2Ni0xNy45OTYtLjE1My00LjI2NS0zLjczNy03LjYwMi03Ljk5OS03LjQ0NC00LjI2NS4xNTQtNy41OTggMy43MzUtNy40NDQgNy45OTkuNjY0IDE4LjQ0NSAxNS42NDYgMzIuODkzIDM0LjEwOSAzMi44OTMgMTguNDYxIDAgMzMuNDQ0LTE0LjQ0OCAzNC4xMDktMzIuODkyLjE1NC00LjI2NS0zLjE3OC03Ljg0Ni03LjQ0My04eiIgZmlsbD0iI2ZjN2M2YSIvPjwvZz48L2c+PC9zdmc+"   />
                <Card.Body>
                    <Card.Title className='appdet-title'>{appointment.patient.name}</Card.Title>
                    <Card.Text>{appointment.patient.email}</Card.Text>
                </Card.Body>
            </Card> 
            </div>
           
              <Card className="appdet-card-container">  
              <Card.Header className='doc__profile_heading appdet-card-head'>Appointment Status</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <div className='appdet-main-text'>
                <Card.Text className="appdet-div">
                 <div className="appdet-para">Appointment Confirmed : </div><p>{appointment.confirmed.status ? (<p>Yes</p>) : (<p> No    <Button className='appdet-btn' variant="primary" onClick = {onClickConfirm}>Confirm</Button></p>)}</p>
                </Card.Text>
                 <Card.Text className="appdet-div">
                 <div>
                     <div className="form__group field">
                <input type="datetime-local" dateTime className="form__field" placeholder="Appointment Time Slot" name="appointmentTime" id="appointmentTime" value = {timeStampToStringWithDate(appointment.time)} />
                <label for="appointmentTime" className="form__label">Appointment Time Slot</label>
              </div>
                 </div>
                </Card.Text>
                 <Card.Text className="appdet-div">
                 <div className="appdet-para">Appointment Completed : </div><p>{appointment.completed.status ? (<p>Yes</p>) : (<p> No    <Button className='appdet-btn' variant="primary" onClick = {onClickComplete}>Complete</Button></p>)}</p>
                </Card.Text>
                <Button className='appdet-btn' variant="primary" value = {appointment.patient._id} onClick = {handleClickLiveChat}>Start Live Chat</Button>
                </div>
            </Card.Body>    
            </Card> 
            
            <form method="POST" onSubmit = {handleFormSubmit} >
            <div className="edu_data">
            <div class="form__group field edu_data_item">
                                <input type="text" className="form__field" placeholder="hospitalName" name="name" id="hospitalName" value = {medicine.name} onChange = {handleChange} />
                    <label for="hospitalName" className="form___label">Medicine Name</label>
                </div>
                <div class="form__group field edu_data_item">
                    <input type="checkbox" className="form__field" placeholder=" Still isStillWorking" name="takeMorning" id="isStillWorking" onChange = {handleChangeCheckBox} />
                    <label for="isStillWorking" className="form___label">Take In The Morning</label>
                </div>  
                <div class="form__group field edu_data_item">
                    <input type="checkbox" className="form__field" placeholder=" Still isStillWorking" name="takeDay" id="isStillWorking" onChange = {handleChangeCheckBox} />
                    <label for="isStillWorking" className="form___label">Take In The Day</label>
                </div>  
                <div class="form__group field edu_data_item">
                    <input type="checkbox" className="form__field" placeholder=" Still isStillWorking" name="takeNight" id="isStillWorking" onChange = {handleChangeCheckBox} />
                    <label for="isStillWorking" className="form___label">Take in the Night</label>
                </div> 
                </div>
                <button type="submit" className="button doc_app_btn edu_btn">ADD</button> 
            </form>
            <Table striped bordered hover>
                <tr>
                <th>Medicine Name</th>
                <th>Morning</th>
                <th>Day</th>
                <th>Night</th> 
                <th>Delete</th>   
                </tr>
                {appointment.medicines.map(medicine => (
                    <tr>
                        <td>{medicine.name}</td>
                        <td>{medicine.takeMorning ? (<p>Yes</p>): (<p>No</p>)}</td>
                        <td>{medicine.takeDay ? (<p>Yes</p>): (<p>No</p>)}</td>
                        <td>{medicine.takeNight ? (<p>Yes</p>): (<p>No</p>)}</td>
                        <td><button value = {medicine._id} onClick = {deleteMedicine}>Delete</button></td>
                    </tr>
                ))}    
            </Table> 
            <Button className='appdet-btn' variant="primary" value = {appointment._id} onClick = {createAndDownloadPdf} >Generate Prescription</Button> 
        </div>
        </>
    )
}

export default DoctorAppointmentDetails
