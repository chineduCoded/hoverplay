import React from 'react'
import styled from "styled-components"
import vid from "./assets/Vision.mp4"

const PlayOnHover = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Play On Hover</Title>
                <VideoWrapper>
                    <Name>Ope</Name>
                    <Video 
                    poster="assets/4.jpg"
                    onMouseOver={e => e.target.play()}
                    onMouseOut={e => e.target.pause()}
                    src={vid}
                    controls
                    loop
                    muted
                    Your browser does not support the video
                    />
                </VideoWrapper>
            </Wrapper>
        </Container>
    )
}

export default PlayOnHover

const Name = styled.h2`
text-align: center;
color: black;
font-size: 60px;
padding: 10x;
margin: 0 15px;
text-transform: uppercase;
position: absolute;
z-index: -1;
opacity: 0.8;
`;

const Video = styled.video`
width: 280px; 
height: 300px; 
margin: 10px;
object-fit: cover;
border-radius: 10px;

`;

const Title = styled.div`
padding: 0 10px;
font-size: 40px;
font-weight: bold;
text-transform: uppercase;
margin-bottom: 30px;
text-align: center;
`;

const VideoWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
position: relative;
overflow: hidden;
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 60px;s
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: #000;
color: #fff;
`;

