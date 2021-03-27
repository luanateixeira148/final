import React from 'react';
import "./login.scss";
import WelcomeCard from '../../comps/WelcomeCard';

const Welcome = () => {

    return <div className="main">
        <div className="card">
         <WelcomeCard headertext="Welcome" buttontext="Start discovering"/>
        </div>
    
        <div className="footer">
        
        </div>
    </div>
    }
    
    export default Welcome