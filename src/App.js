import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Container, ThemeProvider, CssBaseline } from "@mui/material";

//Pages
import Home from './pages/Home'

import SingleCountry from './pages/SingleCountry'

import customtheme from './theme'
import NavBar from './components/NavBar'
import PageNotFound from "./pages/PageNotFound";




let App = () => {

 return(
  <ThemeProvider theme={customtheme}>
    <CssBaseline>
    <Router>
      <NavBar/>
        <Container  maxWidth="md">        
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/country' element={<PageNotFound/>}/>
              <Route path='/country/:name' element={<SingleCountry/>}/>
            </Routes>
    
      </Container>
      
      
    </Router>
    </CssBaseline>
  </ThemeProvider>

 )

}

export default App;
