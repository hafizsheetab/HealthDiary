import React from 'react';
import { blogs, communityForum, doctorListInfo, getNotify, videoChat } from './contant';
import Footer from './footer.jsx';
import Header from './header.jsx';
import Navbar from './navbar';
import Section from './section.jsx';

function LandingPage() {
    return (
        <>
          <Navbar />
          <Header />
          <Section {...doctorListInfo} varient='primary'/>
          <Section {...videoChat} varient='secondary'/>
          <Section {...getNotify} varient='primary'/>
          <Section {...blogs} varient='secondary'/>
          <Section {...communityForum} varient='primary'/>
          <Footer />
          
        </>
    )
}

export default LandingPage
