import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { Grid } from '@mui/material';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://dry-scrubland-06662.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [control, user])

    const handleDelete = (id) => {
        fetch(`https://dry-scrubland-06662.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control)
                }
            })
        console.log(id)

    }



    return (

        <div>

            <h1>My Bookings</h1>

            {orders.map(order =>
                <div>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card style={{ marginLeft: "555px" }} sx={{ minWidth: 275 }} md={4}>
                            <CardContent>


                                <Typography variant="h5" component="div">
                                    {order.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Price = ${order.price}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Adress = {order.adress}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Phone = {order.phone}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Date = {order.date}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => handleDelete(order._id)} style={{ marginLeft: '5px' }} variant="contained" size="small">Cancel Booking</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </div>

            )}

        </div>
    );
};

export default MyOrders;