import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Plus from './plus.svg'; 

const Container = styled.div`
    width: 280px;
    height: 280px;
    background-color: white;
    border: #3D3D3D dotted 4px; 
    align-items: center;
`;

const Button = styled.input`
    margin-top: 20%;
`;

const Header = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #6B6B6B;
    margin-top: 10%;
    padding: 0px 15px 0px 15px;
`;

const Text = styled.div`
    font-size: 16px;
    color: #6B6B6B;
    margin-top: 5%;
    padding: 0px 10px 0px 10px;
`;



const UploadImage = ({onClick}) => {
    return <Container>
        <Button onClick={onClick} type="file"></Button>
        <Header>Click here to upload your design</Header>
        <Text>Jpeg, svg or png files are accepted</Text>
    </Container>
    
}

UploadImage.defaultProps = {
    onClick: () => { }
  }

export default UploadImage; 