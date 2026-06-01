import React from 'react'
import { Box, Typography, Divider, Container } from '@mui/material'

const TimelineSection = ({ title, items }) => (
  <Box sx={{ width: '100%', mb: 12, position: 'relative' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, position: 'relative', zIndex: 1 }}>
      {/* Glowing vertical line */}
      <Box sx={{ height: '45px', width: '6px', borderRadius: '4px', background: 'linear-gradient(to bottom, #3498db, #8e44ad)', mr: 3, boxShadow: '0 0 15px rgba(52, 152, 219, 0.6)' }} />

      {/* Main Title */}
      <Typography sx={{ fontSize: "36px", fontWeight: "900", textAlign: "left", letterSpacing: "1.5px", color: "#fff", textTransform: "capitalize" }}>
        {title}
        <Typography component="span" sx={{ backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "900", fontSize: "36px" }}>.</Typography>
      </Typography>

      {/* Background Watermark Title */}
      <Typography sx={{ 
        position: "absolute", 
        left: { xs: "0", md: "20px" }, 
        top: { xs: "-15px", md: "-30px" }, 
        fontSize: { xs: "45px", md: "75px" }, 
        fontWeight: "900", 
        color: "transparent", 
        backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", 
        WebkitBackgroundClip: "text", 
        opacity: 0.15, 
        letterSpacing: { xs: "2px", md: "5px" }, 
        textTransform: "uppercase", 
        zIndex: -1, 
        pointerEvents: "none",
        whiteSpace: "nowrap" 
      }}>
        {title}
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((item, idx) => (
        <Box key={idx} sx={{ display: 'flex', position: 'relative', width: '100%', pb: idx === items.length - 1 ? 0 : 6 }}>
          {/* Left: Date info */}
          <Box sx={{ width: { xs: '100%', md: '25%' }, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'flex-end', pr: 5, pt: 1 }}>
            <Typography sx={{ backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 'bold', fontSize: '15px', letterSpacing: '1px' }}>{item.date}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', mt: 1 }}>{item.duration || ''}</Typography>
          </Box>

          {/* Middle: Timeline Line & Dot */}
          <Box sx={{ position: 'relative', display: { xs: 'none', md: 'flex' }, width: '2px', background: 'rgba(255,255,255,0.1)', mx: 2 }}>
            <Box sx={{ position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#3498db', boxShadow: '0 0 10px #3498db' }} />
          </Box>

          {/* Right: Card */}
          <Box sx={{ width: { xs: '100%', md: '70%' }, pl: { xs: 0, md: 4 } }}>
            <Typography sx={{ display: { xs: 'block', md: 'none' }, backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 'bold', fontSize: '14px', mb: 2 }}>{item.date}</Typography>
            <Box className="premium-edu-card" sx={{ background: "rgba(20, 20, 25, 0.6)", backdropFilter: "blur(12px)", borderRadius: "15px", padding: "30px", border: "1px solid rgba(255, 255, 255, 0.05)", transition: "all 0.3s ease", "&:hover": { borderColor: "rgba(52, 152, 219, 0.4)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", transform: "translateX(5px)" } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontSize: "22px", color: "#fff", fontWeight: "bold" }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", mt: 0.5 }}>{item.inst}</Typography>
                </Box>
                <Box sx={{
                  background: "linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(142, 68, 173, 0.1))",
                  border: "1px solid rgba(142, 68, 173, 0.3)",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  height: "fit-content",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                }}>
                  <Typography sx={{
                    fontSize: "12px",
                    backgroundImage: "linear-gradient(120deg, #3498db, #e056fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase"
                  }}>
                    {item.type || 'Full-time'}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Box sx={{ display: 'flex', gap: '10px', alignItems: "flex-start" }}>
                  <Typography sx={{ color: '#3498db', mt: "2px", fontSize: "14px" }}>▸</Typography>
                  <Typography sx={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", textAlign: "left" }}>{item.desc}</Typography>
                </Box>
              </Box>

              {item.tech && (
                <>
                  <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", my: 3 }} />
                  <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {item.tech.map((t, i) => (
                      <Typography key={i} sx={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: "bold" }}>{t}</Typography>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

const Education = () => {
  const expData = [
    { date: "Oct 2025 - Current", duration: "Present", title: "Junior Software Engineer", inst: "Catalyst Consulting Pvt Ltd", desc: "Spearheading the design and development of proprietary software products using React. Focused on crafting scalable frontend architectures and delivering intuitive, high-quality user experiences.", type: "Full-time", tech: ["React", "JavaScript", "Frontend Architecture", "UI/UX"] },
    { date: "May 2022 - Apr 2024", duration: "2 years", title: "Web Developer | React Developer", inst: "SIVRA", desc: "Developing User Interfaces: Designing and developing interactive user interfaces using ReactJS, JSX, and other related technologies.", type: "Full-time", tech: ["ReactJS", "JSX", "HTML/CSS", "JavaScript"] }
  ];

  const educationData = [
    { date: "Jan 2022 - Dec 2023", duration: "2 years", title: "MCA", inst: "University of Madras", desc: "Completed My Post Graduate degree in MCA", type: "Post Graduate" },
    { date: "Jul 2018 - Apr 2021", duration: "3 years", title: "Bsc.Computer Science", inst: "Guru Nanak College (Chennai)", desc: "Completed My Bachelor Degree in Computer With First Class", type: "Under Graduate" },
    { date: "Jun 2016 - Apr 2018", duration: "2 years", title: "HSC", inst: "Sri Ramakrishna Mission (Main)", desc: "Completed My Higher Secondary with 80%", type: "Schooling" }
  ];

  const certData = [
    { date: "Jan 2024 - Feb 2024", duration: "1 month", title: "Programming with JavaScript", inst: "Coursera", desc: "An online non-credit course authorized by Meta and offered through Coursera", type: "Certification" },
    { date: "Dec 2021 - Feb 2022", duration: "3 months", title: "React", inst: "DLK Institute", desc: "Complete Certification Course in React JS including DOM, React Components, Props And State and React Hooks", type: "Certification" }
  ];

  return (
    <div>
      <div id="education">
        <Box sx={{ backgroundColor: "#141518!important", textAlign: "center", padding: "80px 0%" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ position: "relative", textAlign: "center", mb: 10, mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "35px", color: "white", mb: 1 }}>
                    My Journey
                  </Typography>
                </Box>
                <Divider sx={{ background: "linear-gradient(135deg, #3498db, #8e44ad)", height: "4px", width: "80px", borderRadius: "2px", zIndex: 1 }} />

                <Typography sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: { xs: "-20px", md: "-40px" }, fontSize: { xs: "55px", md: "110px" }, fontWeight: "900", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.08)", textShadow: "0 10px 30px rgba(0,0,0,0.5)", letterSpacing: { xs: "5px", md: "10px" }, textTransform: "uppercase", zIndex: 0, pointerEvents: "none", width: "100%", textAlign: "center", lineHeight: 1 }}>
                  RESUME
                </Typography>
              </Box>

              <Box sx={{ marginTop: "2rem" }}>
                <TimelineSection title="Experience" items={expData} />
                <TimelineSection title="Education" items={educationData} />
                <TimelineSection title="Certification" items={certData} />
              </Box>

            </Box>
          </Container>
        </Box>
      </div>
    </div>
  )
}

export default Education
