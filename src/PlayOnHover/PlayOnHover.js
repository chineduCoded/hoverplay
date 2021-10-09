import React from 'react'
import styled from "styled-components"
// import vid from "./assets/Vision.mp4"
import data from "./hoverplay.json"


const PlayOnHover = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Play On Hover</Title>
                <VideoWrapper>
                    {
                        data.map((eli) => (
                            <Video key={eli.id} 
                                poster={eli.img}
                                onMouseOver={e => e.target.play()}
                                onMouseOut={e => e.target.pause()}
                                src={eli.vid}
                                controls
                                loop
                                muted/>  
                        ))
                    }       
                </VideoWrapper>
            </Wrapper>
        </Container>
    )
}

export default PlayOnHover

const Video = styled.video`
width: 280px; 
height: 300px; 
margin: 10px;
object-fit: cover;
border-radius: 10px;
background-color: red;

:hover {
    cursor: pointer;
}
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
background-color: #181123;
color: #fff;
`;

                        