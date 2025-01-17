import React from 'react'
import { Box, Typography, Divider, Grid, Button, Container } from '@mui/material'


const Education = () => {
  return (
    <div>
      <div id="education">

        <Box sx={{ backgroundColor: "#343A40!important", textAlign: "center", padding: "50px 0%" }}>
          <Container>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography className="resume-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>EDUCATION</Typography>
                <Box className="resume-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography className='resume-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>What I Learn</Typography>
                  <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
                </Box>
              </Box>



              <Box sx={{ marginTop: "2rem" }}>
                <Typography sx={{ fontSize: "26px", color: "#fff", fontWeight: "bold", textAlign: "left", padding: "20px 0px", marginTop: "10px" }}>Education</Typography>



                <Grid container rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center" >

                  <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "150px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>Jun 2017 - Apr 2018</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>HSC</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>Sri Ramakrishna Mission  (Main)</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Completed My Higher Secondary with 80%</Typography>

                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "150px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>Jul 2018 - Apr 2021</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>Bsc.Computer Science</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>Guru Nanak College (Chennai)</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Completed My Bachelor Degree in Computer With First Class</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "150px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>Jan 2022-Dec 2023</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>MCA</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>University of Madras</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Completed My Post Graduate degree in MCA</Typography>
                    </Box>
                  </Grid>

                </Grid>

                <Typography sx={{ fontSize: "26px", color: "#fff", fontWeight: "bold", textAlign: "left", padding: "20px 0px", marginTop: "10px" }}>Certification</Typography>


                <Grid container rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center">

                  <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "152px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>Dec 2021 - Feb 2022</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>React</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>DLK Institute</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Complete Certification Course in React JS including
                        DOM, React Components, Props And State and React Hooks</Typography>

                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "150px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>Jan 2024 - Feb 2024</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>Programming with JavaScript</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>Coursera</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>An online non-credit course authorized by <b>Meta</b>  and offered through Coursera</Typography>
                    </Box>
                  </Grid>



                </Grid>

                <Typography sx={{ fontSize: "26px", color: "#fff", fontWeight: "bold", textAlign: "left", padding: "20px 0px", marginTop: "10px" }}>Experience</Typography>

                <Grid container rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center">
                  <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "150px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>May 2022- Apr 2024</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "20px", color: "#fff", paddingTop: "7px" }}>Web Developer | React Developer</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>SIVRA</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Developing User Interfaces: Designing
                        and developing interactive user interfaces using ReactJS, JSX, and other related technologies.</Typography>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "150px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>May 2022- Apr 2024</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>Data Analyst Intern</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>True - Trace</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>As a Data Analyst Intern, I assist in data
                        collection, cleaning, and analysis using
                        tools like Excel, SQL, and Python to
                        generate actionable insights.</Typography>
                    </Box>
                  </Grid> */}
                </Grid>
              </Box>

            </Box>
          </Container>
        </Box>
      </div>
    </div>
  )
}

export default Education
