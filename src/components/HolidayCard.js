import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

import axios from '../config/api';

import { ThemeProvider ,Box, Card, Typography, Grid ,Button } from "@mui/material";

import Loading from './Loading'

import customtheme from '../theme'


const HolidayCard = (props) => {

    //Sets Holidays
    const [holidays, setHolidays] = useState([]);
    

    let alpha2Code = props.alpha2Code;
    //console.log(alpha2Code)




    //connect to api
    useEffect(() => {
        axios.get(`https://holidays.abstractapi.com/v1/?api_key=4347605faf344efc8645549af1840be8&country=${alpha2Code}&year=2020`)
            .then((response) => {
                console.log(response.data)
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

                            <Grid  item md={16} sm={16} sx={{mt:' 112px', pl:5, pr:5, pt:5,  gridArea: 'header' }}>   
                                <Typography color="customCard.light" gutterBottom variant="h4" component="div">
                                        <p>{(props.name && props.name) ? props.name : "loading"} Holidays</p>
                                </Typography>
                            </Grid>

                    <Grid  item md={8} sm={16}>
                    
                        <Card sx={{ m:4, p:5, color: 'customCard.white', border: '1px solid #414147', borderRadius: '12px' }}>
                                
                            <Box>
                                <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                   <p>{holidays[0]?.name}</p>  
                                </Typography>
                                

                                <Typography  color="customCard.white" gutterBottom variant="h5"  component="div">
                                    <p>{holidays[0]?.description}</p> 
                                </Typography>


                                <Typography  color="customCard.light" gutterBottom variant="h5"  component="div">
                                    <p>{holidays[0]?.date}</p>
                                </Typography> 
                            </Box>

                        </Card>
                    </Grid> 
                                       
                    <Grid item md={8} sm={16}>
                        <Card sx={{ m:4, p:5, color: 'customCard.white', border: '1px solid #414147', borderRadius: '12px' }}>
                                
                                <Box>
                                    <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                        <p>{holidays[1]?.name}</p>  
                                    </Typography>
                                    <Typography  color="customCard.white" gutterBottom variant="h5"  component="div">
                                        <p>{holidays[1]?.description}</p> 
                                    </Typography>


                                    <Typography  color="customCard.light" gutterBottom variant="h5"  component="div">
                                        <p>{holidays[1]?.date}</p>
                                    </Typography> 
                                </Box>

                        </Card>
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
