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
            <Box className="title" sx={{ 
              display: "flex", 
              height: "100vh", 
              flexDirection: "column", 
              alignItems: { xs: "center", md: "flex-start" }, 
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
              zIndex: 10
            }}>
              <Typography className='title-name' sx={{ fontSize: { xs: "24px", md: "32px" }, color: "rgba(255,255,255,0.7)", fontWeight: 500, letterSpacing: "2px", mb: { xs: 0, md: -1 } }}>
                Hi, I'm
              </Typography>
              <Typography sx={{ 
                fontSize: { xs: "50px", md: "85px" }, 
                fontWeight: 900, 
                backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", 
                color: "transparent", 
                WebkitBackgroundClip: "text", 
                backgroundClip: "text",
                lineHeight: 1.1,
                mb: 1
              }}>
                Hariharan.
              </Typography>
              <Box sx={{ fontSize: { xs: "24px", md: "32px" }, color: "#fff", fontWeight: 400, mb: 4, letterSpacing: "1px", display: 'flex', alignItems: 'center' }}>
                <Typography component="span" sx={{ fontSize: 'inherit', color: "rgba(255,255,255,0.5)", mr: 1 }}>I am a</Typography>
                <Typed
                  className='animation-type'
                  strings={['Developer.', 'Analyst.', 'Learner.']}
                  typeSpeed={100}
                  backSpeed={80}
                  loop
                />
              </Box>
              
              <Link to="contact" spy={true} smooth={true} offset={0} duration={100}>
                <Button sx={{
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, #3498db, #8e44ad)',
                  color: "#fff",
                  textTransform: 'none',
                  fontSize: "18px",
                  fontWeight: 600,
                  padding: "12px 40px",
                  boxShadow: "0 10px 20px rgba(52, 152, 219, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 25px rgba(142, 68, 173, 0.4)",
                    background: 'linear-gradient(135deg, #3498db, #8e44ad)',
                  }
                }}>
                  Contact Me
                </Button>
              </Link>

              <Box sx={{ mt: 8, display: { xs: 'flex', md: 'block' }, justifyContent: 'center' }}>
                <Link to='about' spy={true} smooth={true} offset={0} duration={400} className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>
              </Box>
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