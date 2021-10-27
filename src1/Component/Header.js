import React, {useState} from 'react'
import styled from "styled-components"
import SideBar from './SideBar'
import Fade from 'react-reveal/Fade';
import {HiMenuAlt1} from "react-icons/hi"
import {GiCancel} from "react-icons/gi"

const QuaryHeader = () => {

    const [toggle, setToggle] = useState(false)

    const onToggle = ()=>{
        setToggle(!toggle)
    }

    return (
        <Container>
          <Wrapper>
              <Logo src="logo3.png"/>
              <List>
                  <span>Home</span>
                  <span>About</span>
                  <span>Hotels</span>
                  <span>Register a Hotel</span>
               
              </List>
<h> <Button ontoggle={onToggle}>Login</Button></h>
<MyMenu>
   {toggle ? (
         <Cancel onClick={onToggle}/>
       ) :(
        <MenuIcon onClick={onToggle}/>
       )}
</MyMenu>
          </Wrapper>
          <Fade left when={toggle}>
          <SideBar />
        </Fade>
        </Container>
    )
}

export default QuaryHeader

const Container = styled.div`
width: 100%;
height: 100px;
color: #004080;
background-color:white;
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: railway;
/* font-family: Old Standard TT; */
h{
    margin-right: 20px;
}
`

const Logo = styled.img`
width: 150px;
height: 80px;
object-fit: contain;
margin-left: 20px;
`

const List = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;


span{
    font-size: 20px;
    font-weight: bold;
    font-family: raleway;
}

@media screen and (max-width: 760px){
    display: none
}
`

const Button = styled.div`
width: 100px;
height: 40px;
font-size: 20px;
    font-weight: bold;
    font-family: raleway;
display: flex;
align-items: center;
background-color: #004080;
color: white;
border-radius: 5px;
justify-content: center;
cursor: pointer;

@media screen and (max-width: 760px){
    display: none
}
`

const MyMenu = styled.div`
width: 100px;
height: 40px;
font-size: 20px;
    font-weight: bold;
    font-family: poppins;
display: flex;
align-items: center;
border-radius: 5px;
justify-content: center;
cursor: pointer;


@media screen and (min-width: 760px){
    display: none
}
`

const MenuIcon= styled(HiMenuAlt1)`
font-size: 40px;
font-weight: bold;
`
const Cancel= styled(GiCancel)`
font-size: 40px;
font-weight: bold;
`