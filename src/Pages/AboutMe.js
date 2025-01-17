import React from 'react'
import { Box, Typography, Grid, Divider, Container, Button } from '@mui/material'


const AboutMe = () => {
    return (

        <div id="about">
            <Box sx={{ backgroundColor: "#212529!important", width: "100%", padding: "50px 0%" }}>
                <Container>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box className="about-box">
                            <Typography className="about-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>ABOUT ME</Typography>
                            <Box className="about-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography className='about-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Know Me More</Typography>
                                <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
                            </Box>
                        </Box>

                        <Box sx={{ padding: "5% 0% 10% 5%" }}>
                            <Grid container rowSpacing={5} columnSpacing={5}>
                                <Grid item xs={12} sm={12} md={8}>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                                        <Typography className='about-typo' sx={{ color: "white", fontSize: "30px" }}>I'm</Typography>
                                        <Typography className='about-typo' sx={{ fontSize: "30px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text" }}>Hariharan,</Typography>
                                        <Typography className='about-typo' sx={{ color: "white", fontSize: "30px" }}> a Web Developer</Typography>
                                    </Box>
                                    <br></br>
                                    <Typography sx={{ color: "white", fontSize: "17px", opacity: ".5" }}>
                                        Experienced Front-End Developer proficient in HTML, CSS, and JavaScript, with expertise
                                        in modern frameworks like <b style={{backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text"}}>ReactJs</b> . Skilled in
                                        creating responsive and visually appealing
                                        web applications while ensuring cross
                                        browser compatibility and performance
                                        optimization. I thrive on solving challenges and continuously learning the latest trends in web development.
                                        <br></br><br></br>

                                        
                                        In addition to web development, I have strong expertise in creating impactful <b style={{ backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text"}}>Power BI dashboards</b>. I transform complex datasets into clear, actionable insights through visually compelling and interactive dashboards, enabling businesses to make informed decisions.
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4}>
                                    <Box sx={{ display: "flex", flexDirection: "column" }} className="cnt-link">
                                        <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>Name: Hariharan</Typography>
                                        <Divider sx={{ bgcolor: "white", width: '70%', margin: "10px 0px 10px 0px" }}></Divider>
                                        <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>Email: <a href="mailto:harisankar11a@gmail.com">harisankar11a@gmail.com</a></Typography>
                                        <Divider sx={{ bgcolor: "white", width: '70%', margin: "10px 0px 10px 0px" }}></Divider>
                                        <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>Phone: <a href="tel:6369260614">6369260614</a></Typography>
                                        <Divider sx={{ bgcolor: "white", width: '70%', margin: "10px 0px 10px 0px" }}></Divider>
                                        <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>From: Chennai, India</Typography>
                                        <Box>   <a href='assets/media/Hariharan_resume.pdf' target="_blank" rel="noopener noreferrer">
                                            <Button className='resume-btn' variant='contained' type="submit">Download Resume</Button>
                                        </a></Box>
                                    </Box>
                                </Grid>
                            </Grid>


                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default AboutMe