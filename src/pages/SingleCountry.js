import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

//https://app.abstractapi.com/api/holidays/pricing
//API
import axios from '../config/api';

import { ThemeProvider ,Box, Card, CardActions, CardContent, CardMedia, Typography, Grid ,Button } from "@mui/material";

import Loading from '../components/Loading'


import customtheme from '../theme'



const SingleCountry = () => {
    
    let { name } = useParams();
    let navigate = useNavigate();

    

    const [country, setCountry] = useState([]);
    const [holidays, setHolidays] = useState([]);
    const [alpha2Code, setAlpha2Code] = useState("");

   

    useEffect(() => {
        axios.get(`/name/${name}?fullText=true`)
             .then((response) => {
                setCountry(response.data[0]);
                setAlpha2Code(response.data[0].alpha2Code);
                holidaysApi();
             })
             .catch((error) => {
                console.log(error);
                navigate('/country');
             });
    }, []);

    const holidaysApi = () => {
        console.log(alpha2Code)
        axios.get(`https://holidays.abstractapi.com/v1/?api_key=4347605faf344efc8645549af1840be8&country=${alpha2Code}&year=2020`)
              .then((response) => {
                 console.log(response.data)
                 setHolidays(response.data);
             })
              .catch((error) => {
                 console.log(error);
              }); 
        
   }
    
    

    let html = <Loading/>

    if(country){
        html = (
            <>
             <ThemeProvider theme={customtheme}>
            
            <Grid  xs={12} sm={12} lg={12}>
            
                    <Card sx={{ mt:4, color: 'customCard.white', border: '1px solid #414147', borderRadius: '6px' }}>
                        
                      
                            <Box sx={{pl:5, pr:5, pt:5,  gridArea: 'header' }}>
                            
                                <Typography color="customCard.white" gutterBottom variant="h4" component="div">
                                    {(country && country.name) ? country.name.common : "loading"}
                                </Typography>
                           
                            </Box>

                            <Box sx={{p: 5, display: 'flex'}}>
                            
                                <Grid xs={6}>
                                
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Region</p>
                                        </Typography>
                                        <Typography color="customCard.white" gutterBottom variant="h4" component="div">
                                            <p>{(country && country.region) ? country.region : "loading"}</p>
                                        </Typography>
                                    </Box>
                                    
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Capital</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                        <p>{(country && country.capital) ? country.capital : "loading"}</p>
                                        </Typography>
                                    </Box>

                                    

                                    
                                </Grid>
                               
                                <Grid xs={6}>
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Population</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                            <p>{(country && country.population) ? country.population : "loading"}</p>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={6}>
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Currencies</p>
                                        </Typography>
                                        
                                        {/* <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                        {Object.values(country.currencies)[0].name}
                                            <p>{(country && Object.values(country.currencies)[0].name) ? Object.values(country.currencies)[0].name : "loading"}</p>
                                        </Typography> */}
                                    </Box>
                                </Grid>

                                <Grid xs={12}>
                                    <CardMedia sx={{ borderRadius: '6px' }} height="100%" width="100%" component="img" src={country?.flags?.png}  />  
                                </Grid> 
                               
                            
                            
                            </Box>
                            <Box>
                            <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                         {/*    <p>Holiday name: {holidays[0].name}</p> */}
                            </Typography>
                            </Box>

                    </Card>
            </Grid>
        </ThemeProvider>
            </>
        );
    }


    /* Return HTML for loading feature */
    return(
        
        <>
        {html}
            





           
          
        </>
        

    )
    
}

export default SingleCountry;