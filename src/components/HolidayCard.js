import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

import axios from '../config/api';

import { ThemeProvider ,Box, Card, Typography, Grid ,Button } from "@mui/material";

import Loading from './Loading'
import UnsplashCard from "./UnsplashCard";

import customtheme from '../theme'


const HolidayCard = (props) => {

    //Sets Holidays
    const [holidays, setHolidays] = useState([]);
    

    let alpha2Code = props.alpha2Code;
    //console.log(alpha2Code)

  

    //connect to api
    useEffect(() => {
        axios.get(`https://holidays.abstractapi.com/v1/?api_key=db876077d65c4252b73cdccc77bc6a60&country=${alpha2Code}&year=2020&month=12`)
            .then((response) => {
                //console.log(response.data)
                setHolidays(response.data);
            })
            .catch((error) => {
                console.log(error);
            }); 
    }, []);


 
   let html = <></>

   if(holidays.length >= 1){

       html = (
           
           <>
            <ThemeProvider theme={customtheme}>                                      
                <Grid container  columns={16} sx={{display: 'flex'}}>

                    <Grid  container md={16} sm={16} sx={{mt:' 112px', pl:5, pr:5, pt:5,  gridArea: 'header' }}>   
                        <Typography color="customCard.light" gutterBottom variant="h4" component="div">
                                <p>{(props.name && props.name) ? props.name : "loading"} Holidays</p>
                        </Typography>
                    </Grid>



                    <Grid  sx={{mb:5, pl:5, display: 'flex'}}>
                    
                    
                        <Grid   columns={16} sx={{display: 'flex', flexWrap: 'wrap', borderLeft: '2px solid #414147'}}>
                        
                                            <Grid item lg={8} md={8} sm={8} xs={16}>
                                                <Box sx={{  color: 'customCard.white'}}>
                                                        
                                                            <Typography sx={{ pt:3, pl:5}} color="customCard.purple" gutterBottom variant="h6"  component="div">
                                                                <p>{holidays[0]?.date}</p>  
                                                            </Typography>
                        
                                                            <Typography sx={{ pl:5, }}  color="customCard.white" gutterBottom variant="h5"  component="div">
                                                                <p>{holidays[0]?.name}</p>
                                                            </Typography> 
                        
                                                </Box>
                                            </Grid> 
                                            
                                            <Grid item lg={8} md={8} sm={8} xs={16}>
                                                <Box sx={{  color: 'customCard.white'}}>
                                                        
                                                            <Typography sx={{ pt:3, pl:5}} color="customCard.purple" gutterBottom variant="h6"  component="div">
                                                                <p>{holidays[1]?.date}</p>  
                                                            </Typography>
                        
                                                            <Typography sx={{ pl:5, }}  color="customCard.white" gutterBottom variant="h5"  component="div">
                                                                <p>{holidays[1]?.name}</p>
                                                            </Typography> 
                        
                                                </Box>
                                            </Grid>

                                            <Grid item lg={8} md={8} sm={8} xs={16}>
                                                <Box sx={{  color: 'customCard.white'}}>
                                                        
                                                            <Typography sx={{ pt:3, pl:5}} color="customCard.purple" gutterBottom variant="h6"  component="div">
                                                                <p>{holidays[2]?.date}</p>  
                                                            </Typography>
                        
                                                            <Typography sx={{ pl:5, }}  color="customCard.white" gutterBottom variant="h5"  component="div">
                                                                <p>{holidays[2]?.name}</p>
                                                            </Typography> 
                        
                                                </Box>
                                            </Grid>

                                            <Grid item lg={8} md={8} sm={8} xs={16}>
                                                <Box sx={{  color: 'customCard.white'}}>
                                                        
                                                            <Typography sx={{ pt:3, pl:5}} color="customCard.purple" gutterBottom variant="h6"  component="div">
                                                                <p>{holidays[3]?.date}</p>
                                                            </Typography>
                        
                                                            <Typography sx={{ pl:5, }}  color="customCard.white" gutterBottom variant="h5"  component="div">
                                                                <p>{holidays[3]?.name}</p> 
                                                            </Typography> 
                        
                                                </Box>
                                            </Grid>

                        </Grid>

                    </Grid>
                    

                    

                    {/* unsplash */}
                    <Grid  container md={16} sm={16} sx={{mt:5, pl:5, pr:5, pt:5,  gridArea: 'header' }}>   
                        <Typography color="customCard.light" gutterBottom variant="h4" component="div">
                                <p>Unsplash Photos</p>
                        </Typography>
                    </Grid>

                    <Grid item md={8} sm={16}>
                        <Box style={{backgroundColor: "#1E1E25" }} sx={{ m:4, color: 'customCard.white'}}>
                            <UnsplashCard id={1}  holidays={holidays}/>
                        </Box>
                        
                    </Grid>

                    <Grid item md={8} sm={16}>
                        <Box style={{backgroundColor: "#1E1E25" }} sx={{ m:4, color: 'customCard.white'}}>
                            <UnsplashCard id={0}  holidays={holidays}/>
                        </Box>
                        
                    </Grid>
              
                </Grid>
            
        </ThemeProvider>
           </>
       )
   }


        return(
            <>
                {html}
            </>
        )
  

}

export default HolidayCard;
