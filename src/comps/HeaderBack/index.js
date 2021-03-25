import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import back from './back2.svg';
import {withRouter} from 'react-router';
// import { Link } from '@material-ui/core';
import {Link} from 'react-router-dom';

const Container = styled.div`
    width: 375px;
    height: 65px;
    background-color: white;
    box-shadow: 0 7px 10px -4px #D6D6D6;
    align-items: center;
    // display: flex;
    // justify-content: space-around;
    position:relative;
    
`;

const Extra = styled.div`
    width: 14px;
    height: 25px;
`;

const Text = styled.div`
    color: #3D3D3D;
    font-size: 26px; 
    line-height: 33px;
    padding-top: 14px;
    
`;

const Button = styled.div`
line-height: 10px;
position: absolute;
left: 20px;
top: 18px;

`;


const HeaderBack = ({text, onClick}) => {
    return <Container>
        <Link to="/Main">
        <Button onClick={onClick}>
        <img src={back}></img>
        </Button>
        </Link>
        <Text>{text}</Text>
        <Extra></Extra>
        
    
    </Container>
}

HeaderBack.defaultProps = {
    text: "Default", 
    onClick: () => { },

}


export default HeaderBack; 