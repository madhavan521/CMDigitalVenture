import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './Home'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import AddServices from './AddServices'
import AllServices from './AllServices'
import ContactPage from './Component/ContactPage'
import AboutUs from './Component/AboutUs'
import AllClients from './Component/AllClients'
import ChatBot from './Component/Chatbot'
const App = () => {
  return (
    <div>

    <BrowserRouter>
    <Navbar className="fixed-top"/>
   
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Addservices' element={<AddServices />} />
    <Route path='/Allservice' element={<AllServices />} />
    <Route path='/contact'   element={<ContactPage />} />
    <Route path='/aboutus'     element={<AboutUs/>} />
    <Route path='/Allclients' element={<AllClients />} />



        
    
    </Routes>
    <div className='fixed-bottom'><ChatBot />
  </div>  <Footer />
    </BrowserRouter>
      
    </div>
  )
}

export default App
