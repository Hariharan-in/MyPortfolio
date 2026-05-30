import React from 'react'
import { Link } from 'react-scroll'
import { Box, Typography } from '@mui/material'
import '../Styles/home.css'



function Navbar() {

  return (
    <div id="navbar">

      <div className="web-nav">
        <nav>
          <a href='#'><Typography className='web-logo' sx={{ backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text", fontSize: "27px", textDecoration: 'none' }}>MyPortfolio</Typography></a>
          <ul className="nav-menu">
            <li className='nav_item'><Link className='nav_link' to="home" spy={true} smooth={true} duration={100}>Home</Link></li>
            <li className='nav_item'><Link className='nav_link' to="about" spy={true} smooth={true} duration={100}>About</Link></li>
            <li className='nav_item'><Link className='nav_link' to="education" spy={true} smooth={true} duration={100}>Education</Link></li>
            <li className='nav_item'><Link className='nav_link' to="testimonial" spy={true} smooth={true} duration={100}>My Skills</Link></li>
            <li className='nav_item'><Link className='nav_link' to="whatido" spy={true} smooth={true} duration={100}>What I Do</Link></li>

            {/* <li className='nav_item'><Link className='nav_link' to="portfolio" spy={true} smooth={true}  duration={100}>Portofolio</Link></li> */}
            {/* <li className='nav_item'><Link className='nav_link' to="testimonial" spy={true} smooth={true}  duration={100}>Testimonial</Link></li> */}
            <li className='nav_item'><Link className='nav_link' to="contact" spy={true} smooth={true} duration={100}>Contact</Link></li>
          </ul>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <a href='https://www.instagram.com/__h_a_r_i.______/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href='https://www.linkedin.com/in/hari-haran-s-88bb8320b/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='https://github.com/Hariharan-in/' target='_blank'><i class="fa-brands fa-github"></i></a>
          </Box>
        </nav>
      </div>



      <div className='mobile-nav'>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a href='#'><Typography className='web-logo' sx={{ color: "transparent", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", backgroundClip: "text", fontSize: "27px", marginTop: "10px" }}>MyPortfolio</Typography></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <Typography className='web-logo' sx={{ color: "aqua", fontSize: "22px" }}>MyWebsite</Typography>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className='nav_link' to="home" spy={true} smooth={true} offset={0} duration={100}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav_link' to="about" spy={true} smooth={true} offset={0} duration={100}>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav_link' to="education" spy={true} smooth={true} offset={0} duration={100}>Education</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav_link' to="testimonial" spy={true} smooth={true} offset={0} duration={100}>My Skills</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav_link' to="whatido" spy={true} smooth={true} offset={0} duration={100}>What I Do</Link>
                  </li>
                  {/* <li className="nav-item">
                      <Link className='nav_link' to="portfolio" spy={true} smooth={true} offset={0} duration={100}>Portofolio</Link>
                    </li> */}
                  {/* <li className="nav-item">
                      <Link className='nav_link' to="testimonial" spy={true} smooth={true} offset={0} duration={100}>Testimonial</Link>
                    </li> */}
                  <li className="nav-item">
                    <Link className='nav_link' to="contact" spy={true} smooth={true} offset={0} duration={100}>Contact</Link>
                  </li>
                  <li>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "60pxs" }}>
                      <a href='https://www.instagram.com/__h_a_r_i.______/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                      <a href='https://www.linkedin.com/in/hari-haran-s-88bb8320b/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href='https://github.com/Hariharan-in/' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                    </Box>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Navbar