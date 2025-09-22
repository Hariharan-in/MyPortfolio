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
import Resume from './Pages/Resume'
import Portfolio from "./Pages/Portfolio"
import Error from "./Pages/Error"



function App() {

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    
     
          
         <Router>
      <Navbar />
      <GoToTop />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe />
              <Education />
              <Testimonial />
              <WhatIDo />
              <Portfolio />
              <Contact />
            </>
          }
        />

       

        {/* 404 page (catch-all) */}
        <Route path="*" element={<Error />} />
      </Routes>
     </Router>
      
    
  
  
  );
}

export default App;
