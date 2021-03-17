import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import back from './back2.svg';
 

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
    width: 14px;
    height: 25px;
`;

const Text = styled.div`
    color: #3D3D3D;
    font-size: 26px; 
    line-height: 33px;
    padding: 0px 110px 0px 110px; 
    
`;

const Button = styled.div`
line-height: 10px;

`;


const HeaderBack = ({text}) => {
    return <Container>
        <Button>
        <img src={back}></img>
        </Button>
        <Text>{text}</Text>
        <Extra></Extra>
        
    
    </Container>
}

HeaderBack.defaultProps = {
    text: "Default", 
}


export default HeaderBack; 