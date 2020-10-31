import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/LandingPage/navbar.jsx';
import Header from './components/LandingPage/header.jsx';
import Section from './components/LandingPage/section.jsx';
import { doctorListInfo } from './components/LandingPage/contant';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section {...doctorListInfo} image={require('./resources/imgaes/doctorsList.svg')}/>
    </>
  );
}

export default App;
