import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Dashboard/Doctor_Dashboard/Navbar';
import DoctorDashboard from './components/Dashboard/Doctor_Dashboard/pages/Dashboard';
import DocAppoitments from './components/Dashboard/Doctor_Dashboard/pages/DocAppoitments';
import Education from './components/Dashboard/Doctor_Dashboard/pages/Education';
import Work from './components/Dashboard/Doctor_Dashboard/pages/Work';
// import Allergies from './components/Dashboard/Patient_Dashboard/Pages/Allergies.js';
// import Dashboard from './components/Dashboard/Patient_Dashboard/Pages/Dashboard.js';
// import DoctorVisit from './components/Dashboard/Patient_Dashboard/Pages/DoctorVisit.js';
// import DocVisitTable from './components/Dashboard/Patient_Dashboard/Pages/docVisitTable.js';
// import History from './components/Dashboard/Patient_Dashboard/Pages/FamilyHistory';
// import Pain from './components/Dashboard/Patient_Dashboard/Pages/Pain';
// import UploadReports from './components/Dashboard/Patient_Dashboard/Pages/UploadReports';


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
            {/* <Route path='/patient' exact component={Dashboard} />
            <Route path='/patient/doctorvisit' component={DoctorVisit} />
            <Route path='/patient/appointmenttable' component={DocVisitTable} />  
            <Route path='/patient/allergies' component={Allergies} />  
            <Route path='/patient/pain' component={Pain} />  
            <Route path='/patient/history' component={History} />  
            <Route path='/patient/uploadreports' component={UploadReports} />   */}
          <Route path='/doctor/dashboard' component={DoctorDashboard} />
          <Route path='/doctor/appointmenttable' component={DocAppoitments} />
          <Route path='/doctor/education' component={Education} />
          <Route path='/doctor/work' component={Work} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
