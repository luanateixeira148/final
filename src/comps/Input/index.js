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
`;

const InputBox = styled.input`
    background: #FFFFFF;
    border: 1px solid #C1C1C1;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 6px;
    min-height: 45px;
    min-width: 290px;
`;

const Input = ({onChange, placeholder, label}) => {
  return <InputContainer>
    <Label>{label}</Label>
    <InputBox placeholder={placeholder} />
  </InputContainer>
}

Input.defaultProps = {
placeholder:"Input",
label:"Label"
}

export default Input;