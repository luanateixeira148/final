import React from 'react';
import "./signup.scss";
import LoginCard from '../../comps/LoginCard';
import LoginRedirect from '../../comps/LoginRedirect';
import {Link} from 'react-router-dom';

const Signup = () => {

    return <div className="main">
        <div className="card">
         <LoginCard headertext="Sign Up" buttontext="Sign Up"/>
        </div>
    
        <div className="footer">
       
        <LoginRedirect text="Already a member?" text2="Login"/>
    
        </div>
    </div>
    }
    
    export default Signup