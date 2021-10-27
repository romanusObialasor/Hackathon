import React from 'react'
import styled from "styled-components"
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";

const Slides = () => {

    
const slideImages = [
    {
        url: 'images/slide_2.jpg',
      },
      {
        url: 'images/slide_3.jpg',
      },
      {
        url: 'images/slide_4.jpg',
      },
      {
        url: 'images/slide_5.jpg',
      },
    ];
    return (
        <Container>
      
        <Wrapper >
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </Wrapper>
    
      </Container>
    )
}

export default Slides

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`

const Wrapper = styled.div`
/* margin-top: 80px; */
`
const Image = styled.img`
width: 100vw;
height: 80vh;
object-fit: cover;
position: absolute;

box-shadow:rgb(255 255 255/69%) 26px 10px 10px 10px -10px;
`