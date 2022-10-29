import {useState, useEffect} from 'react';
import axios from 'axios'
import CountryCard from '../components/CountryCard';

import { Grid, Item } from '@mui/material';

import Loading from '../components/Loading'

const Home = () => {

    
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((response) => {
            //console.log(response.data)
            setCountries(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    let countryCards = countries.map((country, i) => {
        return <CountryCard flag={country.flags.png} name={country.name.common} region={country.region} key={i} />
    })

    //console.log(countryCards)

    return(
        
        <>
        <Grid container>
        <Grid >

            {(countries) ? countryCards :  <Loading/>}

            
        </Grid>
        
        </Grid>
        
    </>
        
        )

    

};


export default Home;
