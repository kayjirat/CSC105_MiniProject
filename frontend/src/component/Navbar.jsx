import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

  let navigate = useNavigate();
        const handleClick = (destination) => {
            navigate(destination);
        }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#F2F0E7" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "black", fontFamily: 'Scope One', cursor: 'pointer'}} onClick={() => handleClick("/home")}>
            ART COLLECTION
          </Typography>
          <Box display={{xs:"none", md:"block" }}>
            <Button onClick={() => handleClick("/home")} sx={{color: "black", fontFamily: 'Lora'}} >Home</Button>
            <Button onClick={() => handleClick("/exhibition")} sx={{color: "black", fontFamily: 'Lora'}}>Exhibition</Button>
            <Button onClick={() => handleClick("/event")} sx={{color: "black", fontFamily: 'Lora'}}>Event</Button>
            <Button onClick={() => handleClick("/aboutus")} sx={{color: "black", fontFamily: 'Lora'}}>About us</Button>
          </Box>
          <IconButton onClick={() => handleClick("/profile")}>
            <AccountCircleIcon/>
          </IconButton >
          <IconButton sx={{display:{xs:"block",md:"none"},color:"balck"}}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}