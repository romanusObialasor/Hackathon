import React from "react";
import styled from "styled-components";
import { GrStackOverflow } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdCardMembership } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
const UserHeader = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <TopNav>
          <TextIconHolder to="/userover">
            <Hold>
              <GrStackOverflow />
            </Hold>
            <span>Overview</span>
          </TextIconHolder>

          <TextIconHolder to="/usercreate">
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
              <FaKey />
            </Hold>
            <span>Copy Company's Key</span>
          </TextIconHolder>
        </TopNav>

        <BottomNav>
          <TextIconHolder to="/usersetting">
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
      </Wrapper>
    </Container>
  );
};

export default UserHeader;

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
  width: 100%;
  height: 40px;
  display: flex;
  text-decoration: none;
  align-items: center;
  margin-top: 10px;
  color: black;
  span {
    color: black;
    margin-left: 10px;
    font-size: 14px;
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
`;

const BottomNav = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 100%;

  margin-top: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 300px;
  min-height: 100vh;
  height: 100%;
  //border-right: 1px solid grey;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.1);
  background-color: #e6faff;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
