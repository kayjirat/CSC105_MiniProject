import React from "react";
import { Box } from '@mui/material';

function Footer() {
    return(
        <Box className="footerBackground" style={{backgroundColor:'#F2F0E7',
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            marginLeft: '0vh',
            fontFamily: "Lora",
            textAlign: 'center',
            padding: '1.6%'}}>
            <footer>
                <p>Telephone: 012-121-2111 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Email: ArtCollection@gmail.com</p>
                <br/>
                <p> &copy;All Rights Reserved &ensp;|&ensp;Art Collection</p>
            </footer>
        </Box>

    );
}

export default Footer;

