import React from "react";
import Globalstyles from "../Globalstyles";
import SignupButton from "../components/SignupButton";
import TextFieldContainer from "../components/TextFieldContainer";
import styled from "styled-components";
import Footer from "../components/Footer";

const LoginFormWrapper = styled.form`
  width: 100%;
  height: 100%;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function LoginForm() {
  return (
    <>
      <Globalstyles />
      <LoginFormWrapper>
        <LoginWrapper>
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
        </LoginWrapper>
        <ButtonWrapper>
          <SignupButton>Login</SignupButton>
          <SignupButton>Sign Up</SignupButton>
        </ButtonWrapper>
      </LoginFormWrapper>
      <Footer />
    </>
  );
}
