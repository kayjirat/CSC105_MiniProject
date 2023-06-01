import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../component/Navbar";

export default Error = () => {
  return (
    <Box sx={{ backgroundColor: "#CBD4D5", height: "100vh" }}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30vh",
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: "Lora", color: "black" }}>
          404 Not Found
        </Typography>
        <img style={{ width: "15vw" }} src="../logo.png" />
      </Box>
    </Box>
  );
};
