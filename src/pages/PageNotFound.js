import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {

    let location = useLocation();

    let html = (
        <div>
            <h2>Sorry, 404 the page { location.pathname } was not found</h2>
        </div>
    );

    if(location.pathname === '/country'){
        html = (
            <div>
                <Typography sx={{color:'customCard.white'}}>Sorry, country was not found</Typography>
            </div>
        )
    }

    return (
        <>
            {html}
        </>
    );
};

export default PageNotFound;