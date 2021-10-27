import React, { useState } from "react"
import styled from "styled-components"
import {Input} from "antd"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"


const Register = () =>{
    const hist = useHistory()

    const [change, setChange] = useState(false);
    const onChange = () => {
        setChange(!change);
      };

    return (
        <Container>
            <Header>HeaderNav</Header>
                <Wrapper>
                <Card>
                    <HeadText>Admin Sign in</HeadText>
                    <InputTab>
                    <Text>Name:</Text>
                    <Inputs placeholder="Insert Name"/>
                    </InputTab>
                    <InputTab>
                    <Text>Email:</Text>
                    <Inputs placeholder="Insert Email"/>
                    </InputTab>
                    <InputTab>
                    <Text>Password:</Text>
                    <Inputs placeholder="Insert Password"/>
                    </InputTab>
                    <SingUp>Sign in</SingUp>
                    <All to="/companyRegister">Haven't register your company yet  <span>SignUp</span>  with us. </All>
                </Card>
            </Wrapper>
        </Container>
    );
  }
  
  export default Register;



const Container = styled.div `
margin: 0;
padding: 0;
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Wrapper = styled.div `
height: auto;
width: 100%;
/* background-color:white; */
/* border-radius: 10px; */
display: flex;
align-items: center;
flex-direction: column;
/* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */

`

const Header = styled.div `
width: 100%;
height: 80px;
background-color: #e6faff;
display: flex;
align-items: center;
justify-content: center;
`
const HeadText = styled.div `
width: 90%;
height: 50px;
font-size: 25px;
color: black;
margin-top: 30px;
margin-bottom: 20px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
`

const Card = styled.div `
border-radius: 10px;
height: 95%;
width: 30%;
display: flex;
color: white;
margin-bottom: 40px;
flex-direction: column;
box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.2), 
            0px 7px 7px rgba(0, 0, 0, 0.5);
/* background-color: #5c49d7; */
align-items: center;
@media screen and (max-width:884px) and (min-width: 769px){
  border-radius: 10px;
  width: 50%;

}
@media screen and (max-width:768px) and (min-width: 310px){
  border-radius: 10px;
  width: 90%;
}
`
const InputTab = styled.div `
width: 90%;
height: 13%;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 1000px) and (min-width: 500px){
width: 90%;
height: 13%;
margin-top: 25px;
display: flex;
flex-direction: column;
align-items: center;   
}
`
const Text = styled.label `
width: 85%;
color: black;
margin-left: 10px;
font-weight: 500;
margin-bottom: 3px;
font-size: 13px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media screen and (max-width: 1000px) and (min-width: 500px){
width: 80%;
color: black;
margin-left: 10px;
font-weight: 500;
margin-bottom: 3px;
font-size: 15px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`

const Inputs = styled(Input)`
width: 85%;
height: 28px;
outline: none;
border-radius: 3px;
padding-left: 5px;
border: 1px solid grey;
::placeholder{
    opacity: 0.6
};
:focus{
    outline: 2px solid rgb(76, 216, 250);
    border: none;
};

@media screen and (max-width: 1000px) and (min-width: 500px){
width: 80%;
height: 28px;
outline: none;
border-radius: 3px;
padding-left: 5px;
border: 1px solid grey;
::placeholder{
    opacity: 0.6
};
:focus{
    outline: 2px solid rgb(76, 216, 250)
}; 
}
`

const SingUp = styled.button `
margin-top: 30px;
margin-bottom: 30px;
width: 80%;
font-weight: 700;
height: 30px;
display: flex;
border: none;
color: white;
border-radius: 5px;
align-items: center;
justify-content: center;
background-color: rgb(0, 204, 254);
transition: all 350ms;
transform: scale(1);

:hover{
    transform: scale(0.958);
    cursor: pointer;
    /* background-color: rgb(0, 164, 284); */
    color: black;
}
`

const All = styled(Link)`
text-decoration: none;
color: black;
font-size: 11px;
margin-bottom: 10px;
span{
    color: blue;
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
}
`;