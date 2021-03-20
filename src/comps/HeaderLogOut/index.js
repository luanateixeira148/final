import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logout from './logout.svg';
 

const Container = styled.div`
    width: 375px;
    height: 65px;
    background-color: white;
    box-shadow: 0px 2px 10px 0px #727272;
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


const HeaderLogout = ({text}) => {
    return <Container>
        <Extra></Extra>
        <Text>{text}</Text>
        <Button>
        <img src={logout}></img>
        </Button>
    
    </Container>
}

HeaderLogout.defaultProps = {
    text: "Default", 
}


export default HeaderLogout; 