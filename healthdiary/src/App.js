import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/LandingPage/navbar.jsx';
import Header from './components/LandingPage/header.jsx';
import Section from './components/LandingPage/section.jsx';
import { doctorListInfo,videoChat,getNotify,blogs,communityForum } from './components/LandingPage/contant';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section {...doctorListInfo} varient='primary'/>
      <Section {...videoChat} varient='secondary'/>
      <Section {...getNotify} varient='primary'/>
      <Section {...blogs} varient='secondary'/>
      <Section {...communityForum} varient='primary'/>
    </>
  );
}

export default App;
