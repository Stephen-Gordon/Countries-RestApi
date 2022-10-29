import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Grid } from "@mui/material";

//Pages
import Home from './pages/Home'

import SingleCountry from './pages/SingleCountry'

//// MUI





let App = () => {

 return(
  
  <Router>
      <Container maxWidth="sm">        
           <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/country/:name' element={<SingleCountry/>}/>
           </Routes>
  
    </Container>
    
    
  </Router>

 )

}

export default App;
