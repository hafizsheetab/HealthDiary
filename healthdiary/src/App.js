import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
