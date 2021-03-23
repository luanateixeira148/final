import React, { useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
width:375px;
height:81px;
background-color:#F9F9F9;
display:flex;
justify-content:center;
align-items:center;
`;

const Comment = styled.input`
width:338px;
height:45px;
border: 1px solid #ccc;
border-radius:6px;
text-indent: 10px;
color:#6B6B6B;
font-size:16px;
`;

const CommentInput = ({ color, text }) => {
    return <CommentContainer>
        <Comment  type="text" placeholder={text}>
        </Comment>
    </CommentContainer>
}

CommentInput.defaultProps = {
    text: "Leave a comment...",
    color: null,
}

export default CommentInput;