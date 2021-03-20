import React, {useState} from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 10px;
`;

const Label = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #6B6B6B;
    text-align: left;
    margin-bottom: 5px;
`;

const InputBox = styled.input`
    background: #FFFFFF;
    border: 1px solid #C1C1C1;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    min-height: 45px;
    min-width: 290px;
`;

const Input = ({placeholder, label}) => {
  return <InputContainer>
    <Label>{label}</Label>
    <InputBox />
  </InputContainer>
}

Input.defaultProps = {
label:"Label"
}

export default Input;