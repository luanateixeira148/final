import React from 'react';
import "./login.scss";
import LoginCard from '../../comps/LoginCard';
import SignupRedirect from '../../comps/SignupRedirect';
import {Link} from 'react-router-dom';

const Login = () => {

    return <div className="main">
        <div className="card">
         <LoginCard headertext="Login" buttontext="Login"/>
        </div>
    
        <div className="footer">
        <SignupRedirect text="Not a member yet?" text2="Sign up"/>
        </div>
    </div>
    }
    
    export default Login