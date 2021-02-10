import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DoctorAppointmentDetails from './components/Appointment/DoctorAppointmentDetails';
import PatientAppointmentDetails from './components/Appointment/PatientAppointmentDetails';
import Prescription from './components/Appointment/Prescription';
import Chat from './components/Chat/Chat';
import DoctorDashboard from './components/Dashboard/Doctor_Dashboard/pages/Dashboard';
import DocAppoitments from './components/Dashboard/Doctor_Dashboard/pages/DocAppoitments';
import Education from './components/Dashboard/Doctor_Dashboard/pages/Education';
import Work from './components/Dashboard/Doctor_Dashboard/pages/Work';
import Allergies from './components/Dashboard/Patient_Dashboard/Pages/Allergies.js';
import Dashboard from './components/Dashboard/Patient_Dashboard/Pages/Dashboard.js';
import DoctorVisit from './components/Dashboard/Patient_Dashboard/Pages/DoctorVisit.js';
import DocVisitTable from './components/Dashboard/Patient_Dashboard/Pages/docVisitTable.js';
import History from './components/Dashboard/Patient_Dashboard/Pages/FamilyHistory';
import Pain from './components/Dashboard/Patient_Dashboard/Pages/Pain';
import UploadReports from './components/Dashboard/Patient_Dashboard/Pages/UploadReports';
import DoctorCard from './components/FindADoctor/DoctorCard';
import DoctorFind from './components/FindADoctor/DoctorFind';
import DoctorProfile from './components/FindADoctor/DoctorProfile';
import HowItWorks from './components/LandingPage/howItWorks.jsx';
import LandingPage from './components/LandingPage/landingPage';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <>

      <Router> 
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route exact path="/" component={LandingPage} />

            <Route path='/patient/doctorvisit' component={DoctorVisit} />
            <Route exact path='/patient/finddoctor' component={DoctorFind} />
            <Route path='/patient/finddoctor/:doctorId' component={DoctorProfile} />
            
            <Route path='/patient/dashboard' exact component={Dashboard} />
            <Route path='/patient/appointmenttable' component={DocVisitTable} />  
            <Route path='/patient/allergies' component={Allergies} />  
            <Route path='/patient/pain' component={Pain} />  
            <Route path='/patient/history' component={History} />  
          <Route path='/patient/uploadreports' component={UploadReports} />

          <Route path='/doctorcard' component={DoctorCard} />
          <Route path='/messages/:receiverId' component={Chat} />
          
          <Route path='/doctor/dashboard' component={DoctorDashboard}/>
          <Route path='/doctor/appointmenttable' component={DocAppoitments}/>
          <Route path='/doctor/education' component={Education} />
          <Route path='/doctor/work' component={Work} />
          
          <Route path='/patient/appointment/details' component={PatientAppointmentDetails} />
          <Route path='/doctor/appointment/details' component={DoctorAppointmentDetails} />
          <Route path='/prescription' component={Prescription} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
