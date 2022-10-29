import {useState, useEffect} from 'react';
import axios from 'axios'
import CountryCard from '../components/CountryCard';
import { Button } from '@mui/material';
import { Grid, Item } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import customtheme from '../theme'

import Loading from '../components/Loading'
const COUNTRIES_URL = 'https://restcountries.com/v3.1/';

const Home = () => {

   

    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState([""])
    
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

    const displayRegion = () => {
        axios.get(`${COUNTRIES_URL}/region/${region}`)
        .then(response => {
            console.log(response.data);
            setCountries(response.data);
         })
         .catch(error => console.log(error)); 
    }
    let europe= "europe"
    let asia= "asia"
    let africa= "africa"
    let americas= "americas"
    let oceania= "oceania"

    const handleEuropeClick = (e) => {
        displayRegion();
        setRegion(e.target.value);
        
    }
    const handleAsiaClick = (e) => {
        setRegion(e.target.value);
        displayRegion();
    }
    const handleAmericasClick = (e) => {
        setRegion(e.target.value);
        displayRegion();
    }
    const handleAfricaClick = (e) => {
        setRegion(e.target.value);
        displayRegion();
    }
    const handleOceaniaClick = (e) => {
        setRegion(e.target.value);
        displayRegion();
    }

    let countryCards = countries.map((country, i) => {
        return <CountryCard flag={country.flags.png} name={country.name.common} region={country.region} capital={country.capital} population={country.population} key={i} />
    })

    

    return(
        
        <>
        <ThemeProvider theme={customtheme}>
            <Grid>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={europe} onClick={handleEuropeClick}>Europe</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={asia} onClick={handleAsiaClick}>Asia</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={americas} onClick={handleAmericasClick}>Americas</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={africa} onClick={handleAfricaClick}>Africa</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={oceania} onClick={handleOceaniaClick}>Oceania</Button>
            </Grid>
            <Grid container spacing={1}>
            
                {(countries) ? countryCards :  <Loading/>}

        
            
            </Grid>
        </ThemeProvider>
        
    </>
        
        )

    

};


export default Home;
