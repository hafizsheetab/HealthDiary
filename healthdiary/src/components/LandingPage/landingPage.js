import React from 'react';
import { getUser } from '../Utility/localStorageAPI';
import { blogs, communityForum, doctorListInfo, getNotify, videoChat } from './contant';
import Footer from './footer.jsx';
import Header from './header.jsx';
import Navbar from './navbar';
import Section from './section.jsx';

function LandingPage({history}) {
  React.useEffect(() => {
    function forward() {
      let user = getUser()
      if(user){
        history.push(`/${user.userType}/dashboard`)
      }
    }
    forward()
  }, [])
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
