import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

//https://app.abstractapi.com/api/holidays/pricing
//API
import axios from '../config/api';

import { ThemeProvider ,Box, Card, CardActions, CardContent, CardMedia, Typography, Grid ,Button } from "@mui/material";

import Loading from '../components/Loading'

import customtheme from '../theme'
import HolidayCard from '../components/HolidayCard'

import { styled } from '@mui/material/styles';
const Img = styled('img')({
    
    display: 'column',
    width: '100%',
    height: '100%',
  });

const SingleCountry = () => {
    
    let { name } = useParams();
    let navigate = useNavigate();

    
    
    const [country, setCountry] = useState(null);
    const [alpha2Code, setAlpha2Code] = useState("");
    
    
    useEffect(() => {
        axios.get(`/name/${name}?fullText=true`)
             .then((response) => {
                setCountry(response.data[0]);
                setAlpha2Code(response.data[0].alpha2Code);
                
             })
             .catch((error) => {
                console.log(error);
                navigate('/country');
             });
    }, []);

   
    
    

    let html = 
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Loading/>
    </Grid>

    if(country){
        html = (
            <>
            <ThemeProvider theme={customtheme}>
            
                <Grid container sx={{ mt:5 }}>
            
                    <Card sx={{ mt:4, pb:5, color: 'customCard.white', border: '1px solid #414147', borderRadius: '6px' }}>
                        
                      
                            <Box sx={{pl:5, pr:5, pt:5, mb:5,  gridArea: 'header' }}>
                            
                                <Typography color="customCard.white" gutterBottom variant="h3" component="div">
                                    {(country && country.name) ? country.name : "loading"}
                                </Typography>
                           
                            </Box>

                            <Grid cointainer column={12}  sx={{pl: 5, display: 'flex', flexWrap: 'wrap' }}>
                            
                                <Grid sx={{pl:5, pr:5, mt:3, mb:3, borderLeft: '2px solid #414147'}} item lg={2} md={2} sm={4} xs={6} >
                                
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Region</p>
                                        </Typography>
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
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
                               
                                <Grid sx={{pl:5,mt:3, mb:3}} item lg={2} md={2} sm={4} xs={6}>
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Population</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                            <p>{(country && country.population) ? country.population : "loading"}</p>
                                        </Typography>

                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Currencies</p>
                                        </Typography>
                                        

                                      <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                            <p>{(country && Object.values(country.currencies)[0].name) ? Object.values(country.currencies)[0].name : "loading"}</p> 
                                        </Typography> 
                                    
                                    
                                    </Box>
                                </Grid>
                                <Grid sx={{mt:3, mb:3}} item lg={2} md={2} sm={4} xs={6}>
                                    
                                </Grid>

                               
                                
                               
                                <Grid sx={{pr:5}} lg={6} item md={6} sm={12} xs={12}>
                                    <Img  sx={{border: '1px solid #414147', borderRadius: '12px' }} alt="country-image" src={country?.flags?.png} />
                                </Grid> 
                               
                            
                            
                            </Grid>
                                
                            <Grid  item lg={12} md={12} sm={12} xs={12}>
                                <HolidayCard name={country.name} alpha2Code={alpha2Code}/>
                            </Grid>
                           
                                
                                
                    </Card>
            </Grid>
        </ThemeProvider>
            </>
        );
    }


    return(
        
        <>
        {html}   
        </>
        

    )
    
}

export default SingleCountry;