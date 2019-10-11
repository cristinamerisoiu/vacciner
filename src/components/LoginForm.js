import React from "react";
import Globalstyles from "../Globalstyles";
import SignupButton from "../components/SignupButton";
import TextFieldContainer from "../components/TextFieldContainer";
import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export default function LoginForm() {
  return (
    <>
      <LoginFormStyled />
      <Globalstyles />
      <SignupButton />
      <TextFieldContainer />
    </>
  );
}
