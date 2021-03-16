import React, {useState} from 'react';
import styled from 'styled-components';

const LoginHeaderBox = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    color: #18394B;
    padding: 30px;
`;

const LoginHeader = ({text}) => {
  return <LoginHeaderBox>
      {text}
  </LoginHeaderBox>
}

LoginHeader.defaultProps = {
    text:"Text",
}

export default LoginHeader;