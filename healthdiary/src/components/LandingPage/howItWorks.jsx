import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tab_content } from './contant.js';
import './styles/landingPageStyle.css';


function HowItWorks() {
    const tabs = tab_content.map(tab => {
        return (
        <TabPanel className='tab__items'>
            <img src={tab.image} alt='tab_image' className='tab__img' />
            <p className='tab__paragraph'>{tab.heading}</p>
        </TabPanel>
        )
    })
  return (
    <>  
     <h2 className='tab__heading'>Steps of setting up an appointment</h2> 
     <div className='tab__container'>   
        <Tabs defaultIndex={0}>
            <TabList className='tab__list'>
                <Tab>Find Doctor</Tab>
                <Tab>Send Message</Tab>
                <Tab>Set Time</Tab>
                <Tab>Meet Doctor</Tab>
            </TabList>
             {tabs}    
        </Tabs>
      </div> 
     </> 
    )
}

export default HowItWorks
