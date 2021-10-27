import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineArrowRight,
} from "react-icons/ai";

const SignUpForm = () => {
  const [show, setShow] = useState(true);
const [chn, setChn] = useState(false)

const onChn = () =>{
  setChn(!chn)
}
  const OnToggle = () => {
    setShow(!show);
  };
  return (
    <Container>
     {
       chn ?(
        <Form>
        <Left>
          <Inner>
            <InnerWrapper>
              <Logo src="/images/10.png" />
              <Line />
              <Text>
                <Header>Welcome to simple</Header>
                <Content>
                  Sign in with your company's key to get assess to it's projects
                </Content>
              </Text>
              <Auth>
                Already have an account <br />
                <span onClick={onChn}>Sign in</span>
              </Auth>
            </InnerWrapper>
          </Inner>
        </Left>
        <Right>
          <Wrapper>
            <Head>Sign Up</Head>
            <Inputs>
              <InputHolder>
                <ImageLabel>Upload image</ImageLabel>
                <Inputer
                  placeholder="Enter your Email"
                  type="file"
                  style={{
                    display: "none",
                  }}
                />
              </InputHolder>
              <InputHolder>
                <Label>Set username</Label>
                <Inputer placeholder="Enter your username" />
              </InputHolder>
              <InputHolder>
                <Label>Email address</Label>
                <Inputer placeholder="Enter your Email" />
              </InputHolder>
              <InputHolder>
                <Label>Set Password</Label>
                <PasswordSecret>
                  {!show ? (
                    <PasswordInputer placeholder="Enter your password" />
                  ) : (
                    <PasswordInputer
                      placeholder="Enter your password"
                      type="password"
                    />
                  )}
                  {show ? (
                    <Show onClick={OnToggle} />
                  ) : (
                    <Hide onClick={OnToggle} />
                  )}
                </PasswordSecret>
              </InputHolder>
              <InputHolder>
                <Label>Company's key</Label>
                <Inputer placeholder="Enter your company's Key" />
              </InputHolder>
            </Inputs>
            <Sign>
              <span>Sign up</span>
              <Arrow />
            </Sign>
            <All> Already have  an account <span onClick={onChn}>sign in</span> </All>
          </Wrapper>
        </Right>
      </Form>
       ):(
        <Form>
        <Left>
          <Inner>
            <InnerWrapper>
              <Logo src="/images/10.png" />
              <Line />
              <Text>
                <Header>Welcome to simple</Header>
                <Content>
                  Sign in with your company's key to get assess to it's projects
                </Content>
              </Text>
              <Auth>
               Don't have an account <br />
                <span onClick={onChn}>Sign Up</span>
              </Auth>
            </InnerWrapper>
          </Inner>
        </Left>
        <Right>
          <Wrapper>
            <Head>Sign In</Head>
            <Inputs>
              <InputHolder>
              
                <Inputer
                  placeholder="Enter your Email"
                  type="file"
                  style={{
                    display: "none",
                  }}
                />
              </InputHolder>
             
              <InputHolder>
                <Label>Email address</Label>
                <Inputer placeholder="Enter your Email" />
              </InputHolder>
              <InputHolder>
                <Label>Set Password</Label>
                <PasswordSecret>
                  {!show ? (
                    <PasswordInputer placeholder="Enter your password" />
                  ) : (
                    <PasswordInputer
                      placeholder="Enter your password"
                      type="password"
                    />
                  )}
                  {show ? (
                    <Show onClick={OnToggle} />
                  ) : (
                    <Hide onClick={OnToggle} />
                  )}
                </PasswordSecret>
              </InputHolder>
              <InputHolder>
                <Label>Company's key</Label>
                <Inputer placeholder="Enter your company's Key" />
              </InputHolder>
            </Inputs>
            <Sign>
              <span>Sign In </span>
              <Arrow />
            </Sign>
            <All>Don't have an account <span onClick={onChn}>sign up</span> </All>
          </Wrapper>
        </Right>
      </Form>
       )
     }
    </Container>
  );
};

export default SignUpForm;
const All = styled.div`
display: none;
@media screen and (max-width: 768px) {
    display: unset;
    padding-top: 20px;
span{
    color: red;
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
}
  
  }
`
const Logo = styled.img`
  height: 50px;
  margin-left: -10px;
`;

const InnerWrapper = styled.div`
  height: 90%;
  width: 80%;
  color: white;
`;

const Line = styled.div`
  width: 50px;
  background: white;
  height: 1px;
  margin-top: 10px;
`;

const Text = styled.div`
  height: 60%;
  margin-top: 10px;
`;

const Auth = styled.div`
  width: 170px;
  font-size: 14px;
  span {
    font-weight: 500;
    cursor: pointer;
  }
`;

const Header = styled.div`
  font-size: 14px;
`;

const Content = styled.div`
  margin-top: 5px;
  font-weight: 300;
  font-size: 17px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lavender;
`;

const Form = styled.div`
  width: 50%;
  height: 75%;
  background: white;
  display: flex;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px,
    rgb(0 0 0 / 43%) 0px 16px 10px -10px;
  @media screen and (max-width: 768px) {
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 0.5;
  border-radius:10px 0  0 10px ;
  background-image: url("./images/11.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  width: 300px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Head = styled.div`
  font-size: 27px;
  font-weight: 500;
`;

const Inputs = styled.div`
  margin-top: 20px;
`;

const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-family: sans-serif;
`;

const Label = styled.label`
  font-size: 13px;
  opacity: 0.5;
  margin-bottom: 4px;
  font-weight: 600;
`;

const Inputer = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  padding-left: 5px;
  ::placeholder {
    font-family: sans-serif;
    font-size: 11px;
    opacity: 0.7;
  }
`;

const ImageLabel = styled.label`
font-weight: bold;
  background: rgb(0,204, 254);
  width: 260px;
  height: 35px;
  /* outline: 1px solid rgba(0, 252, 100, 1); */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.958);
    color: black;
  }
`;

const PasswordSecret = styled.div`
  width: 250px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const PasswordInputer = styled.input`
  width: 220px;
  height: 30px;
  border: none;
  outline: none;
  background: transparent;
  padding-left: 5px;
  ::placeholder {
    font-family: sans-serif;
    font-size: 11px;
    opacity: 0.7;
  }
`;

const Show = styled(AiFillEye)`
  opacity: 0.5;
  cursor: pointer;
`;

const Hide = styled(AiFillEyeInvisible)`
  opacity: 0.5;
  cursor: pointer;
`;

const Sign = styled.div`
  background: rgb(0,204, 254);
  width: 260px;
  height: 35px;
  /* outline: 1px solid rgba(0, 252, 100, 1); */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 350ms;
  :hover {
    transform: scale(0.958);
    color: black;
  }
`;

const Arrow = styled(AiOutlineArrowRight)`
  font-size: 10px;
  margin-bottom: -5px;
  margin-left: 5px;
`;
