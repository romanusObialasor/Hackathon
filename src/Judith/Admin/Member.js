import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

const Member = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Card>
            <Info>
              <Image src="" />
              <Avatar>
                <AiOutlineUserAdd />
              </Avatar>
            </Info>
            <Name>Judith Hackerthon</Name>
            <Holder>
              <AiOutlineDelete />
            </Holder>
          </Card>
          <Card>
            <Info>
              <Image />
              <Avatar>
                <AiOutlineUserAdd />
              </Avatar>
            </Info>
            <Name>Romanus Hackerthon</Name>
            <Holder>
              <AiOutlineDelete />
            </Holder>
          </Card>
          <Card>
            <Info>
              <Image />
              <Avatar>
                <AiOutlineUserAdd />
              </Avatar>
            </Info>
            <Name>Esther Hackerthon</Name>
            <Holder>
              <AiOutlineDelete />
            </Holder>
          </Card>
          <Card>
            <Info>
              <Image />
              <Avatar>
                <AiOutlineUserAdd />
              </Avatar>
            </Info>
            <Name>Frederick Hackerthon</Name>
            <Holder>
              <AiOutlineDelete />
            </Holder>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

export default Member;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 70%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 10px;
  width: 400px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.2), 1px 1px 4px rgba(0, 0, 0, 0.2);
`;
const Holder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: red;
  font-size: 22px;
  padding: 10px;
`;
const Info = styled.div`
  padding-left: 10px;
  flex: 2;
  position: relative;
`;
const Name = styled.div`
  flex: 3;
  font-size: 18px;
  font-weight: 500;
`;
const Avatar = styled.div`
  position: absolute;
  font-size: 35px;
  top: 10px;
  left: 23px;
  z-index: -1;
`;
const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid lavender;
  object-fit: cover;
`;
