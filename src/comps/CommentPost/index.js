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
width:268px;
height:45px;
border: 1px solid #ccc;
border-radius:6px 0 0 6px;
text-indent: 10px;
color:black;
font-size:18px;
`;

const Post = styled.button`
width:70px;
height:50px;
color:#3D88AF;
background-color:white;
border: 1px solid #ccc;
border-radius:0 6px 6px 0;
font-size:18px;
cursor:pointer;
font-weight:bold;
`;

const CommentPost = ({}) => {
    return <CommentContainer>
        <Comment type="text" placeholder="Leave a comment..." />
        <Post type="button">Post</Post>
    </CommentContainer>
}

CommentPost.defaultProps = {
}

export default CommentPost;