import React,{useEffect} from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from '../../Sub_Components/home/Home'
import Weapons from '../../Sub_Components/Weapons/Weapons'
import Co_Services from '../../Sub_Components/Services/Co_Services'
import Projects from '../../Sub_Components/Projects/Projects'
import Contact from '../../Sub_Components/Contact/Contact'

function Main({SetOpenSideBar}){
    useEffect(()=>{
        SetOpenSideBar(false);
    },[])
    return(
        <div className="main">
            <Home/>
            <Weapons/>
            <Co_Services/>
            {/* <Projects/> */}
            <Contact/>
        </div>
    )
}

export default Main;