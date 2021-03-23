import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../Button'
import Input from '../Input';
import LoginHeader from '../LoginHeader';

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

const LoginCard = ({buttontext, headertext}) => {
  return <LoginCardContainer>
      <LoginHeader text={headertext}/>
      <Input label="Username" />
      <Input label="Password" />
      <Button text={buttontext}/>
  </LoginCardContainer>
}

LoginCard.defaultProps = {
buttontext:"buttontext",
headertext:"headertext"
}

export default LoginCard;