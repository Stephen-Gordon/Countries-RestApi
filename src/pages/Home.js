import {useState, useEffect} from 'react';
import axios from '../config/api';
import customtheme from '../theme'

import Loading from '../components/Loading';

import CountryCard from '../components/CountryCard';

import {InputBase, MenuItem, Select, InputLabel, FormControl, Grid, Item, Button, ThemeProvider, Box, TextField } from '@mui/material';


import { alpha, styled } from '@mui/material';

/* import InputBase from '@mui/material';
 */

const PopulationInput = styled((TextField))(({ theme }) => ({
    'label': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      borderRadius: 6,
      border: '1px solid #414147',
      color: '#fffff',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      
      '&:focus': {
        //boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        BorderColor: theme.palette.primary.darker,
      },
    },
  }));





const Home = () => {

   

    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [sortedCountries, setSortedCountries] = useState([]);
    const [dropdownRegion, setDropdownRegion] = useState('');


    useEffect(() => {
        axios.get(`/all`)
             .then((response) => {
                
                setCountries(response.data);
                setFilteredCountries(response.data);
                setSortedCountries(response.data);
             })
             .catch((error) => {
                console.log(error);
             });
    }, []);

    

    let countryCards = filteredCountries.map((country, i) => {
      
        return <CountryCard flag={country.flags.png} name={country.name} region={country.region} capital={country.capital} population={country.population}  languages={country.languages} key={i} />
    })

   
    
    
    const handlePopSelect = (e) => {

        
        let filter = countries.filter((country) => {
            return country.population < e.target.value;
        });

        setFilteredCountries(filter);
        
    };
   

    
    
    const handleChange = (e) => {
        setDropdownRegion(e.target.value);
    };

    const handleSelect = (e) => {

     
        let filter = countries.filter((country) => {
            return country.region === e.target.value;
        });

        setFilteredCountries(filter);
    };

    const dropDownHandler = (e) => {
        handleChange(e);
        handleSelect(e);
        
    }



   

    

    return(
        
        <>

        <ThemeProvider theme={customtheme}>
            
            <Grid  container sx={{mt:5}}>
                
                <FormControl sx={{ m: 1, minWidth: 120, color: 'customCard.white' }}>
                <InputLabel sx={{color: 'customCard.white'}}  id="demo-simple-select-label">Region</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dropdownRegion}
                        label="dropdownRegion"
                        onChange={dropDownHandler}
                        sx={{color: 'customCard.white', border: '1px solid #414147', borderRadius: '6px' }}
                    >
                        <MenuItem sx={{color: 'customCard.white'}} value='Europe' onClick={dropDownHandler}>Europe</MenuItem>
                        <MenuItem sx={{color: 'customCard.white'}} value='Asia' onClick={dropDownHandler}>Asia</MenuItem>
                        <MenuItem sx={{color: 'customCard.white'}} value='Americas' onClick={dropDownHandler} >Americas</MenuItem>
                        <MenuItem sx={{color: 'customCard.white'}} value='Africa' onClick={dropDownHandler} >Africa</MenuItem>
                        <MenuItem sx={{color: 'customCard.white'}} value='Oceania' onClick={dropDownHandler}>Oceania</MenuItem>
                    </Select>
                </FormControl>

                
   
                
                <PopulationInput id="Population" label="Population"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', style: {color: 'white'} }} sx={{ m: 1, minWidth: 120, color: '#FFFFF' }} onChange={handlePopSelect} />



                {
                (countries.length > 0) ? countryCards : 
                
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                    <Loading />
                </Grid>
                  
                }
                
            </Grid>
        </ThemeProvider>
        
    </>
        
        )

    

};


export default Home;
