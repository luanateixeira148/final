// import { Link } from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../Button'
import LoginHeader from '../LoginHeader';
import {Link} from 'react-router-dom';

const LoginCardContainer = styled.div`
    min-width: 330px;
    min-height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const Intro = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: left;
    line-height: 140%;
    color: #3D3D3D;
    padding: 10px 25px 10px 25px;
`;

const WelcomeCard = ({buttontext, headertext}) => {
  return    <LoginCardContainer>
                <LoginHeader text={headertext}/>
                <Intro>We created this app for UI/UX designers like you! <br/>
            Here, you will be able to share your designs, get feedback from other designers from all around the globe, and find inspirations for your next project.</Intro> 
                <Link to="/Main"><Button text={buttontext} width="500px"/></Link>
            </LoginCardContainer>
}

WelcomeCard.defaultProps = {
buttontext:"buttontext",
headertext:"headertext"
}

export default WelcomeCard;