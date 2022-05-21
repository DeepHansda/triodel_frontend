import React,{useState} from 'react'
import Navbar from './UI/navbar/Navbar'
import Sidebar from './UI/sidebar/Sidebar'
import ContactBar from './UI/contactSidebar/ContactBar'
import Main from './Components/Main_Components/Main/Main'
import Footer from './Components/Sub_Components/Footer/Footer'
import Slideshow from './UI/slideshow/Slideshow'
// import '../src/Components/ScrollReveal/scrollReveal'
import { Routes,Route} from 'react-router-dom'
import About from './Components/Main_Components/About/About'
import MasterRoutes from './Components/Routes/MasterRoutes'
// import './Components/ScrollReveal/scrollReveal'

function App() {
  const [openSideBar,SetOpenSideBar] = useState(false)
  return (
    <div>
      <Navbar SetOpenSideBar={SetOpenSideBar} openSideBar={openSideBar}/>
      <ContactBar/>
      <Sidebar openSideBar={openSideBar} SetOpenSideBar={SetOpenSideBar}/>
      <MasterRoutes SetOpenSideBar={SetOpenSideBar}/>
      <Footer/>
    </div>
  );
}

export default App;
