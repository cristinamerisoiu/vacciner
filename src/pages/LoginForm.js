import React, { useState } from "react";
import SignupButton from "../components/SignupButton";
import TextFieldContainer from "../components/TextFieldContainer";
import styled from "styled-components";
import Headline from "../components/Headline";

const LoginFormWrapper = styled.form`
  width: 100%;
  height: 100%;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleLogin = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
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
      <Headline>My account</Headline>
      <LoginFormWrapper>
        <LoginWrapper onSubmit={handleSubmit}>
          <TitleLogin>Already have an account? Login</TitleLogin>
          <TextFieldContainer
            input
            type="email"
            placeholder="Enter Email"
            required
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <TextFieldContainer
            input
            type="password"
            placeholder="Enter Password"
            required
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <ButtonWrapper>
            <SignupButton disabled={!validateForm()} type="submit">
              Login
            </SignupButton>
          </ButtonWrapper>
        </LoginWrapper>

        <LoginWrapper onSubmit={handleSubmit}>
          <TitleLogin>Create your account</TitleLogin>
          <TextFieldContainer
            input
            type="email"
            placeholder="Enter Email"
            required
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <TextFieldContainer
            input
            type="password"
            placeholder="Enter Password"
            required
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
          <ButtonWrapper>
            <SignupButton disabled={!validateForm()} type="submit">
              Sign Up
            </SignupButton>
          </ButtonWrapper>
        </LoginWrapper>
      </LoginFormWrapper>
    </>
  );
}
