import React, { useState } from "react";
import SignupButton from "../components/SignupButton";
import TextFieldContainer from "../components/TextFieldContainer";
import styled from "styled-components";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }

  // onSubmit = event => {
  //   event.preventDefault();
  //   fetch("/api/authenticate", {
  //     method: "POST",
  //     body: JSON.stringify(),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <>
      <LoginFormWrapper>
        <LoginWrapper onSubmit={handleSubmit}>
          <TextFieldContainer
            input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            onChange={event => setEmail(event.target.value)}
            value={email}
          ></TextFieldContainer>
          <TextFieldContainer
            input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onChange={event => setPassword(event.target.value)}
            value={password}
          ></TextFieldContainer>
        </LoginWrapper>
        <ButtonWrapper>
          <SignupButton disabled={!validateForm()} type="submit">
            Login
          </SignupButton>
          <SignupButton disabled={!validateForm()} type="submit">
            Sign Up
          </SignupButton>
        </ButtonWrapper>
      </LoginFormWrapper>
    </>
  );
}
