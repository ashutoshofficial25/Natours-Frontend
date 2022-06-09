import React from "react";
import { Box, Grid, Link, makeStyles, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src="https://www.natours.dev/img/logo-green.png"
          height={36}
          alt="logo-available"
        />
        <Grid>
          <Link href="#" underline="none">
            About Us
          </Link>
          <Link href="#" underline="none">
            Download App
          </Link>
          <Link href="#" underline="none">
            Become a Guide
          </Link>
          <Link href="#" underline="none">
            Carriers
          </Link>
          <Link href="#" underline="none">
            Contact Us
          </Link>
          <Typography> Created By Ashutosh Maurya</Typography>
        </Grid>
      </Box>
    </div>
  );
};
export default Footer;
