import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import AllService from '../AllService/AllService';


const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dry-scrubland-06662.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container>
            <h2>Destinations</h2>
            <Grid container spacing={2}>


                {
                    services.map(service => <AllService
                        key={service._id}
                        service={service}
                    ></AllService>)
                }

            </Grid>
        </Container>
    );
};

export default AllServices;