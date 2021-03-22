import React from 'react';
import "./login.scss";

import LoginCard from '../../comps/LoginCard';

const Login = () => {

    return <div className="main">
        <div className="card">
         <LoginCard headertext="Login" buttontext="Login"/>
        </div>
    
        <div className="footer">
        
        </div>
    </div>
    }
    
    export default Login