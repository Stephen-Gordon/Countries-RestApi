import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';


//API
import axios from '../config/api';

import { ThemeProvider ,Box, Card, CardActions, CardContent, CardMedia, Typography, Grid ,Button } from "@mui/material";

import Loading from '../components/Loading'


import {  } from '@mui/material';
import { borders, display } from '@mui/system';

import customtheme from '../theme'



const SingleCountry = () => {
    
    let { name } = useParams();
    let navigate = useNavigate();

    const [country, setCountry] = useState([]);


    useEffect(() => {
        axios.get(`/name/${name}?fullText=true`)
             .then((response) => {
                // console.log(response.data);
                setCountry(response.data[0]);
             })
             .catch((error) => {
                console.log(error);
                navigate('/country');
             });
    }, []);

    let html = <Loading/>

    if(country){
        html = (
            <>
             <ThemeProvider theme={customtheme}>
            
            <Grid  xs={12} sm={12} lg={12}>
            
                    <Card sx={{ mt:4, color: 'customCard.white', border: '1px solid #2C3A43', borderRadius: '6px' }}>
                        
                      
                            <Box sx={{pl:5, pr:5, pt:5,  gridArea: 'header' }}>
                            
                                <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                    {(country && country.name) ? country.name.common : "loading"}
                                </Typography>
                           
                            </Box>

                            <Box sx={{p: 5, display: 'flex'}}>
                            
                                <Grid xs={6}>
                                
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="" component="div">
                                            <p>Region</p>
                                        </Typography>
                                        <Typography color="customCard.white" gutterBottom variant="" component="div">
                                            <p>{(country && country.region) ? country.region : "loading"}</p>
                                        </Typography>
                                    </Box>
                                    
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="" component="div">
                                            <p>Capital</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="" component="div">
                                        <p>{(country && country.capital) ? country.capital : "loading"}</p>
                                        </Typography>
                                    </Box>

                                    

                                    
                                </Grid>
                                
                                <Grid xs={6}>
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="" component="div">
                                            <p>Population</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="" component="div">
                                            <p>{(country && country.population) ? country.population : "loading"}</p>
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid xs={12}>
                                    <CardMedia sx={{ borderRadius: '6px' }} height="100%" width="100%" component="img" src={country?.flags?.png}  />  
                                </Grid> 
                               
                            
                            
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