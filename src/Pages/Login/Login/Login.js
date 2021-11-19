import { Button } from '@mui/material';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory()

    const handleGooglesignIn = () => {
        signInWithGoogle(location, history)

    }
    return (
        <div>
            <h2 style={{ marginTop: "150px", color: "tomato" }}>Please Sign In</h2>
            <Button onClick={handleGooglesignIn} variant="contained" sx={{ backgroundColor: "red" }}>Google Sign In</Button>
        </div>
    );
};

export default Login;