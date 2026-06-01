import { Typography, Box, Divider, Grid, TextField, Container, Button, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { Link } from 'react-scroll'

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease"
    },
    "&:hover fieldset": {
      borderColor: "rgba(52, 152, 219, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8e44ad",
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    fontSize: "16px",
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #1a1a24 inset",
      WebkitTextFillColor: "#fff",
      transition: "background-color 5000s ease-in-out 0s"
    }
  }
});

function Contact() {

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState({ open: false, message: "", severity: "success" });

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') return;
    setToast({ ...toast, open: false });
  };

  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // Connect with Firebase
  const submitData = async (e) => {
    e.preventDefault();

    const { name, phone, email, subject, message } = userData;

    // ✅ Validation first
    if (!name || !phone || !email || !subject || !message) {
      setToast({ open: true, message: "Please fill all the fields to continue.", severity: "warning" });
      return;
    }

    if (phone.length !== 10) {
      setToast({ open: true, message: "Please enter a valid 10-digit mobile number.", severity: "error" });
      return;
    }

    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) {
      setToast({ open: true, message: "Please enter a valid email address.", severity: "error" });
      return;
    }

    try {
      // ✅ Only store if validations passed
      const res = await fetch(
        "https://myprofile-7ss-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            subject,
            message,
          }),
        }
      );

      if (res.ok) {
        setUserData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

        setToast({ open: true, message: "Message sent successfully! I will get back to you soon.", severity: "success" });
      } else {
        setToast({ open: true, message: "Something went wrong while saving data.", severity: "error" });
      }
    } catch (error) {
      console.error(error);
      setToast({ open: true, message: "Network error while submitting data.", severity: "error" });
    }
  };

  return (
    <div id="contact">
      <Box sx={{ height: "100%", backgroundColor: "#141419", padding: "100px 0%" }}>
        <Container>
          <Box sx={{ position: "relative", textAlign: "center", mb: 10, mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "35px", color: "white", mb: 1 }}>
                Get in Touch
              </Typography>
            </Box>
            <Divider sx={{ background: "linear-gradient(135deg, #3498db, #8e44ad)", height: "4px", width: "80px", borderRadius: "2px", zIndex: 1 }} />

            <Typography sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: { xs: "-20px", md: "-40px" }, fontSize: { xs: "55px", md: "110px" }, fontWeight: "900", color: "transparent", backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)", WebkitBackgroundClip: "text", opacity: 0.15, letterSpacing: { xs: "5px", md: "10px" }, textTransform: "uppercase", zIndex: 0, pointerEvents: "none", width: "100%", textAlign: "center", lineHeight: 1 }}>
              CONTACT
            </Typography>
          </Box>

          <Box>
            <Grid container rowSpacing={6} columnSpacing={8}>
              {/* Form Section */}
              <Grid item xs={12} md={7}>
                <Box sx={{
                  background: "rgba(20, 20, 25, 0.6)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  padding: { xs: "30px", md: "50px" },
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
                }}>
                  <Typography sx={{ fontSize: "28px", fontWeight: "bold", color: "#fff", mb: 1 }}>Send a Message</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", mb: 4 }}>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</Typography>

                  <form method="POST">
                    <Grid container rowSpacing={4} columnSpacing={3}>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          autoComplete='off'
                          value={userData.name}
                          name='name'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Your Name'
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          autoComplete="off"
                          type="number"
                          value={userData.phone}
                          name='phone'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Phone Number'
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          value={userData.email}
                          name='email'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Email Address'
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          value={userData.subject}
                          name='subject'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Subject'
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <StyledTextField
                          multiline
                          rows={6}
                          value={userData.message}
                          onChange={postUserData}
                          name='message'
                          variant="outlined"
                          placeholder='Tell me more about your needs...'
                          fullWidth
                        />
                      </Grid>
                    </Grid>

                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", mt: 4, gap: 3 }}>
                      <Button
                        onClick={submitData}
                        sx={{
                          background: "linear-gradient(135deg, #3498db, #8e44ad)",
                          color: "#fff",
                          padding: "12px 35px",
                          borderRadius: "30px",
                          fontWeight: "bold",
                          fontSize: "16px",
                          textTransform: "none",
                          whiteSpace: "nowrap",
                          boxShadow: "0 5px 15px rgba(52, 152, 219, 0.4)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 8px 25px rgba(52, 152, 219, 0.6)",
                          }
                        }}
                      >
                        <i className="fa-solid fa-paper-plane" style={{ marginRight: "10px" }}></i>
                        Send Message
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Grid>

              {/* Contact Details Section */}
              <Grid item xs={12} md={5}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "40px", height: "100%", justifyContent: "center", pl: { md: 4 } }}>

                  {/* Item 1 */}
                  <Box>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", mb: 1 }}>Contact Info</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: 3 }}>
                      <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(52, 152, 219, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(52, 152, 219, 0.2)" }}>
                        <i className="fa-solid fa-location-dot" style={{ color: "#3498db", fontSize: "20px" }}></i>
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}>Location</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "15px" }}>Chennai, India</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: 3 }}>
                      <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(142, 68, 173, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(142, 68, 173, 0.2)" }}>
                        <i className="fa-solid fa-phone" style={{ color: "#8e44ad", fontSize: "20px" }}></i>
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}>Phone</Typography>
                        <a href="tel:6369260614" style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)", fontSize: "15px", transition: "color 0.3s ease" }} onMouseOver={(e) => e.target.style.color = "#8e44ad"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.6)"}>6369260614</a>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      <Box sx={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(52, 152, 219, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(52, 152, 219, 0.2)" }}>
                        <i className="fa-regular fa-envelope" style={{ color: "#3498db", fontSize: "20px" }}></i>
                      </Box>
                      <Box>
                        <Typography sx={{ color: "#fff", fontSize: "18px", fontWeight: "bold" }}>Email</Typography>
                        <a href="mailto:harisankar11a@gmail.com" style={{ textDecoration: "none", color: "rgba(255,255,255,0.6)", fontSize: "15px", transition: "color 0.3s ease" }} onMouseOver={(e) => e.target.style.color = "#3498db"} onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.6)"}>harisankar11a@gmail.com</a>
                      </Box>
                    </Box>
                  </Box>

                  {/* Socials */}
                  <Box>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", mb: 2 }}>Follow Me</Typography>
                    <Box sx={{ display: "flex", gap: "15px" }}>
                      {[
                        { icon: "fa-instagram", link: "https://www.instagram.com/__h_a_r_i.______/" },
                        { icon: "fa-linkedin-in", link: "https://www.linkedin.com/in/hari-haran-s-88bb8320b/" },
                        { icon: "fa-github", link: "https://github.com/Hariharan-in/" }
                      ].map((social, i) => (
                        <a key={i} href={social.link} target='_blank' rel="noreferrer" style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.05)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          color: "rgba(255,255,255,0.6)",
                          transition: "all 0.3s ease",
                          border: "1px solid rgba(255,255,255,0.05)"
                        }}
                          onMouseOver={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #3498db, #8e44ad)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 5px 15px rgba(52, 152, 219, 0.4)"; }}
                          onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                        >
                          <i className={`fa-brands ${social.icon}`} style={{ fontSize: "18px" }}></i>
                        </a>
                      ))}
                    </Box>
                  </Box>

                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box sx={{
        backgroundColor: "#0a0a0c",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        padding: { xs: "40px 20px", md: "40px 5%" }
      }}>
        <Grid container alignItems="center" justifyContent="space-between" rowSpacing={3}>
          {/* Nav Items (Top on mobile, Left on desktop) */}
          <Grid item xs={12} md={6}>
            <Box component="ul" sx={{
              listStyle: "none",
              display: "flex",
              gap: { xs: "15px", sm: "30px" },
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" }
            }}>
              {[
                { name: "Home", to: "home" },
                { name: "About", to: "about" },
                { name: "Education", to: "education" },
                { name: "My Skills", to: "testimonial" }
              ].map((link, i) => (
                <Box component="li" key={i} sx={{ margin: 0 }}>
                  <Link
                    to={link.to}
                    spy={true} smooth={true} offset={-80} duration={400}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "14px",
                      textDecoration: "none",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}
                    onMouseEnter={(e) => { e.target.style.color = "#3498db" }}
                    onMouseLeave={(e) => { e.target.style.color = "rgba(255,255,255,0.5)" }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Copyright (Bottom on mobile, Right on desktop) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: { xs: "center", md: "flex-end" }, alignItems: "center", gap: "8px", mt: { xs: 2, md: 0 }, pr: { xs: 0, md: 8, lg: 12 } }}>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: { xs: "12px", sm: "15px" }, fontWeight: "500", whiteSpace: "nowrap" }}>
                © 2026 All Rights Reserved.
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.2)", fontSize: { xs: "12px", sm: "15px" } }}>|</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: { xs: "12px", sm: "15px" }, fontWeight: "500", whiteSpace: "nowrap" }}>
                Design by{" "}
                <Typography component="span" sx={{
                  backgroundImage: "linear-gradient(135deg, #3498db, #8e44ad)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  fontSize: { xs: "13px", sm: "16px" },
                  letterSpacing: "0.5px"
                }}>
                  Hari
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: 10 }}
      >
        <Alert onClose={handleCloseToast} severity={toast.severity} variant="filled" sx={{ width: '100%', borderRadius: "10px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Contact

