import { createTheme } from "@mui/material";

const customtheme = createTheme({
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        background: {
          paper: '#141A1E', // your color
          default:'#141A1E',
          white: "#FFFFFF",
        },
        customCard: {
            white: "#FFFFFF",
            purple: "#784FFE",
          }
      },
      typography: {
        color: '#ffffff',
        white: "#FFFFFF",
      },
      
    });

export default customtheme