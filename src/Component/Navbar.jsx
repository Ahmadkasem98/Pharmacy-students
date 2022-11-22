import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #1677ff;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  background-color: black;
  color: #1677ff;
  padding: 3px;
  background-color: white;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    transform: scale(1.01, 1.01);
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const Linke = styled.a`
  text-decoration: none;
  color: black;
`;

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>
          <Logo onClick={() => navigate("/")}>Students Home.</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate("/Register")}>Register</MenuItem>

          <MenuItem onClick={() => navigate("/Login")}>Sign in</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
