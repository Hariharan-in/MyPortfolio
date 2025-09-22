import React, { useLayoutEffect } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import '../Styles/home.css'
import Typed from 'react-typed'
import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";




function Home() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 800)
    }, [])

  useLayoutEffect(() => {
    const img = new Image();
    img.src = "assets/media/home/bgImage5.png"; // Preload image
    const video = document.createElement("video");
    video.src = "assets/media/v3.mp4"; // Preload video

    Promise.all([
      new Promise((res) => (img.onload = res)),
      new Promise((res) => (video.oncanplaythrough = res)),
    ]).then(() => setIsLoaded(true));
  }, []);

  return (

    <section id="home">
      {
        !isLoaded ?  <Box className='loader'>
        <RiseLoader
          color={'#00FFFF'}
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Box> : (
          <> <video preload='auto' autoPlay loop muted playsInline className='backgroung-clip' poster="/assets/media/videobg.png"  controls>
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
              <img src="assets/media/home/bgImage5.png" width={550} height={450} ></img>
  
            </Box>
  
          </Box>
  
  
        </Container></>
        )
      }
     



    </section>





  )
}



export default Home