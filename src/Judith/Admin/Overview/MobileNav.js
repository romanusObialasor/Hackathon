import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Fade from "react-reveal/Fade";
import { GiCancel } from "react-icons/gi";
import { GrStackOverflow } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <IconHolder>
        {toggle ? <Icon2 onClick={onToggle} /> : <Icon onClick={onToggle} />}
        <Fade left when={toggle}>
          <Nav>
            <TopNav>
              <TextIconHolder to="/">
                <Hold>
                  <GrStackOverflow />
                </Hold>
                <span>Overview</span>
              </TextIconHolder>

              <TextIconHolder>
                <Hold>
                  <FaProjectDiagram />
                </Hold>
                <span>Create Projects</span>
              </TextIconHolder>
              <TextIconHolder>
                <Hold>
                  <IoStatsChartSharp />
                </Hold>
                <span>Charts</span>
              </TextIconHolder>
              <TextIconHolder>
                <Hold>
                  <MdCardMembership />
                </Hold>
                <span>Members</span>
              </TextIconHolder>
              <TextIconHolder>
                <Hold>
                  <FaKey />
                </Hold>
                <span>Copy Company's Key</span>
              </TextIconHolder>
            </TopNav>

            <BottomNav>
              <TextIconHolder>
                <Hold>
                  <GoSettings />
                </Hold>
                <span>Settings</span>
              </TextIconHolder>
              <TextIconHolder>
                <Hold>
                  <BiLogInCircle />
                </Hold>
                <span>Log Out</span>
              </TextIconHolder>
            </BottomNav>
          </Nav>
        </Fade>
      </IconHolder>
    </Container>
  );
};

export default MobileNav;

const Small = styled.div`
  // border: 2px solid #be01ff;
  width: 70%;
  height: 70%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hold = styled.div`
  height: 25px;
  width: 25px;
  border: 4px solid #be01ff;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  :hover {
    color: black;
  }
`;

const TextIconHolder = styled(Link)`
  width: 200px;
  height: 40px;
  display: flex;
  //flex-direction: column;
  text-decoration: none;
  align-items: center;
  margin-top: 30px;
  // justify-content: center;
  color: black;
  span {
    color: black;
    margin-left: 10px;
    font-size: 15px;
    font-weight: 500;
  }
  :hover {
    background-color: rgba(252, 0, 252, 0.1);

    border-radius: 5px;
  }
  //border-bottom: 1px solid black;
`;

const Logo = styled.img`
  width: 150px;
  height: 60px;
  background-color: white;
  margin-top: 50px;
  border: 1px solid #be01ff;
`;

const TopNav = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  align-items: center;
  flex: 1;
  // justify-content: center;
`;

const BottomNav = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;

  padding-bottom: 80px;
  align-items: center;
`;

// const TextIconHolder = styled.div`
//   width: 90%;
//   display: flex;
//   // background-color: red;
//   margin-top: 50px;
// `;

const Nav = styled.div`
  width: 340px;
  height: 100vh;
  min-height: 450px;
  background-color: #e6faff;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  flex: 1;
`;

const Icon2 = styled(GiCancel)`
  display: none;
  @media screen and (max-width: 768px) {
    //width: 100%;
    display: flex;
    font-weight: bold;
    font-size: 30px;
    position: fixed;
    z-index: 9;
    padding: 15px;
  }
`;

const Icon = styled(GiHamburgerMenu)`
  display: none;
  @media screen and (max-width: 768px) {
    //width: 100%;
    display: flex;
    font-weight: bold;
    font-size: 25px;
    position: fixed;
    z-index: 9;
    padding: 15px;
  }
`;

const IconHolder = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    height: 50px;
    position: absolute;
    z-index: 9;
    display: flex;
    //background-color: red;
    width: 100%;
    //margin-left: 30px;
    //padding: 10px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  /* min-height: 100vh;
  height: 100%;
  width: 100%; */
  display: flex;
  // background-color: red;
  /* background-color: #fafafa;
  justify-content: center;
  @media screen abd (max-width: 768px) {
    position: relative;
  } */
  //padding-top: 50px;
`;
