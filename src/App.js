import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Grid, ThemeProvider, CssBaseline } from "@mui/material";

//Pages
import Home from './pages/Home'

import SingleCountry from './pages/SingleCountry'

import customtheme from './theme'




let App = () => {

 return(
  <ThemeProvider theme={customtheme}>
    <CssBaseline>
    <Router>
        <Container  maxWidth="md">        
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/country/:name' element={<SingleCountry/>}/>
            </Routes>
    
      </Container>
      
      
    </Router>
    </CssBaseline>
  </ThemeProvider>

 )

}

export default App;
