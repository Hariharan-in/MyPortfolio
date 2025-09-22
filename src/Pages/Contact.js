import { Typography, Box, Divider, Grid, TextField, Container } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { Link } from 'react-scroll'


const StyledTextField = styled(TextField)({

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: ""
    },
    "&:hover fieldset": {
      borderColor: "aqua",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "Aqua"
    },


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
    alert("Please fill all the data");
    return;
  }

  if (phone.length !== 10) {
    alert("Invalid Mobile Number");
    return;
  }

  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) {
    alert("Invalid Email");
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

      // Show alert
      document.querySelector(".alert").style.display = "block";

      // Hide alert
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);
    } else {
      alert("Something went wrong while saving data");
    }
  } catch (error) {
    console.error(error);
    alert("Error while submitting data");
  }
};



  return (
    <div id="contact">
      <Box sx={{ height: "100%", backgroundColor: "#212529", padding: "50px 0%" }}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography className="contact-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>CONTACT</Typography>
              <Box className="contact-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className='contact-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Get in Touch</Typography>
                <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
              </Box>
            </Box>
          </Box>

          <Box>
            <Grid container rowSpacing={10} columnSpacing={10}>
              <Grid item xs={12} sm={12} md={8}>
                <Box >
                  <Typography sx={{ fontSize: "24px", color: "#fff" }}>Send Us a Note</Typography>
                  <Divider sx={{ bgcolor: "aqua", height: "4px", width: "60px", justifyContent: "center", marginTop: "10px" }}></Divider>
                  <form method="POST">
                    <Grid container rowSpacing={5} columnSpacing={2} marginTop={0}>

                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          autoComplete='nope'
                          value={userData.name}
                          name='name'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Name'
                          sx={{ width: "100%" }} InputProps={{
                            style: {
                              color: "#fff",
                              fontSize: "18px",
                            }
                          }} />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          autoComplete="new-password"
                          type="number"
                          value={userData.phone}
                          name='phone'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Phone'
                          sx={{ width: "100%" }} InputProps={{
                            style: {
                              color: "#fff",
                              fontSize: "18px",
                            }
                          }} />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          value={userData.email}
                          name='email'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Email'
                          sx={{ width: "100%" }} InputProps={{
                            style: {
                              color: "#fff",
                              fontSize: "18px",
                            }
                          }} />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          value={userData.subject}
                          name='subject'
                          onChange={postUserData}
                          variant="outlined"
                          placeholder='Subject'
                          sx={{ width: "100%" }} InputProps={{
                            style: {
                              color: "#fff",
                              fontSize: "18px",
                            }
                          }} />
                      </Grid>



                      <Grid item xs={12} sm={12}>
                        <StyledTextField multiline
                          rows={5}
                          maxRows={10}
                          value={userData.message}
                          onChange={postUserData}
                          name='message'
                          variant="outlined"
                          placeholder='Tell me more about you needs.....'
                          sx={{ width: "100%" }} InputProps={{
                            style: {
                              color: "#fff",
                              fontSize: "18px",
                            }
                          }} />
                      </Grid>
                    </Grid>

                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "30px", alignContent: "center", alignItems: "center" }}>
                      <Grid container rowSpacing={0} columnSpacing={0}>
                        <Grid item xs={12} sm={6}>
                          <Box type='submit' className='submit-btn' onClick={submitData} sx={{ display: 'flex', flexDirection: "row", textAlign: "center", gap: "10px" }}>
                            <i class="fa-solid fa-paper-plane"></i>
                            <Typography>Send</Typography>
                          </Box>

                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Box className="alert"
                            sx={{ justifyContent: "space-evenly", width: "70%", textAlign: "center", padding: "5px", borderRadius: "5px" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                              <i className="fa-solid fa-check"></i>
                              <Typography className='alert-typo' sx={{ color: "white" }}> Message send Successfully</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </form>
                </Box>
              </Grid>


              <Grid item xs={12} sm={12} md={4}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                    <Divider sx={{ bgcolor: "aqua", height: "30px", width: "3px", justifyContent: "center" }}></Divider>
                    <Typography sx={{ color: "#fff", fontSize: "20px" }}>Contact Us</Typography>
                  </Box>
                  <Typography sx={{ color: "GrayText", fontSize: "13px" }}>If you have any questions regarding Me, please do not hesitate to get in touch with Me today using the simple contact form on this page.</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "10px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                    <Divider sx={{ bgcolor: "aqua", height: "30px", width: "3px", justifyContent: "center" }}></Divider>
                    <Typography sx={{ color: "#fff", fontSize: "20px" }}>Contact Details</Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: "15px", marginTop: '10px' }}>
                    <i class="fa-solid fa-location-dot"></i>
                    <Typography sx={{ color: "grey" }}>Chennai, India</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "15px" }} className="cnt-link">
                    <i class="fa-solid fa-phone"></i>
                    <Typography sx={{ color: "grey" }}><a href="tel:6369260614">6369260614</a></Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "15px" }} className="cnt-link">
                    <i class="fa-regular fa-envelope"></i>
                    <Typography type="email" sx={{ color: "aqua" }}><a href="mailto:harisankar11a@gmail.com">harisankar11a@gmail.com</a></Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "40px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                    <Divider sx={{ bgcolor: "aqua", height: "30px", width: "3px", justifyContent: "center" }}></Divider>
                    <Typography sx={{ color: "#fff", fontSize: "20px" }}>Follow Me</Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <a href='https://www.instagram.com/__h_a_r_i.______/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/hari-haran-s-88bb8320b/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                    {/* <a href='#'><i className="fa-brands fa-facebook"></i></a> */}
                    <a href='https://github.com/Hariharan-in/' target='_blank'><i class="fa-brands fa-github"></i></a>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#343A40!important" }}>
        <Box sx={{ padding: "3% 0% 2% 5%" }}>
          <Grid container rowSpacing={2} columnSpacing={0}>
            <Grid item xs={12} sm={6}>
              <Typography className='footer-typo' sx={{ color: "aqua", fontSize: "17px" }}>We define Your project and Your goals together with You</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <ul className='footer-nav'>
                  <li ><Link to="home" spy={true} smooth={true} offset={0} duration={400}>Home</Link></li>
                  <li><Link to="about" spy={true} smooth={true} offset={0} duration={400}>About</Link></li>
                  <li><Link to="education" spy={true} smooth={true} offset={0} duration={400}>Education</Link></li>
                  <li><Link to="testimonial" spy={true} smooth={true} offset={0} duration={400}>My Skills</Link></li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </div>
  )
}

export default Contact

