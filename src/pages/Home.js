import {useState, useEffect} from 'react';
import axios from '../config/api';
import customtheme from '../theme'

import Loading from '../components/Loading'


import CountryCard from '../components/CountryCard';

import { Grid, Item, Button, ThemeProvider } from '@mui/material';



const COUNTRIES_URL = 'https://restcountries.com/v3.1/';

const Home = () => {

   

    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    


    useEffect(() => {
        axios.get(`/all`)
             .then((response) => {
                console.log("Use EFFECT");
                setCountries(response.data);
                setFilteredCountries(response.data);
             })
             .catch((error) => {
                console.log(error);
             });
    }, []);



    let countryCards = filteredCountries.map((country, i) => {
        return <CountryCard flag={country.flags.png} name={country.name.common} region={country.region} capital={country.capital} population={country.population}  languages={country.languages} key={i} />
    })

    /* const handleRegion = (e) => {
        
        let filter = countries.filter((country) => {
            return countries.region === e
        })
        setFilteredCountries(filter)

    } */
    
    const handleSelect = (e) => {

        console.log(e.target.value)
        let filter = countries.filter((country) => {
            return country.region === e.target.value;
        });

        setFilteredCountries(filter);
    };

    


    let Europe= "Europe"
    let Asia= "Asia"
    let Africa= "Africa"
    let Americas= "Americas"
    let Oceania= "Oceania"



    return(
        
        <>

        <ThemeProvider theme={customtheme}>
            
            <Grid container sx={{mt:5}}>
                
                <Button sx={{mr:3, border: '1px solid #414147', borderRadius: '6px'} } value={Europe} onClick={handleSelect}>Europe</Button>
                <Button sx={{mr:3, border: '1px solid #414147', borderRadius: '6px'} } value={Asia} onClick={handleSelect}>Asia</Button>
                <Button sx={{mr:3, border: '1px solid #414147', borderRadius: '6px'} } value={Americas} onClick={handleSelect}>Americas</Button>
                <Button sx={{mr:3, border: '1px solid #414147', borderRadius: '6px'} } value={Africa} onClick={handleSelect}>Africa</Button>
                <Button sx={{mr:3, border: '1px solid #414147', borderRadius: '6px'} } value={Oceania} onClick={handleSelect}>Oceania</Button>
                {(countries.length > 0) ? countryCards : <Loading />}
                
            </Grid>
        </ThemeProvider>
        
    </>
        
        )

    

};


export default Home;
