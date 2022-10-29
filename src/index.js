import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from '@mui/material';

import customtheme from './theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <ThemeProvider theme={customtheme}>
      <App />
  </ThemeProvider>
  </React.StrictMode>
);

