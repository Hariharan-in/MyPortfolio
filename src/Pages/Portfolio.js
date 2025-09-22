import React from 'react'
import { Box, Typography, Divider, Grid, Container } from '@mui/material'

function Portfolio() {


  return (
    <div id="portfolio">
      <Box sx={{ backgroundColor: "#212529", height: "100%", padding: "50px 0%" }}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography className='portfolio-title' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>PORTFOLIO</Typography>
              <Box className='portfolio-title1' sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className='portfolio-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>My Work</Typography>
                <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
              </Box>
            </Box>

            <section className="gallery-image">

              <Box sx={{ marginTop: '3rem'}}>
                <Grid container rowSpacing={3} columnSpacing={3} style={{display:"flex",justifyContent:"center" }}>
                  <Grid item xs={12} sm={6}>
                    <Box className="project-box">
                    <a href='https://react-project-site.web.app' target="_blank" >
                    <Box className="slide-img1">
                      <Box className="hover-content">
                        <Typography sx={{ fontWeight: "bold", color: "aqua", fontSize: "17px", padding: "10%" }}>Farm Site</Typography>
                      </Box>
                    </Box>
                    </a>
                    </Box>
                  </Grid>

                 

                  <Grid item xs={6} sm={6}>
                    <Box className="project-box">
                    <a href='https://react-food-sta.web.app/' target="_blank" >
                    <Box className="slide-img3">
                      <Box className="hover-content">
                        <Typography sx={{ fontWeight: "bold", color: "aqua", fontSize: "17px", padding: "10%" }}>Food-App</Typography>
                      </Box>
                    </Box>
                    </a>
                    </Box>
                  </Grid>

                   <Grid item xs={6} sm={6}>
                    <Box className="project-box">
                    <a  target="_blank" >
                    <Box className="slide-img2">
                      <Box className="hover-content">
                        <Typography sx={{ fontWeight: "bold", color: "aqua", fontSize: "17px", padding: "10%" }}>Communication App</Typography>
                      </Box>
                    </Box>
                    </a>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box className="project-box">
                    <a href='https://myprofile-7ss.web.app/' target="_blank" >
                    <Box className="slide-img4">
                      <Box className="hover-content">
                        <Typography sx={{ fontWeight: "bold", color: "aqua", fontSize: "17px", padding: "10%" }}>MyProfile</Typography>
                      </Box>
                    </Box>
                    </a>
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </section>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Portfolio