import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const AllService = ({ service }) => {
    const { _id, name, img, description, price } = service
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="194"
                            image={img}
                            alt="Paella dish"
                        />
                        <Typography sx={{ fontWeight: 600, mt: 2 }} variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Price: ${price}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link style={{ textDecoration: 'none' }} to={`/booking/${_id}`}>
                            <Button sx={{ mx: 15, mb: 3, textDecoration: 'none' }} variant='contained' size="small">Book</Button>
                        </Link>
                    </CardActions>
                </Card>

            </Grid>
        </>
    );
};

export default AllService;