import React, { Component } from 'react';
import styled from 'styled-components'
import Back from '../../back.png'
import {Link} from 'react-router-dom';
import CommentPost from '../../comps/CommentPost'; 
import SurfingApp2 from './surfingapp2.png';


const Container = styled.div `
background-color:#F9F9F9;
width:375px;
height:812px;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
`;

const Header = styled.div `
background-color:white;
width:375px;
height:65px;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
font-size:27px;
display:flex;
justify-content:center;
align-items:center;
justify-content:center;
position:relative;
`;

const BackButton = styled.img `
width:25px;
height:25px;
position:absolute;
left:20px;
top:20px;
`;

const Image = styled.div `
background-color:red;
width:320px;
min-height:320px;
border-radius:6px;
margin-top:25px;
`;

const TitleDiv = styled.div `
// background-color:pink;
width:320px;
height:30px;
border-radius:6px;
display:flex;
position:relative;
margin-top:35px;
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

const UsernameTitle = styled.p `
// background-color:orange;
margin:0px;
display:flex;
justify-content:flex-start;
margin-bottom:5px;
width:320px;
color:grey;
`;

const DescriptionBox = styled.div `
// background-color:green;
height:100%;
width:320px;
padding:0px;
text-align:left;
margin-bottom:15px;
`;

const CommentTitle = styled.div `
// background-color:blue;
height:auto;
width:320px;
padding:0px;
margin-bottom:15px;
text-align:left;
`;

const CommentorName = styled.h4 `
background: #orange;
width: 375px;
height: auto;
position:relative;
left:0px
font-weight: 600;
font-size:25;
margin:0px;
margin-bottom:5px;
`;

const CommentText = styled.div `
// background-color:skyblue;
// height:auto;
width:320px;
padding:0px;
margin:0px;
display:flex;
justify-content:flex-start;
// overflow: hidden;
// white-space: inherit;
text-align:left;
flex-direction:column;
margin-bottom:25px;
`;

const Footer = styled.div `
background: #F9F9F9;
box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
width: 375px;
height: 81px;
position:absolute;
bottom:0px
`;


const Comment = ({HeaderTitle, Title, Username, Description, Comments, Commentor, Comments2, Commentor2, Comments3, Commentor3}) =>{
    return  <Container>
                    <Header>
                        <Link to="/Main">
                        <BackButton img src={Back} alt="Back Icon"/>
                        </Link>
                        {HeaderTitle}
                    </Header>

                    <div className="ScrollDiv">
                    <Image><img src={SurfingApp2}></img></Image>

                    <TitleDiv>
                        <TitleText>{Title}</TitleText>
                    </TitleDiv>

                    <UsernameTitle>by {Username}</UsernameTitle>

                    <DescriptionBox>{Description}</DescriptionBox>


                    <CommentText>
                        <CommentorName>{Commentor}</CommentorName>
                        {Comments}
                    </CommentText>

                    <CommentText>
                        <CommentorName>{Commentor2}</CommentorName>
                        {Comments2}
                    </CommentText>

                    <CommentText>
                        <CommentorName>{Commentor3}</CommentorName>
                        {Comments3}
                    </CommentText>

                </div>
                <CommentPost />
            </Container>
}

Comment.defaultProps = {
    HeaderTitle:"Surfing app redesign",
    Title:"Suring app redesign",
    Username:"Emma Parsons",
    Number:3,
    Description:"I redesigned this surfing app for my school project! Any feedback would be appreciated!",
    Comments:"The UI design looks beautiful! One thing I noticed is the button in the home page is hard to see. Change the color to brighter color.",
    Commentor:"Henry Leung",
    Comments2:"Great app idea! As a surfing fan, I would definitly use this app",
    Commentor2:"Ramin Shadmehr",
    Comments3:"I would use color blue instead of purple because blue matches with surfing.",
    Commentor3:"Wim Tueling"
}

export default Comment;