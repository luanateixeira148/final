import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logout from './logout.svg';
import {Link} from 'react-router-dom';

const Container = styled.div`
    width: 375px;
    height: 65px;
    background-color: white;
    box-shadow: 0 7px 10px -4px #D6D6D6;
    align-items: center;
    display: flex;
    justify-content: center;
    
`;

const Extra = styled.div`
 width: 25px;
 height 25px;
`;

const Text = styled.div`
    color: #3D3D3D;
    font-size: 26px; 
    line-height: 33px;
    padding: 0px 90px 0px 90px; 
    
`;

const Button = styled.div`
line-height: 10px;

`;


const HeaderLogout = ({text, onClick}) => {
    return <Container>
        <Extra></Extra>
        <Text>{text}</Text>
        <Link to="/Login">
        <Button onClick={onClick}>
        <img src={logout}></img>
        </Button>
        </Link>
    
    </Container>
}

HeaderLogout.defaultProps = {
    text: "Default", 
    onClick: () => { },
}


export default HeaderLogout; 