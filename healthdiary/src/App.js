import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Dashboard/Patient_Dashboard/Navbar.js';
import Allergies from './components/Dashboard/Patient_Dashboard/Pages/Allergies.js';
import Dashboard from './components/Dashboard/Patient_Dashboard/Pages/Dashboard.js';
import DoctorVisit from './components/Dashboard/Patient_Dashboard/Pages/DoctorVisit.js';


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
            <Route path='/' exact component={Dashboard} />
            <Route path='/reports' component={DoctorVisit} />
            <Route path='/products' component={Allergies} />  
        </Switch>
    </Router>
    </>
  );
}

export default App;
