import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://dry-scrubland-06662.herokuapp.com/allServices/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.name = service.name;
        data.price = service.price;
        data.email = user.email;
        console.log(data);
        reset();

        fetch("https://dry-scrubland-06662.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }



    return (
        <div>
            <h1>Booking</h1>
            <Grid sx={{ m: 12 }} container spacing={2}>
                <Grid item xs={4}>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={service.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {service.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {service.description}
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <h4>Book Your Favourite Destination</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("name")} defaultValue={service?.name} placeholder="Name" /> <br /> <br />
                        <input  {...register("email")} defaultValue={user.email} placeholder="Email" /> <br /> <br />
                        <input  {...register("price")} defaultValue={service?.price} type="number" placeholder="Price" /> <br /> <br />
                        <input  {...register("adress")} placeholder="Adress" /> <br /> <br />
                        <input  {...register("phone")} placeholder="Phone Number" /> <br /> <br />
                        <input  {...register("date")} type="date" placeholder="Date" /> <br /> <br />






                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default Booking;