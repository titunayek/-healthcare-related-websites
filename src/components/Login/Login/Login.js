import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2 >please Login</h2>
            <button onClick={signInUsingGoogle} className='btn btn-info'>Google Sign In</button>
        </div>
    );
};

export default Login;