
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';

import { CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'; 

import { ThemeProvider } from '@mui/material';

//Theme
import customtheme from '../theme'
import { styled } from '@mui/material/styles';
const linkStyle = {
    textDecoration: "none"
  };

  const Img = styled('img')({
    
    display: 'column',
    width: '100%',
    height: '100%',
  });

const CountryCard = (props) => {

      
        return (

            <>

            <ThemeProvider theme={customtheme}>
            
            <Grid xs={12} sm={12} lg={12}>
                <Link style={linkStyle}underline="none"  to={`/country/${props.name}`}>
                    <Card sx={{ mt:4, color: 'customCard.white', border: '1px solid #414147', borderRadius: '6px' }}>
                        
                      
                            <Box sx={{pl:5, pr:5, pt:5, mb:5,  gridArea: 'header' }}>
                            
                                <Typography color="customCard.white" gutterBottom variant="h3" component="div">
                                    {props.name}
                                </Typography>
                           
                            </Box>

                            <Grid cointainer column={12}  sx={{pl: 5, display: 'flex', flexWrap: 'wrap' }}>
                            
                                <Grid sx={{pl:5, mt:3, mb:5, borderLeft: '2px solid #414147'}} item lg={2} md={2} sm={4} xs={6} >
                                
                                <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Region</p>
                                        </Typography>
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                            <p>{props.region}</p>
                                        </Typography>
                                    </Box>
                                    
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Capital</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                         <p>{props.capital}</p>
                                        </Typography>
                                    </Box>
                                    
                                </Grid>
                               
                                <Grid sx={{pl:5,mt:3, mb:3}} item lg={2} md={2} sm={4} xs={6}>
                                    <Box>
                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Population</p>
                                        </Typography>
                                        
                                        <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                            <p>{props.population}</p>
                                        </Typography>

                                        <Typography color="customCard.purple" gutterBottom variant="h6" component="div">
                                            <p>Currencies</p>
                                        </Typography>
                                        

                                      <Typography color="customCard.white" gutterBottom variant="h5" component="div">
                                         {/*    <p>{Object.values(props.currencies)[0].name}</p>  */}
                                         <p>{props.population}</p>
                                        </Typography>  
                                    
                                    
                                    </Box>
                                </Grid>
                                <Grid sx={{mt:3, mb:3}} item lg={2} md={2} sm={4} xs={6}>
                                    
                                </Grid>

                               
                                
                               
                                <Grid sx={{pr:5, pb:5, }} lg={6} item md={6} sm={12} xs={12}>
                                    <Img  sx={{border: '1px solid #414147', borderRadius: '12px' }} alt="country-image" src={props.flag} />
                                </Grid>    
                            
                            
                            </Grid>

                    </Card>
                    </Link>
            </Grid>
            
        </ThemeProvider>
            </>

            
        )
}

export default CountryCard;