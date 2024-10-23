import React from 'react'
import { Box, Typography, Divider, Grid, Button, Container } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'dark' ? 200 : 100],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #3498db, #8e44ad)' : '#308fe8',
    
  },
}));

const Resume = () => {
  return (
    <div id="resume">
    
      <Box sx={{ backgroundColor: "#212529!important", textAlign: "center",padding:"50px 0%" }}>
        <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography className="resume-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>SUMMARY</Typography>
            <Box className="resume-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography className='resume-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Resume</Typography>
              <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
            </Box>
          </Box>



         

          <Box sx={{ marginTop: "5rem" }}>
            <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "26px" }}>My Skills</Typography>

            {/* <Grid container rowSpacing={4} columnSpacing={5} marginTop={0}>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>Web Design</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>85%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={85} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>HTML/CSS</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>80%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={80} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>JavaScript</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>70%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>React JS</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>75%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={75} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>Responsive Design</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>90%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={50} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>Bootstrap</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>85%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={55} />
                </Box>
              </Grid>

            </Grid> */}

            <Grid container rowSpacing={4} columnSpacing={5} marginTop={0}>

                <Grid item xs={12} sm={6} md={4}>
                <Box className='hover-skillbox' sx={{ bgcolor:"transparent", borderRadius: "25%", opacity: ".8", padding: "5%",textAlign:"left",height:"190px",display:"flex",flexDirection:"row",gap:"20px",alignItems:"center" }}>
                 <Box className='skill-img' sx={{display:"none"}}>
                <img src='assets/media/skills/microsoft-excel.jpeg' width={50} height={50}/>
                 </Box>
                 <Box>
                 <Box  className="skill-name" sx={{ background:"linear-gradient(120deg, #3498db, #8e44ad)", width: "150px", borderRadius: "5px",textAlign:"center" }}>
                    <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>Microsoft Excel</Typography>
                  </Box>
              <Typography className='skill-typo' sx={{ fontSize: "15px", display:"none", color: "#fff", opacity: ".7", paddingTop: "7px",textAlign:"left",marginTop:"10px" }}>
              Proficient in Excel for data analysis, including data cleaning, advanced formulas, and creating reports with pivot tables and charts.
              </Typography>
                 </Box>
                 
                    </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: "black", borderRadius: "25%", opacity: ".8", padding: "5%",textAlign:"left",height:"190px",display:"flex",flexDirection:"row",gap:"20px",alignItems:"center" }}>
                 <Box>
                <img src='assets/media/skills/python.webp' width={50} height={50}/>
                 </Box>
                 <Box>
                
              <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px",textAlign:"left",marginTop:"10px" }}>
              Skilled in Python for data analysis, including data manipulation, statistical analysis, and automation using libraries like Pandas and NumPy.
              </Typography>
                 </Box>
                 
                    </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: "black", borderRadius: "25%", opacity: ".8", padding: "5%",textAlign:"left",height:"190px",display:"flex",flexDirection:"row",gap:"20px",alignItems:"center" }}>
                 <Box>
                <img src='assets/media/skills/My_sql.png' width={50} height={50}/>
                 </Box>
                 <Box>
                
              <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px",textAlign:"left",marginTop:"10px" }}>
              Familiar with MySQL for database management, including writing queries and performing data extraction for analysis.
              </Typography>
                 </Box>
                 
                    </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: "black", borderRadius: "25%", opacity: ".8", padding: "5%",textAlign:"left",height:"190px",display:"flex",flexDirection:"row",gap:"20px",alignItems:"center" }}>
                 <Box>
                <img src='assets/media/skills/web.jpg' width={50} height={50}/>
                 </Box>
                 <Box>
                 
              <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px",textAlign:"left",marginTop:"10px" }}>
              Experienced Front-End Developer proficient
in HTML, CSS, and JavaScript, with expertise
in modern frameworks like ReactJs
              </Typography>
                 </Box>
                 
                    </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: "black", borderRadius: "25%", opacity: ".8", padding: "5%",textAlign:"left",height:"190px",display:"flex",flexDirection:"row",gap:"20px",alignItems:"center" }}>
                 <Box>
                <img src='assets/media/skills/powerbi.png' width={60} height={50}/>
                 </Box>
                 <Box>
                 
              <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px",textAlign:"left",marginTop:"10px" }}>
              Skilled in Power BI for developing interactive dashboards and visualizations to communicate data insights effectively.
              </Typography>
                 </Box>
                 
                    </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: "black", borderRadius: "25%", opacity: ".8", padding: "5%",textAlign:"left",height:"190px",display:"flex",flexDirection:"row",gap:"20px",alignItems:"center" }}>
                 <Box>
                <img src='assets/media/skills/Git.png' width={50} height={50}/>
                 </Box>
                 <Box>
                 
              <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px",textAlign:"left",marginTop:"10px" }}>
              Proficient in Git for version control, managing code repositories, and collaborating on data analysis projects to ensure efficient workflow and code integrity.
              </Typography>
                 </Box>
                 
                    </Box>
              </Grid>
              </Grid>
          </Box>


          <Box>
            <a href='assets/media/Hari_Resume.pdf' target="_blank" rel="noopener noreferrer">
              <Button variant="outlined"
                sx={{
                  padding: "10px", marginTop: "7%", borderRadius: "25px", width: "200px", color: "aqua", borderColor: "aqua"
                  , ":hover": {
                    background  :'linear-gradient(120deg, #3498db, #8e44ad)',
                    borderColor: "white",
                    borderWidth: "1.4px",
                    color: "white"
                  }
                }}>
                Download CV
              </Button></a>
          </Box>
        </Box>
        </Container>
      </Box>
    </div>

  )
}

export default Resume