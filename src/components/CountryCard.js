
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';

import { CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/material'; 

import { ThemeProvider } from '@mui/material';
import { borders, display } from '@mui/system';

import customtheme from '../theme'

const CountryCard = (props) => {

      
        return (

            <>

            <ThemeProvider theme={customtheme}>
            
            <Grid xs={12} sm={12} lg={12}>
            
                    <Card sx={{ mt:4, color: 'customCard.white', border: '1px solid #414147', borderRadius: '1.5rem' }}>
                        
                      
                            <Box sx={{pl:5, pr:5, pt:5,  gridArea: 'header' }}>
                            <Link underline="none"  to={`/country/${props.name}`}>
                                <Typography color="customCard.white" gutterBottom variant="h4" component="div">
                                    {props.name}
                                </Typography>
                            </Link>
                            </Box>

                            <Box sx={{p: 5, display: 'flex'}}>
                            
                                <Grid xs={6} >
                                
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Region</p>
                                        </Typography>
                                        <Typography  color="customCard.white" gutterBottom variant="h5"  component="div">
                                            <p>{props.region}</p>
                                        </Typography>
                                    </Box>
                                    
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Capital</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5"   component="div">
                                            <p>{props.capital}</p>
                                        </Typography>
                                    </Box>

                                    

                                    
                                </Grid>

                                <Grid xs={6}>
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Population</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5"   component="div">
                                            <p>{props.population}</p>
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Population</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5"    component="div">
                                           {/*  <p>{console.log(props.languages)}</p> */}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid xs={6}>
                                   
                                </Grid>

                                <Grid xs={12}>
                                    <CardMedia sx={{ borderRadius: '6px' }} height="100%" width="100%" component="img" src={props.flag}  />  
                                </Grid>
                            
                            
                            </Box>

                    </Card>
              
            </Grid>
        </ThemeProvider>
            </>

            
        )
}

export default CountryCard;