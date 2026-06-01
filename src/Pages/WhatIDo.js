import { Typography, Box, Divider, Grid, Container } from '@mui/material'
import React from 'react'
import '../Styles/home.css'

const servicesData = [
  {
    category: "WEBSITE DEVELOPMENT",
    items: [
      {
        title: "Business website",
        desc: "Multi-page sites for companies, startups, and professionals",
        icon: "fa-solid fa-window-restore",
        tag: "Scalable Solutions",
        color: "#3498db"
      },
      {
        title: "Landing page",
        desc: "Single-page conversion-focused pages for products or offers",
        icon: "fa-solid fa-laptop",
        tag: "Lead Generation",
        color: "#3498db"
      },
      {
        title: "E-commerce store",
        desc: "Online shops with product listings, cart, and checkout",
        icon: "fa-solid fa-cart-shopping",
        tag: "High Conversion",
        color: "#3498db"
      },
      {
        title: "Database design",
        desc: "Schema design, optimization, and integration with apps",
        icon: "fa-solid fa-database",
        tag: "Optimized Schema",
        color: "#1abc9c"
      }
    ]
  },
  {
    category: "UI/UX & DESIGN",
    items: [
      {
        title: "UI design (Figma)",
        desc: "Wireframes, mockups, and design systems for web/apps",
        icon: "fa-solid fa-palette",
        tag: "User-Centric",
        color: "#8e44ad"
      },
      {
        title: "Responsive design",
        desc: "Making sites look great on all screen sizes and devices",
        icon: "fa-regular fa-eye",
        tag: "Mobile First",
        color: "#8e44ad"
      },
      {
        title: "Website redesign",
        desc: "Modernizing outdated websites with new design and code",
        icon: "fa-solid fa-rotate",
        tag: "Brand Refresh",
        color: "#8e44ad"
      }
    ]
  },
  {
    category: "MAINTENANCE & SUPPORT",
    items: [
      {
        title: "Website maintenance",
        desc: "Regular updates, bug fixes, backups, and security checks",
        icon: "fa-solid fa-screwdriver-wrench",
        tag: "Ongoing Support",
        color: "#e67e22"
      },
      {
        title: "Bug fixing",
        desc: "Debugging and resolving issues in existing websites/apps",
        icon: "fa-solid fa-bug",
        tag: "Rapid Resolution",
        color: "#e67e22"
      },
      {
        title: "Deployment & hosting setup",
        desc: "Deploy on AWS, Vercel, Netlify, or cPanel with SSL",
        icon: "fa-solid fa-cloud-arrow-up",
        tag: "Cloud Ready",
        color: "#e67e22"
      }
    ]
  }
];

const WhatIDo = () => {
  return (
    <div id="whatido">
      <Box sx={{ backgroundColor: "#212529", padding: "80px 0%" }}>
        <Box sx={{ position: "relative", textAlign: "center", mb: 10, mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "35px", color: "white", mb: 1 }}>
              What I Do?
            </Typography>
          </Box>
          <Divider sx={{ background: "linear-gradient(135deg, #3498db, #8e44ad)", height: "4px", width: "80px", borderRadius: "2px", zIndex: 1 }} />

          <Typography sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: { xs: "-20px", md: "-40px" }, fontSize: { xs: "55px", md: "110px" }, fontWeight: "900", color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.08)", textShadow: "0 10px 30px rgba(0,0,0,0.5)", letterSpacing: { xs: "5px", md: "10px" }, textTransform: "uppercase", zIndex: 0, pointerEvents: "none", width: "100%", textAlign: "center", lineHeight: 1 }}>
            SERVICES
          </Typography>
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {servicesData.map((categorySection, index) => (
              <Box key={index}>
                <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: "bold", letterSpacing: "1.5px", textTransform: "uppercase", mb: 3, opacity: 0.8 }}>
                  {categorySection.category}
                </Typography>

                <Grid container spacing={3}>
                  {categorySection.items.map((service, idx) => (
                    <Grid item xs={12} sm={6} md={categorySection.items.length === 4 ? 3 : 4} key={idx}>
                      <Box className="service-card" sx={{ p: 4, borderRadius: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "25px", background: "rgba(15, 15, 20, 0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.05)", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", "&:hover": { transform: "translateY(-10px)", boxShadow: `0 15px 40px ${service.color}33`, border: `1px solid ${service.color}80` } }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "60px", height: "60px", borderRadius: "16px", background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`, border: `1px solid ${service.color}50`, boxShadow: `0 0 20px ${service.color}20` }}>
                            <i className={service.icon} style={{ fontSize: '28px', color: service.color }}></i>
                          </Box>
                          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Typography sx={{ color: "#fff", fontSize: "22px", fontWeight: "bold", letterSpacing: "0.5px" }}>{service.title}</Typography>
                            <Typography sx={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7", fontSize: "15px", fontWeight: "300" }}>{service.desc}</Typography>
                          </Box>
                        </Box>

                        {service.tag && (
                          <Box sx={{ mt: 2, alignSelf: "flex-start", backgroundColor: `${service.color}15`, border: `1px solid ${service.color}40`, color: service.color, padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>
                            {service.tag}
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default WhatIDo