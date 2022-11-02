import {useState, useEffect} from 'react';
import axios from '../config/api';
import customtheme from '../theme'

import Loading from '../components/Loading'


import CountryCard from '../components/CountryCard';

import { Grid, Item, Button, ThemeProvider } from '@mui/material';



const COUNTRIES_URL = 'https://restcountries.com/v3.1/';

const Home = () => {

   

    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState("all")
    const [filteredCountries, setFitlteredCountries] = useState("all")
    


    useEffect(() => {
        axios.get('/all')
        .then((response) => {
            //console.log(response.data)
            setCountries(response.data)
            
            setFitlteredCountries(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const handleRegion = (e) => {
        
        let filter = countries.filter((country) => {
            return countries.region === e
        })
        setFitlteredCountries(filter)

    }

    


    let europe= "europe"
    let asia= "asia"
    let africa= "africa"
    let americas= "americas"
    let oceania= "oceania"

    const handleEuropeClick = (e) => {
        handleRegion(e.target.value);
    }

    const handleAsiaClick = (e) => {
        setRegion(e.target.value);
    }
    const handleAmericasClick = (e) => {
        setRegion(e.target.value);
    }
    const handleAfricaClick = (e) => {
        setRegion(e.target.value);
    }
    const handleOceaniaClick = (e) => {
        setRegion(e.target.value);
    }

    let countryCards = countries.map((country, i) => {
        return <CountryCard flag={country.flags.png} name={country.name.common} region={country.region} capital={country.capital} population={country.population}  languages={country.languages} key={i} />
    })

    

    return(
        
        <>

        <ThemeProvider theme={customtheme}>
            
            <Grid container sx={{mt:5}}>
                
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={europe} onClick={handleEuropeClick}>Europe</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={asia} onClick={handleAsiaClick}>Asia</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={americas} onClick={handleAmericasClick}>Americas</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={africa} onClick={handleAfricaClick}>Africa</Button>
                <Button sx={{mr:3, border: '1px solid #2C3A43', borderRadius: '6px'} } value={oceania} onClick={handleOceaniaClick}>Oceania</Button>
                {(countries.length > 0) ? countryCards : <Loading />}

                
            
            </Grid>
        </ThemeProvider>
        
    </>
        
        )

    

};


export default Home;
