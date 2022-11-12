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
    height: '300px',
  });

const UnsplashCard = (props) => {


    let { name } = useParams();


    //Sets photos
    const [photo0, setPhoto0] = useState([]);
    const [photo1, setPhoto1] = useState([]);
    
    //let holidays = props.holidays;
    //console.log(props.holidays)
   

    let searchTerm0 = name ;
    let searchTerm1 = name ;

    searchTerm0 = searchTerm0.replace(/ /g,"-")
    searchTerm1 = searchTerm1.replace(/ /g,"-")
   


    //connect to api


    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=3&query=${searchTerm0}&client_id=CadDhU45XCbET8bJeOmO2e_uOkcPXWowM3Z_ZAUSaPo`)
            .then((response) => {
                setPhoto0(response.data.results);
                console.log(photo0[0].urls.regular)
                //let source = photos.results[0].urls.regular;
                
            })
            .catch((error) => {
                console.log(error);
            }); 
    }, []);

    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=3&query=${searchTerm1}&client_id=CadDhU45XCbET8bJeOmO2e_uOkcPXWowM3Z_ZAUSaPo`)
            .then((response) => {
                setPhoto1(response.data.results);
                console.log(photo1[0].urls.regular)
                
            })
            .catch((error) => {
                console.log(error);
            }); 
    }, []);

    let html = <></>


    if(photo0.length && photo1.length >= 1) {

        html = (
            <>
                <Img  sx={{borderRadius: '12px'  }} alt="unsplash-country-image" src={photo0[props.id]?.urls?.regular} />
            </>
        )

    }
   


        return(
            <>
                {html}
            </>
        )

}

export default UnsplashCard;
