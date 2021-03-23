import React, { useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
width:375px;
height:67px;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
`;

const Info = styled.div`
font-size:18px;
color:#6B6B6B;
`;

const Sign = styled.div`
font-size:18px;
color:#DE5571;
cursor:pointer;
`;

const LoginSignup = ({ text, text2 }) => {
    return <CommentContainer>
        <Info>{text}</Info>
        <Sign>{text2}</Sign>
    </CommentContainer>
}

LoginSignup.defaultProps = {
    text: "Not a member yet?",
    text2: "Sign Up",
}

export default LoginSignup;