import React from 'react'
import { Box, Typography, Grid, Divider, Container, Button } from '@mui/material'


const AboutMe = () => {
    return (

        <div id="about">
            <Box sx={{ backgroundColor: "#212529!important", width: "100%", padding: "50px 0%" }}>
                <Container>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ position: "relative", textAlign: "center", mb: 10, mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Box sx={{ position: "relative", zIndex: 1 }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "35px", color: "white", mb: 1 }}>
                                    Know Me More
                                </Typography>
                            </Box>
                            <Divider sx={{ background: "linear-gradient(135deg, #3498db, #8e44ad)", height: "4px", width: "80px", borderRadius: "2px", zIndex: 1 }} />

                            <Typography sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: { xs: "-20px", md: "-40px" }, fontSize: { xs: "55px", md: "110px" }, fontWeight: "900", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.08)", textShadow: "0 10px 30px rgba(0,0,0,0.5)", letterSpacing: { xs: "5px", md: "10px" }, textTransform: "uppercase", zIndex: 0, pointerEvents: "none", width: "100%", textAlign: "center", lineHeight: 1 }}>
                                ABOUT ME
                            </Typography>
                        </Box>

                        <Box sx={{ padding: "5% 0% 10% 0%" }}>
                            <Grid container rowSpacing={8} columnSpacing={6}>
                                {/* Left Side: Text */}
                                <Grid item xs={12} sm={12} md={7}>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                                        <Typography className='about-typo' sx={{ color: "white", fontSize: "32px", fontWeight: "600" }}>I'm</Typography>
                                        <Typography className='about-typo' sx={{ fontSize: "32px", fontWeight: "bold", backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Hariharan,</Typography>
                                        <Typography className='about-typo' sx={{ color: "white", fontSize: "32px", fontWeight: "600" }}> a Web Developer</Typography>
                                    </Box>

                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "17px", lineHeight: "1.8", fontWeight: "300" }}>
                                        Experienced Front-End Developer proficient in HTML, CSS, and JavaScript, with expertise
                                        in modern frameworks like <span style={{ backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "600" }}>ReactJs</span>. Skilled in
                                        creating responsive and visually appealing
                                        web applications while ensuring cross-browser compatibility and performance
                                        optimization. I thrive on solving challenges and continuously learning the latest trends in web development.
                                        <br /><br />

                                        In addition to web development, I have strong expertise in creating impactful <span style={{ backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "600" }}>Power BI dashboards</span>. I transform complex datasets into clear, actionable insights through visually compelling and interactive dashboards, enabling businesses to make informed decisions.
                                    </Typography>
                                </Grid>

                                {/* Right Side: Contact Card */}
                                <Grid item xs={12} sm={12} md={5}>
                                    <Box className="contact-card" sx={{ display: "flex", flexDirection: "column", gap: "25px", padding: "40px", background: "rgba(15, 15, 20, 0.6)", backdropFilter: "blur(12px)", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.05)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)" }}>

                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <Typography sx={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>Name</Typography>
                                            <Typography sx={{ fontSize: "18px", color: "white", fontWeight: "500" }}>Hariharan</Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <Typography sx={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>Email</Typography>
                                            <Typography sx={{ fontSize: "18px", color: "white", fontWeight: "500" }}><a href="mailto:harisankar11a@gmail.com" style={{ color: "white", textDecoration: "none", transition: "color 0.3s ease" }} onMouseOver={(e) => e.target.style.color = "#3498db"} onMouseOut={(e) => e.target.style.color = "white"}>harisankar11a@gmail.com</a></Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <Typography sx={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>Phone</Typography>
                                            <Typography sx={{ fontSize: "18px", color: "white", fontWeight: "500" }}><a href="tel:6369260614" style={{ color: "white", textDecoration: "none", transition: "color 0.3s ease" }} onMouseOver={(e) => e.target.style.color = "#3498db"} onMouseOut={(e) => e.target.style.color = "white"}>6369260614</a></Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <Typography sx={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>From</Typography>
                                            <Typography sx={{ fontSize: "18px", color: "white", fontWeight: "500" }}>Chennai, India</Typography>
                                        </Box>

                                        <Box sx={{ marginTop: "10px" }}>
                                            <a href='assets/media/Hariharan_resume.pdf' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                <Button className='premium-resume-btn' variant='contained' type="submit" sx={{ width: "100%", padding: "12px", borderRadius: "30px", background: "linear-gradient(135deg, #3498db, #8e44ad)", color: "white", fontWeight: "bold", fontSize: "16px", textTransform: "none", boxShadow: "0 5px 15px rgba(52, 152, 219, 0.4)", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-3px)", boxShadow: "0 8px 25px rgba(52, 152, 219, 0.6)", background: "linear-gradient(135deg, #3498db, #8e44ad)" } }}>Download Resume</Button>
                                            </a>
                                        </Box>
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