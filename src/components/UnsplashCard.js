import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

import axios from '../config/api';

import {CardMedia, ThemeProvider ,Box, Card, Typography, Grid ,Button } from "@mui/material";

import Loading from './Loading'

import customtheme from '../theme'


import { styled } from '@mui/material/styles';

const Img = styled('img')({
    
    display: 'column',
    width: '100%',
    height: '100%',
  });

const UnsplashCard = (props) => {


    let { name } = useParams();


    //Sets photos
    const [photos, setPhotos] = useState([]);
    
    let holiday0 = props.holiday0;

    let searchTerm = name.toString() + holiday0.toString();

    console.log(searchTerm)


    //connect to api


    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=3&query=${searchTerm}&client_id=CadDhU45XCbET8bJeOmO2e_uOkcPXWowM3Z_ZAUSaPo`)
            .then((response) => {
                setPhotos(response.data.results);
                console.log(photos[0].urls.regular)
                //let source = photos.results[0].urls.regular;
                
            })
            .catch((error) => {
                console.log(error);
            }); 
    }, []);

    let html = <></>


    if(photos.length >= 1) {

        html = (
            <>
           <ThemeProvider theme={customtheme}>                                      
                    <Grid sx={{pr:5}} item md={6} sm={12} xs={12}>
                            <Img  sx={{ border: '1px solid #414147', borderRadius: '12px' }} alt="unsplash-country-image" src={photos[0]?.urls?.regular} />
                    </Grid>  
                </ThemeProvider>  
            </>
        )

    }

        


        return(
            <>
                {html}

                <Card >
                    <div style={{ position: "relative" }}>  
                        <CardMedia style={{ height: "250px", paddingTop: "2%" }} 
                        component="img" src={photos[0]?.urls?.regular}/> 

                    <div style={{position: "absolute", color: "white",top: 10,left: "50%",transform: "translateX(-50%)",}}> Some text</div>  </div>
                </Card>

            </>
        )

        
  

}

export default UnsplashCard;
