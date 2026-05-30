import React, { useLayoutEffect } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import '../Styles/home.css'
import Typed from 'react-typed'
import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";




function Home() {

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 800)
      
      // Fallback: force show after 5 seconds to prevent infinite loading screen if assets fail
      const timeout = setTimeout(() => {
        setVideoLoaded(true);
        setImageLoaded(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }, [])

  const isReady = videoLoaded && imageLoaded && !loading;

  return (

    <section id="home" style={{ position: 'relative' }}>
      {
        !isReady && (
          <Box className='loader' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, backgroundColor: 'black' }}>
            <RiseLoader
              color={'#00FFFF'}
              loading={true}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Box>
        )
      }
      <div style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <video 
          preload='auto' 
          autoPlay 
          loop 
          muted 
          playsInline 
          className='backgroung-clip' 
          poster="/assets/media/videobg.png"  
          controls
          onCanPlayThrough={() => setVideoLoaded(true)}
          onLoadedData={(e) => {
            if (e.target.readyState >= 3) {
              setVideoLoaded(true);
            }
          }}
        >
          <source src="assets/media/v3.mp4" type="video/mp4" />
        </video>
  
  
        <Container>
          <Box className="home-display" sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <Box className="title" sx={{ display: "flex", height: "100vh", flexDirection: "column", gap: "10px", alignItems: "center", justifyContent: "center" }}>
  
              <Typography className='title-name' sx={{ fontSize: "40px", color: "white" }}>Hi,</Typography>
              <Typography sx={{ fontSize: "45px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text" }}><span style={{ color: "white", fontSize: "40px", paddingRight: "10px" }}>I'm</span>Hariharan</Typography>
              <Typed
                className='animation-type'
                strings={[
                  'Developer',
                  'Analyst',
                  'Learner'
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
              <Link to="contact">
                <Button variant="outlined" sx={{
                  borderRadius: '25px',
                  background: 'linear-gradient(120deg, #3498db, #8e44ad)',
                  borderColor: "aqua",
                  marginTop: "10px",
                  color: "aqua",
                  opacity: '.8',
                  textTransform: 'capitalize',
                  fontSize: "19px",
                  padding: "10px 30px 10px 30px",
                  ":hover": {
                    backgroundColor: "aqua",
                    borderColor: "white",
                    borderWidth: "2px",
                    color: "white"
                  }
                }}>Contact Me</Button>
              </Link>
  
              <Link to='about' spy={true} smooth={true} offset={0} duration={400} className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </Link>
  
  
            </Box>
            <Box className="img-container">
              <img src="assets/media/home/bgImage5.png" width={550} height={450} onLoad={() => setImageLoaded(true)} alt="bg"></img>
  
            </Box>
  
          </Box>
  
  
        </Container>
      </div>
     



    </section>





  )
}



export default Home