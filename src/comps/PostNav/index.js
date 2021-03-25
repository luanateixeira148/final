import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from './NavPlus.svg';
import {Link} from 'react-router-dom';

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
cursor:pointer;
`;

const PostNav = ({ onClick }) => {
    return  <Container>
                <Link to="/Post">
                    <PlusIcon onClick={onClick}>
                        <img src={Plus} />
                    </PlusIcon>
                </Link>
            </Container>
}

PostNav.defaultProps = {
    onClick: () => { }
}

export default PostNav;