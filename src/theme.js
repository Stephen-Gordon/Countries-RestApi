import { createTheme } from "@mui/material";

const customtheme = createTheme({
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        background: {
          paper: '#1f1f27', // your color
          default:'#13131b',
          white: "#FFFFFF",
        },
        customCard: {
            white: "#FFFFFF",
            purple: "#a5a5a8",
          }
      },
      typography: {
        color: '#ffffff',
        white: "#FFFFFF",
      },
      
    });

export default customtheme