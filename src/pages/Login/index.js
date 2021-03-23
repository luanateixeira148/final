import React from 'react';
import "./login.scss";

import LoginCard from '../../comps/LoginCard';
import LoginSignup from '../../comps/LoginSignup';

const Login = () => {

    return <div className="main">
        <div className="card">
         <LoginCard headertext="Login" buttontext="Login"/>
        </div>
    
        <div className="footer">
        <LoginSignup text="Not a member yet?" text2="Sign up"/>
        </div>
    </div>
    }
    
    export default Login