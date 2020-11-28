import React from 'react'
import Navbar from './navbar'
import Header from './header.jsx';
import Section from './section.jsx';
import { doctorListInfo,videoChat,getNotify,blogs,communityForum } from './contant';
import Footer from './footer.jsx';

function LandingPage() {
    return (
        <>
          <Navbar />
          <Header />
          <Section {...doctorListInfo} varient='primary'/>
          <Section {...videoChat} varient='secondary'/>
          <Section {...getNotify} varient='primary'/>
          <Section {...blogs} varient='secondary'/>
          <Section {...communityForum} varient='primary' />
          <Footer />
        </>
    )
}

export default LandingPage
