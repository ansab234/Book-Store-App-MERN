import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div>
      {/* <Header/> */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;
