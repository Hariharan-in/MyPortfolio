import React from 'react'
import { Box, Typography, Divider, Grid, Container } from '@mui/material'

function Portfolio() {


  return (
    <div id="portfolio">
      <Box sx={{ backgroundColor: "#212529", height: "100%", padding: "50px 0%" }}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ position: "relative", textAlign: "center", mb: 10, mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "35px", color: "white", mb: 1 }}>
                  My Work
                </Typography>
              </Box>
              <Divider sx={{ background: "linear-gradient(135deg, #3498db, #8e44ad)", height: "4px", width: "80px", borderRadius: "2px", zIndex: 1 }} />

              <Typography sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: { xs: "-20px", md: "-40px" }, fontSize: { xs: "55px", md: "110px" }, fontWeight: "900", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.08)", textShadow: "0 10px 30px rgba(0,0,0,0.5)", letterSpacing: { xs: "5px", md: "10px" }, textTransform: "uppercase", zIndex: 0, pointerEvents: "none", width: "100%", textAlign: "center", lineHeight: 1 }}>
                PORTFOLIO
              </Typography>
            </Box>

            <section className="gallery-image">

              <Box sx={{ marginTop: '3rem' }}>
                <Grid container rowSpacing={3} columnSpacing={3} style={{ display: "flex", justifyContent: "center" }}>
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
                      <a target="_blank" >
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