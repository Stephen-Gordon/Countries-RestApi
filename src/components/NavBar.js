
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import customtheme from '../theme'
import Home from "../pages/Home";

import {Box, Typography,TextField } from '@mui/material';




const linkStyle = {
  textDecoration: "none"
};

const NavBar = () => {
    return (
        <>
            <Box sx={{pl:5, pr:5, pt:5,  gridArea: 'header' }}>
                <Link style={linkStyle} underline="none"  to={`/`}>
                    <Typography color="customCard.light" gutterBottom variant="h4" component="div">
                        Home
                    </Typography>
                </Link>
            </Box>
          
        </>
    )
}

export default NavBar;