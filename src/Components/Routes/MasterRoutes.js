import React from 'react';
import {Routes,Route} from 'react-router-dom'
import About from '../Main_Components/About/About';
import ContactUS from '../Main_Components/ContactUs/ContactUs';
import Main from '../Main_Components/Main/Main';
import Portfolio from '../Main_Components/Portfolio/Portfolio';
import AndroidProjects from '../Sub_Components/PortfolioCat/AndroidProjects';
import Designs from '../Sub_Components/PortfolioCat/Designs';
import WebProjects from '../Sub_Components/PortfolioCat/WebProjects';


function MasterRoutes({SetOpenSideBar}) {
  return (
    <Routes>
      <Route path="/" element={<Main  SetOpenSideBar={SetOpenSideBar}/>} />
      <Route path="/about" element={<About  SetOpenSideBar={SetOpenSideBar}/>} />
      <Route path="/portfolio" element={<Portfolio  SetOpenSideBar={SetOpenSideBar}/>}>
        <Route path="/portfolio/web" exact element={<WebProjects />} />
        <Route path="/portfolio/android" element={<AndroidProjects />} />
        <Route path="/portfolio/designs" element={<Designs />} />
      </Route>
      <Route path="/contact" element={<ContactUS SetOpenSideBar={SetOpenSideBar}/>} />
    </Routes>
  );
}

export default MasterRoutes;