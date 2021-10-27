import React from 'react'
import styled from 'styled-components'


const SideBar = ({toggle, setToggle}) => {
    return (
        <Container>
            <Content 
            onClick={()=>{
            setToggle(false);
            console.log(toggle);
            }}
            >
               <Holder>
               <span>Home</span>
                <hr/>
               </Holder>
               <Holder>
               <span>About Us</span>
                <hr/>
               </Holder>
               <Holder>
               <span>Hotels</span>
                <hr/>
               </Holder>
               <Holder>
               <span>Register a Hotel</span>
                <hr/>
               </Holder>
              
            </Content>
            <Logo src="logo.png"/>
        </Container>
    )
}

export default SideBar


const Container = styled.div`
width: 400px;
height: 80vh;
background-color: #0463ca;
`

const Content = styled.div`
padding-top: 30px;
height: 45%;
width: 90%;
display: flex;
justify-content: center;
flex-direction: column;
`
const Holder = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;

span{
    font-size: 20px;
    font-weight: bold;
    font-family: poppins;
    margin-left: 20px;
}

 hr{
   
width: 90%; 
} 
`

const Logo = styled.img`
width: 150px;
height: 80px;
object-fit: contain;
margin-left: 20px;
margin-top: 20px;
`