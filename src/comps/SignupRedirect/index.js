import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from '@material-ui/core';
import {Link} from 'react-router-dom';

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

const SignupRedirect = ({ text, text2 }) => {
    return  <withRouter>
    
                <CommentContainer>
                    <Info>{text}</Info>
                    <Link to="/"><Sign>{text2}</Sign></Link>
                </CommentContainer>

            </withRouter>
}

SignupRedirect.defaultProps = {
    text: "Not a member yet?",
    text2: "Sign Up",
}

export default SignupRedirect;