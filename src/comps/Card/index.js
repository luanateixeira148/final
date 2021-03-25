import React from "react";
import styled from 'styled-components'
import Bubble from '../../bubble.png'
import {Link} from 'react-router-dom';

const Container = styled.div `
background-color:white;
width:320px;
min-height:456px;
border-radius:6px;
// justify-content:center;
align-items:center;
display:flex;
// padding:20px;
flex-direction:column;
position:relative;
margin:10px;
`;

const ImageBox = styled.div `
background-color:darkgrey;
width:280px;
height:280px;
border-radius:6px;
margin:20px;
margin-bottom:0px;
`;

const TitleDiv = styled.div `
// background-color:pink;
width:280px;
height:30px;
border-radius:6px;
display:flex;
position:relative;
margin-top:5px;
margin-bottom:5px;
`;

const TitleText = styled.div `
width:auto;
height:auto;
// justify-content: flex-start;
font-family: Lato;
font-style: normal;
font-weight: 600;
font-size: 20px;
margin:0px;
bottom:0px;
position:absolute;
// color:brown;
`;

const CommentBubble = styled.div `
// background-color:red;
height:28px;
width:28px;
display:flex;
justify-content:flex-end;
right:30px;
bottom:0px;
position:absolute;
padding:0px;
img
`;
const CommentNumber = styled.div `
// background-color:purple;
display:flex;
justify-content:flex-end;
right:0px;
position:absolute;
padding:0px;
bottom:0px;
color:grey;
font-size:20px;
`;

const UsernameTitle = styled.p `
// background-color:orange;
margin:0px;
display:flex;
justify-content:flex-start;
margin-bottom:5px;
width:280px;
color:grey;
`;

const DescriptionBox = styled.div `
// background-color:green;
height:43px;
width:280px;
padding:0px;
margin:0px;
display:flex;
justify-content:flex-start;
overflow: hidden;
// text-overflow: ellipsis;
white-space: inherit;
text-align:left;
`;

const SeeMore = styled.div `
// background-color:tomato;
color:#3D88AF;
width:280px;
height:20px;
font-weight:bold;
bottom:20px;
left:20px;
position:absolute;
display:flex;
justify-content:flex-start;
cursor:pointer;
`;

    const Card = ({Title, Username, Number, Description}) =>{
    return  <Container>
                <ImageBox></ImageBox>
                <TitleDiv>
                    <TitleText>{Title}</TitleText>
                    <CommentBubble><img src={Bubble} alt="Bubble Icon" /></CommentBubble>
                    <CommentNumber>{Number}</CommentNumber>
                </TitleDiv>
                <UsernameTitle>by {Username}</UsernameTitle>
                <DescriptionBox>{Description}</DescriptionBox>
                <Link to="/Comment">
                <SeeMore>See More</SeeMore>
                </Link> 
            </Container>   
    }

    Card.defaultProps = {
        Title:"Default Title",
        Username:"Default Username",
        Number:99,
        Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis non ipsum a accumsan. Vivamus id hendrerit lorem, nec viverra leo. Nam nibh sapien, volutpat vitae mollis sed, tempus eu arcu."
    }

export default Card;