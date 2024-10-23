import { Typography, Box, Divider, Avatar, Container } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonial() {
  return (
    <div id="testimonial">
      <Box sx={{ backgroundColor: "#212529!important", padding: "50px 0%" }}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography className="testimonial-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>SUMMARY</Typography>
              <Box className="testimonial-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className='testimonial-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>MY SKILLS</Typography>
                <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
              </Box>
            </Box>
          </Box>

          <Box>
            <Swiper
              breakpoints={{

                400: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },

                600: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                950: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                }
              }
              }
              autoplay={{ delay: 5000 }}
              pagination={{
                clickable: true,

              }}
              loop={true}
              speed={1000}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              navigation={true}

            >
              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box' sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "230px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/microsoft-excel.jpeg" width={70} height={70} />

                      <Typography sx={{ fontWeight: "bold", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px", marginTop: "15px" }}>Microsoft Excel</Typography>
                      {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}

                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Proficient in Excel for data analysis, including data cleaning, advanced formulas, and creating reports with pivot tables and charts.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box' sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "230px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/python.webp" width={70} height={70} />
                      <Box>
                        <Typography sx={{ fontWeight: "bold", marginTop: "15px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px" }}>Python</Typography>
                        {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Skilled in Python for data analysis, including data manipulation, statistical analysis, and automation using libraries like Pandas and NumPy.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box' sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px", height: "230px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/My_sql.png" width={70} height={70} />
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
                  <Box className='skill-box' sx={{ bgcolor: "black", height: "230px", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
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
                  <Box className='skill-box' sx={{ bgcolor: "black", height: "230px", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <img className="client-image" src="assets/media/skills/Powerbi.png" width={70} height={70} />
                      <Box>
                        <Typography sx={{ fontWeight: "bold", marginTop: "15px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "20px" }}>Power BI</Typography>
                        {/* <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography> */}
                      </Box>
                    </Box>
                    <Typography sx={{ color: "GrayText" }}>
                      Skilled in Power BI for developing interactive dashboards and visualizations to communicate data insights effectively.
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                  <Box className='skill-box' sx={{ bgcolor: "black", height: "230px", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
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