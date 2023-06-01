import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../component/Navbar";

export default Error = () => {
  return (
    <Box sx={{ backgroundColor: "white", height: "100vh" }}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: "Lora", color: "black" }}>
          404 Not Found
        </Typography>
        <img style={{ width: "10vw" }} src="/public/logofor404.png" />
      </Box>
    </Box>
  );
};