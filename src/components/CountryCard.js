//import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const CountryCard = (props) => {
        return (

            <>
            <Grid   item xs={16}>
                <Card  sx={{ display: 'flex' }}>

                     

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <Link to={`/country/${props.name}`}>{props.name}</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                 {props.region}
                            </Typography>
                        </CardContent>       
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <CardMedia height="140" width="140" component="img" src={props.flag} />
                    </Box>
                </Card>
            </Grid>

            {/* <Card>
            <Card.Img variant='top' src={props.flag} />
            <Card.Body>
                <Card.Title></Card.Title>
                <p>{props.region}</p>
            </Card.Body>
        </Card> */}
            </>

            
        )
}

export default CountryCard;