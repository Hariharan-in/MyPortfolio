import React, { useState, useEffect } from 'react'
import './Styles/home.css'
import { Box } from '@mui/material'
import AboutMe from './Pages/AboutMe'
import Navbar from './Component/Navbar'
import WhatIDo from './Pages/WhatIDo'
import Contact from './Pages/Contact'
import Home from './Pages/Home';
import RiseLoader from "react-spinners/RiseLoader";
import GoToTop from './Component/GoToTop'
import Education from './Pages/Education'
import Testimonial from './Pages/Testimonial'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Pages/Error'
import Resume from './Pages/Resume'



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    <div>
      
      {
        loading ?
          <Box className='loader'>
            <RiseLoader
              color={'#00FFFF'}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Box>
          :
          
          <div>
            
            <Navbar />
            <GoToTop />
            <Home />
            <AboutMe />
            <Education />
            <Testimonial />
            <WhatIDo />
            {/* <Portfolio /> */}
            <Contact />
          
          
          </div>
      }
    
    </div>
  
  );
}

export default App;
