import React, {useState} from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: #60D1A4;
  min-height: 45px;
  min-width:${props=>props.width ? props.width : "160px"};
  max-width:${props=>props.width ? props.width : "230px"};
  border-radius: 50px;
  border: none;
  color: #FFFFFF;
  margin: 35px;
`;

const Button = ({onClick, text}) => {
  return <ButtonContainer onClick={onClick}>
      {text}
    </ButtonContainer>
}

Button.defaultProps = {
  text:"Button",
  width: "160px",
  onClick: () => { }
}

export default Button;