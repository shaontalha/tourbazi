import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
const services = [
    {
        name: "Family Tour",
        description: "For a safe and enjoyable tour with your family we provide yoy the best service at a very reasonable rate",
        img: "https://st4.depositphotos.com/2419757/29834/v/950/depositphotos_298347980-stock-illustration-family-in-airport-traveler-taking.jpg"
    },
    {
        name: "Solo tour",
        description: "We provide you the best experience for your solo tour with enough safety at a reasonable rate",
        img: "https://cdn.dribbble.com/users/1040983/screenshots/9933820/media/cfa86811393b761c1b15aca573ac063e.png?compress=1&resize=400x300"
    },
    {
        name: "Honeymoon",
        description: "We assure your journey with your beloved will be a memorable one at a reasonale price",
        img: "https://media.istockphoto.com/vectors/young-couple-man-and-woman-walking-on-the-beach-hold-hands-vector-vector-id1249041742?k=20&m=1249041742&s=170667a&w=0&h=v1Q0NmQdCPuoZ0w_NdeIR6CCXEE8tMjIeyRK-YjFN3E="
    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ mt: 3, mb: 2, color: "gray" }} variant="h4" component='div'>
                    Our Packages

                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;