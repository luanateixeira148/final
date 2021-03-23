import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from './NavPlus.svg';

const Container = styled.div`
width:375px;
height:70px;
background-color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;
`;

const PlusIcon = styled.div`
width:50px;
height:50px;
`;

const PostNav = ({ onClick }) => {
    return <Container>
        <PlusIcon onClick={onClick}>
            <img src={Plus} />
        </PlusIcon>
    </Container>
}

PostNav.defaultProps = {
    onClick: () => { }
}

export default PostNav;