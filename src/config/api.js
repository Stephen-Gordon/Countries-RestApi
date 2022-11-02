import axios from 'axios';

export default axios.create({
    baseURL: 'https://restcountries.com/v3.1'
});