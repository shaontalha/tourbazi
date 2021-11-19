import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: 'black', color: 'wheat' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "400", textAlign: "center" }}>
                        Tourbazi.com
                    </Typography>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ color: 'wheat', textDecoration: 'none' }} to='/myOrders'>
                                    <Button >My Orders</Button>
                                </NavLink>
                                <NavLink style={{ color: 'wheat', textDecoration: 'none' }} to='/manageAllOrders'>
                                    <Button >Manage All Orders</Button>
                                </NavLink>
                                <NavLink style={{ color: 'wheat', textDecoration: 'none' }} to='/addaNewService'>
                                    <Button >Add A New Service</Button>
                                </NavLink>
                                <Button onClick={logout} style={{ color: 'wheat', textDecoration: 'none' }} >Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ color: 'wheat', textDecoration: 'none' }} to='/login'>
                                <Button >Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;