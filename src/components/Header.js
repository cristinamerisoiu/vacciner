import React from "react";
import styled from "styled-components";
import SignupButton from "../components/SignupButton";

const HeaderStyled = styled.div`
  display: flex;
  width: 375px;
  height: 64px;
  color: lightblue;
  opacity: 44%;
  border: 1px solid #707070;
  justify-content: flex-end;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <SignupButton>Login</SignupButton>
      <SignupButton>Signup</SignupButton>
    </HeaderStyled>
  );
}
