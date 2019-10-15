import React from "react";
import Globalstyles from "../Globalstyles";
import SignupButton from "../components/SignupButton";
import TextFieldContainer from "../components/TextFieldContainer";
import styled from "styled-components";

const LoginFormWrapper = styled.form`
  width: 100vw;
  height: 100vh;
`;

const DivEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
`;

const DivSignupButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default function LoginForm() {
  return (
    <>
      <Globalstyles />
      <LoginFormWrapper>
        <DivEmail>
          <TextFieldContainer
            input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          ></TextFieldContainer>
          <TextFieldContainer
            input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          ></TextFieldContainer>
        </DivEmail>
        <DivSignupButton>
          <SignupButton>Login</SignupButton>
          <SignupButton>Sign Up</SignupButton>
        </DivSignupButton>
      </LoginFormWrapper>
    </>
  );
}
