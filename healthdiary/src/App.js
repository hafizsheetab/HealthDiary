import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Dashboard/Patient_Dashboard/Navbar.js';
import Allergies from './components/Dashboard/Patient_Dashboard/Pages/Allergies.js';
import Dashboard from './components/Dashboard/Patient_Dashboard/Pages/Dashboard.js';
import DoctorVisit from './components/Dashboard/Patient_Dashboard/Pages/DoctorVisit.js';
import DocVisitTable from './components/Dashboard/Patient_Dashboard/Pages/docVisitTable.js';
import History from './components/Dashboard/Patient_Dashboard/Pages/FamilyHistory';
import Pain from './components/Dashboard/Patient_Dashboard/Pages/Pain';
import UploadReports from './components/Dashboard/Patient_Dashboard/Pages/UploadReports';


function App() {
  return (
    <>

    <Router>
      <Navbar /> 
        <Switch>
          {/* <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route exact path="/" component={LandingPage} /> */}
            <Route path='/patient' exact component={Dashboard} />
            <Route path='/patient/doctorvisit' component={DoctorVisit} />
            <Route path='/patient/appointmenttable' component={DocVisitTable} />  
            <Route path='/patient/allergies' component={Allergies} />  
            <Route path='/patient/pain' component={Pain} />  
            <Route path='/patient/history' component={History} />  
            <Route path='/patient/uploadreports' component={UploadReports} />  
        </Switch>
    </Router>
    </>
  );
}

export default App;
