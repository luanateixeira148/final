import React, { Component } from 'react';
import styled from 'styled-components'
import Back from '../../back.png'

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


const Comment = ({HeaderTitle, Title, Username, Description, Comments, Commentor}) =>{
    return  <Container>
                    <Header>
                        <BackButton img src={Back} alt="Back Icon"/>
                        {HeaderTitle}
                    </Header>

                    <div className="ScrollDiv">
                    <Image></Image>

                    <TitleDiv>
                        <TitleText>{Title}</TitleText>
                    </TitleDiv>

                    <UsernameTitle>by {Username}</UsernameTitle>

                    <DescriptionBox>{Description}</DescriptionBox>

                    <CommentTitle>Comments</CommentTitle>

                    <CommentText>
                        <CommentorName>{Commentor}</CommentorName>
                        {Comments}
                    </CommentText>

                    <CommentText>
                        <CommentorName>{Commentor}</CommentorName>
                        {Comments}
                    </CommentText>

                    <CommentText>
                        <CommentorName>{Commentor}</CommentorName>
                        {Comments}
                    </CommentText>

                    <CommentText>
                        <CommentorName>{Commentor}</CommentorName>
                        {Comments}
                    </CommentText>

                </div>
                <Footer />
            </Container>
}

Comment.defaultProps = {
    HeaderTitle:"Default Title",
    Title:"Default Title",
    Username:"Default Username",
    Number:99,
    Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis non ipsum a accumsan. Vivamus id hendrerit lorem, nec viverra leo. Nam nibh sapien, volutpat vitae mollis sed, tempus eu arcu.",
    Comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis non ipsum a accumsan. Vivamus id hendrerit lorem, nec viverra leo. Nam nibh sapien, volutpat vitae mollis sed, tempus eu arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis non ipsum a accumsan. Vivamus id hendrerit lorem, nec viverra leo. Nam nibh sapien, volutpat vitae mollis sed, tempus eu arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis non ipsum a accumsan. Vivamus id hendrerit lorem, nec viverra leo. Nam nibh sapien, volutpat vitae mollis sed, tempus eu arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.320px",
    Commentor:"Default Name"
}

export default Comment;