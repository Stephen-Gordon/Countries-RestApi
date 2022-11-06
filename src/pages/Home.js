import {useState, useEffect} from 'react';
import axios from '../config/api';
import customtheme from '../theme'

import Loading from '../components/Loading';

import CountryCard from '../components/CountryCard';

import {MenuItem, Select, InputLabel, FormControl, Grid, Item, Button, ThemeProvider } from '@mui/material';

import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';



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
        return <CountryCard flag={country.flags.png} name={country.name} region={country.region} capital={country.capital} population={country.population}  languages={country.languages} key={i} />
    })

   
    
    
    
   

    
    const [dropdownRegion, setDropdownRegion] = useState('');
    
    const handleChange = (e) => {
        setDropdownRegion(e.target.value);
    };

    const handleSelect = (e) => {

        console.log(e.target.value)
        let filter = countries.filter((country) => {
            return country.region === e.target.value;
        });

        setFilteredCountries(filter);
    };

    const dropDownHandler = (e) => {
        handleChange(e);
        handleSelect(e);
    }
    /* const CustomDropdown = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 6,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #414147',
          fontSize: 16,
          fontColor: theme.palette.typography.white,
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          
          '&:focus': {
            borderRadius: 6,
            borderColor: '#414147',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));
     */

    return(
        
        <>

        <ThemeProvider theme={customtheme}>
            
            <Grid  container sx={{mt:5}}>
                
                <FormControl sx={{ m: 1, minWidth: 120, color: 'customCard.white' }}>
                {/* <CustomDropdown sx={{color: 'customCard.white'}} id="demo-customized-textbox" /> */}
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
                        <MenuItem sx={{color: 'customCard.white'}} value='Oceania' onClick={dropDownHandler} >Oceania</MenuItem>
                    </Select>
                </FormControl>
                
                {(countries.length > 0) ? countryCards : <Loading />}
                
            </Grid>
        </ThemeProvider>
        
    </>
        
        )

    

};


export default Home;
