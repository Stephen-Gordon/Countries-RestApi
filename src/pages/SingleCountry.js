import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios'



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";

import Loading from '../components/Loading'

const SingleCountry = () => {
    
    let { name } = useParams();

    const [country, setCountry] = useState([]);


    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then((response) => {
            //console.log(response.data)
            setCountry(response.data[0])
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    let html = <Loading/>

    if(country){
        html = (
            <>
            <p>Country is {name}</p>
            <p>{(country && country.name) ? country.name.common : "loading"}</p>
            <p>{(country && country.region) ? country.region : "loading"}</p>
            </>
        );
    }


    /* Return HTML for loading feature */
    return(
        
        <>
        
            <Grid>

                <Card  sx={{ display: 'flex' }}>

                     

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <p>Country is {name}</p>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                 
                                <p>{(country && country.name) ? country.name.common : "loading"}</p>
                                <p>{(country && country.region) ? country.region : "loading"}</p>
                            </Typography>
                        </CardContent>       
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <CardMedia height="140" width="140" component="img" src={country.flags.png} />
                    </Box>
                </Card>

            </Grid>
          
        </>
        

    )
    
}

export default SingleCountry;