import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd';

const Landing = () => {

    const contentStyle = {
        height: '60vh',
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        
      };
    return (
        <Container>
          <Wrapper>
          <Carousel autoplay>
            <div>
            <h3 style={contentStyle}><Image src="/images/6.jpg"/>
            <Text>Welcome to Hotel booking platform</Text>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}><Image src="/images/5.jpg"/>
            <Text>Here we give you an amazing tour of hotels to whatever destination you are heading</Text>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}><Image src="/images/4.jpg"/>
            <Text>we have trusted hotels registed on our platforms</Text>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}><Image src="/images/confdine.jpg"/>
            <Text>they all promise you amazing experience</Text>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}><Image src="/images/resort.jpg"/>
            <Text>we have resort options, holiday fun assurance</Text>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}><Image src="/images/resort1.jpg"/>
            <Text>lets  get started</Text>
            </h3>
            </div>
        </Carousel>
          </Wrapper>
        </Container>
    )
}

export default Landing

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
height: 100vh;
object-fit: cover;
position: relative;

box-shadow:rgb(255 255 255/69%) 26px 10px 10px 10px -10px;
`
// @media screen and (max-width:768px){    
// }


const Text = styled.div`
position: absolute;
font-size: 30px;
font-weight: bold;
font-family: raleway;

`