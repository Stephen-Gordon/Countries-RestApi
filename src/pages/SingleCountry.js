import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

//https://app.abstractapi.com/api/holidays/pricing
//API
import axios from '../config/api';

import { ThemeProvider ,Box, Card, CardActions, CardContent, CardMedia, Typography, Grid ,Button } from "@mui/material";

import Loading from '../components/Loading'
import Grow from "@mui/material";

import customtheme from '../theme'

import { styled } from '@mui/material/styles';
const Img = styled('img')({
    
    display: 'column',
    width: '100%',
    height: '100%',
  });

const SingleCountry = () => {
    
    let { name } = useParams();
    let navigate = useNavigate();

    
    
    const [country, setCountry] = useState([]);
    const [alpha2Code, setAlpha2Code] = useState("");
    
    const [holidays, setHolidays] = useState([]);
    

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

    if(country && holidays){
        html = (
            <>
            <ThemeProvider theme={customtheme}>
            
                <Grid container sx={{ mt:5 }} xs={12} sm={12} lg={12}>
            
                    <Card sx={{ mt:4, color: 'customCard.white', border: '1px solid #414147', borderRadius: '6px' }}>
                        
                      
                            <Box sx={{pl:5, pr:5, pt:5,  gridArea: 'header' }}>
                            
                                <Typography color="customCard.white" gutterBottom variant="h3" component="div">
                                    {(country && country.name) ? country.name : "loading"}
                                </Typography>
                           
                            </Box>

                            <Grid cointainer column={12}  sx={{pl: 5, display: 'flex', flexWrap: 'wrap'}}>
                            
                                <Grid sx={{pr:3}} item lg={2} md={2} sm={4} xs={6} >
                                
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
                               
                                <Grid sx={{pr:3}} item lg={2} md={2} sm={4} xs={6}>
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Population</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                            <p>{(country && country.population) ? country.population : "loading"}</p>
                                        </Typography>
                                    </Box>
                                </Grid>
                                
                                <Grid sx={{pr:3}} item lg={2} md={2} sm={4} xs={6} >
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Currencies</p>
                                        </Typography>
                                        {/* <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                            <p>Currencies</p>
                                        </Typography> */}

                                      <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                        {/* {Object.values(country.currencies)[0].name} */}
                                            {/* <p>{(country && Object.values(country.currencies)[0].name) ? Object.values(country.currencies)[0].name : "loading"}</p> */}
                                        </Typography> 
                                    </Box>
                                </Grid>

                                <Grid sx={{pr:5}} item md={6} sm={12} xs={12}>
                                    <Img  sx={{ border: '1px solid #414147', borderRadius: '12px' }} alt="country-image" src={country?.flags?.png} />
                                </Grid> 
                               
                            
                            
                            </Grid>


                            <Box sx={{mt:' 112px', pl:5, pr:5, pt:5,  gridArea: 'header' }}>   
                                <Typography color="customCard.light" gutterBottom variant="h4" component="div">
                                        <p>{(country && country.name) ? country.name : "loading"} Holidays</p>
                                </Typography>
                            </Box>
                                
                           
                           
                                
                                <Grid container  columns={16} sx={{display: 'flex'}}>
                                    <Grid  item md={8} sm={16}>
                                        <Card sx={{ m:4, p:5, color: 'customCard.white', border: '1px solid #414147', borderRadius: '12px' }}>
                                                
                                            <Box>
                                                <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                                <p>{(holidays) ? holidays[0].name : "loading"}</p> 
                                                    {/* <p>{holidays[0].name}</p> */}
                                                </Typography>
                                                <Typography  color="customCard.white" gutterBottom variant="h5"  component="div">
                                                {/* <p>{holidays[0].description}</p> */}
                                                </Typography>
                                                {/* <Typography  color="customCard.light" gutterBottom variant="h5"  component="div">
                                                    <p>{holidays[0].date}</p>
                                                </Typography> */}
                                            </Box>
                                                
                                        </Card>
                                    </Grid> 
                                       
                                        <Grid item md={8} sm={16}>
                                            <Card sx={{ m:4, p:5, color: 'customCard.white', border: '1px solid #414147', borderRadius: '12px' }}>
                                                    
                                                    <Box>
                                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                                            <p>Liberation Day</p>
                                                        </Typography>
                                                        <Typography  color="customCard.white" gutterBottom variant="h5"  component="div">
                                                            <p>Liberation day is a public holiday in afganistan</p>
                                                        </Typography>
                                                        <Typography  color="customCard.light" gutterBottom variant="h5"  component="div">
                                                            <p>Tuesday the 15th 2022</p>
                                                        </Typography>
                                                    </Box>
    
                                            </Card>
                                        </Grid>
                                </Grid>
                    </Card>
            </Grid>
        </ThemeProvider>
            </>
        );
    }


    {/* <p>{(holidays) ? holidays[0].name : "loading"}</p> */}
    

    /* Return HTML for loading feature */
    return(
        
        <>
        {html}   
        </>
        

    )
    
}

export default SingleCountry;