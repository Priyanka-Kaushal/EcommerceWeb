import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

      <Box
        sx={{
          position:"fixed",
          bottom: 0,
          width: '100%',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#1976d2",
          zIndex: 1, 
        }}
      >
        <Box sx={{ display: "flex", gap:2}}>
    
          <a
            href="https://www.facebook.com/shonazBeNatural/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/shonazbenatural/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            Instagram
          </a>
          <a
            href="https://www.amazon.in/SHONAZ-BENATURAL-Organic-Cotton-Natural/dp/B0CQVCBRBT"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            Amazon
          </a>
        </Box>

        <Typography sx={{ color: "white", fontSize: "14px" }}>
          © 2024 Copyright: All Rights Reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, paddingInline: 4}}> 
          <Link
            to="/terms-of-service"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            Terms Of Services
          </Link>
          <Link
            to="/privacy-policy"
            style={{ color: "white", textDecoration: "none", fontSize: "14px" }}
          >
            Privacy
          </Link>
        </Box>
      </Box>
  );
};

export default Footer;

