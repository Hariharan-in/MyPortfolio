import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Box, Typography } from '@mui/material'
import '../Styles/home.css'



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandLogo = (
    <Box sx={{
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, rgba(52, 152, 219, 0.15), rgba(142, 68, 173, 0.15))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "rotate(-10deg) scale(1.05)",
        boxShadow: "0 6px 20px rgba(52, 152, 219, 0.3)",
        border: "1px solid rgba(52, 152, 219, 0.4)",
        background: "linear-gradient(135deg, rgba(52, 152, 219, 0.25), rgba(142, 68, 173, 0.25))",
      }
    }}>
      <Typography sx={{ 
        fontSize: "22px", 
        fontWeight: "900", 
        backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", 
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        lineHeight: 1
      }}>
        H
      </Typography>
    </Box>
  );

  return (
    <div id="navbar">

      <div className="web-nav">
        <nav style={{ 
          background: isScrolled ? "rgba(10, 10, 12, 0.85)" : "#000000",
          backdropFilter: isScrolled ? "blur(15px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none"
        }}>
          <a href='#' style={{ textDecoration: 'none' }}>{brandLogo}</a>
          <ul className="nav-menu">
            <li className='nav_item'><Link className='nav_link' to="home" spy={true} smooth={true} duration={100} offset={-80}>Home</Link></li>
            <li className='nav_item'><Link className='nav_link' to="about" spy={true} smooth={true} duration={100} offset={-80}>About</Link></li>
            <li className='nav_item'><Link className='nav_link' to="education" spy={true} smooth={true} duration={100} offset={-80}>Education</Link></li>
            <li className='nav_item'><Link className='nav_link' to="testimonial" spy={true} smooth={true} duration={100} offset={-80}>My Skills</Link></li>
            <li className='nav_item'><Link className='nav_link' to="whatido" spy={true} smooth={true} duration={100} offset={-80}>What I Do</Link></li>
            <li className='nav_item'><Link className='nav_link' to="contact" spy={true} smooth={true} duration={100} offset={-80}>Contact</Link></li>
          </ul>
          <Box sx={{ display: "flex", gap: "20px" }}>
            {[
              { icon: "fa-instagram", link: "https://www.instagram.com/__h_a_r_i.______/" },
              { icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/hari-haran-s-88bb8320b/" },
              { icon: "fa-github", link: "https://github.com/Hariharan-in/" }
            ].map((item, index) => (
              <a key={index} href={item.link} target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                <Box component="i" className={`fa-brands ${item.icon}`} sx={{ 
                  color: "rgba(255,255,255,0.6)", 
                  fontSize: "20px", 
                  transition: "all 0.3s ease", 
                  "&:hover": { 
                    backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    transform: "translateY(-2px)"
                  } 
                }} />
              </a>
            ))}
          </Box>
        </nav>
      </div>



      <div className='mobile-nav'>
        <nav className="navbar navbar-dark fixed-top" style={{ 
          background: isScrolled ? "rgba(10, 10, 12, 0.85)" : "#000000",
          backdropFilter: isScrolled ? "blur(15px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease"
        }}>
          <div className="container-fluid" style={{ background: "transparent" }}>
            <a href='#' style={{ textDecoration: 'none', marginTop: "4px" }}>{brandLogo}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" style={{ border: "none", padding: "0" }}>
              <i className="fa-solid fa-bars-staggered" style={{ fontSize: "28px", backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}></i>
            </button>
          </div>
        </nav>
        
        <div className="offcanvas offcanvas-end" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{ background: "rgba(10, 10, 12, 0.95)", backdropFilter: "blur(20px)", borderLeft: "1px solid rgba(255,255,255,0.05)", width: "300px", zIndex: 1045 }}>
          <div className="offcanvas-header" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "25px 30px" }}>
            <a href='#' style={{ textDecoration: 'none' }}>{brandLogo}</a>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" style={{ opacity: 0.8 }}></button>
          </div>
          <div className="offcanvas-body" style={{ padding: "40px 30px", display: "flex", flexDirection: "column" }}>
            <ul className="navbar-nav justify-content-start flex-grow-1" style={{ gap: "25px" }}>
              {[
                { name: "Home", to: "home" },
                { name: "About", to: "about" },
                { name: "Education", to: "education" },
                { name: "My Skills", to: "testimonial" },
                { name: "What I Do", to: "whatido" },
                { name: "Contact", to: "contact" }
              ].map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <Link 
                    className='nav_link' 
                    to={item.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={100}
                    data-bs-dismiss="offcanvas"
                    style={{ fontSize: "18px", fontWeight: "600", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "1px", textDecoration: "none", cursor: "pointer", transition: "color 0.3s ease" }}
                    activeStyle={{ color: "#3498db" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
              
            <Box sx={{ mt: "auto", pt: "40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", mb: 3 }}>Follow Me</Typography>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: "25px" }}>
                {[
                  { icon: "fa-instagram", link: "https://www.instagram.com/__h_a_r_i.______/" },
                  { icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/hari-haran-s-88bb8320b/" },
                  { icon: "fa-github", link: "https://github.com/Hariharan-in/" }
                ].map((item, index) => (
                  <a key={index} href={item.link} target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <Box component="i" className={`fa-brands ${item.icon}`} sx={{ 
                      color: "rgba(255,255,255,0.6)", 
                      fontSize: "24px", 
                      transition: "all 0.3s ease", 
                      "&:hover": { 
                        backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", 
                        WebkitBackgroundClip: "text", 
                        WebkitTextFillColor: "transparent",
                        transform: "translateY(-2px)"
                      } 
                    }} />
                  </a>
                ))}
              </Box>
            </Box>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar