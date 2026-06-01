import { Typography, Box, Divider, Avatar, Container } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/home.css";

function Testimonial() {
  return (
    <div id="testimonial">
      <Box sx={{ backgroundColor: "#212529!important", padding: "50px 0%" }}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ position: "relative", textAlign: "center", mb: 10, mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "35px", color: "white", mb: 1 }}>
                  MY SKILLS
                </Typography>
              </Box>
              <Divider sx={{ background: "linear-gradient(135deg, #3498db, #8e44ad)", height: "4px", width: "80px", borderRadius: "2px", zIndex: 1 }} />

              <Typography sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: { xs: "-20px", md: "-40px" }, fontSize: { xs: "55px", md: "110px" }, fontWeight: "900", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.08)", textShadow: "0 10px 30px rgba(0,0,0,0.5)", letterSpacing: { xs: "5px", md: "10px" }, textTransform: "uppercase", zIndex: 0, pointerEvents: "none", width: "100%", textAlign: "center", lineHeight: 1 }}>
                SUMMARY
              </Typography>
            </Box>
          </Box>

          <Box>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
              }}
              coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 150,
                modifier: 1.2,
                slideShadows: true,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              speed={500}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="mySwiper premium-swiper"
              navigation={true}
            >

              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box premium-skill-box' sx={{ display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "300px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/javascript3.png" width={70} height={70} />
                      <Box>
                        <Typography sx={{ fontWeight: "bold", marginTop: "15px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px" }}>Javascript</Typography>
                        {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Skilled in JavaScript (ES6+) for web development, React, and optimizing performance with modern features like arrow functions, destructuring, and API integrations.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box premium-skill-box' sx={{ display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "300px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/react.png" width={70} height={70} />

                      <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px", marginTop: "15px" }}>React JS</Typography>
                      {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}

                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Proficient in ReactJS for creating responsive web applications using reusable components, state management, hooks, Context API, and JSX.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>



              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box premium-skill-box' sx={{ display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "300px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" style={{ objectFit: "contain", backgroundColor: "white", padding: "2px" }} src="assets/media/skills/My_sql.png" width={70} height={70} />
                      <Box>
                        <Typography sx={{ fontWeight: "bold", marginTop: "15px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px" }}>MYSQL</Typography>
                        {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Familiar with MySQL for database management, including writing queries and performing data extraction for analysis.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box premium-skill-box' sx={{ display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "300px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/web.jpg" width={70} height={70} />
                      <Box>
                        <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px", marginTop: "15px" }}>Web Development</Typography>
                        {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Experienced Front-End Developer proficient
                      in HTML, CSS, and JavaScript, with expertise
                      in modern frameworks like ReactJs
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box premium-skill-box' sx={{ display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "300px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/powerbi1.jpg" width={70} height={70} alt="Power BI" />
                      <Box>
                        <Typography sx={{ fontWeight: "bold", marginTop: "15px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px" }}>Power BI</Typography>
                        {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Expertise in developing interactive Power BI dashboards and reports to visualize complex datasets, transforming raw data into actionable insights for strategic decision-making.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box premium-skill-box' sx={{ display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "300px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/Git.png" width={70} height={70} />
                      <Box>
                        <Typography sx={{ fontWeight: "bold", marginTop: "15px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px" }}>Git</Typography>
                        {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Proficient in Git for version control, managing code repositories, and collaborating on data analysis projects to ensure efficient workflow and code integrity.

                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

            </Swiper>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Testimonial