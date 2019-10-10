import React from "react";
import styled from "styled-components";
import LoginButton from "../components/LoginButton";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 375px;
  height: 64px;
  color: lightblue;
  opacity: 44%;
  border: 1px solid #707070;
`;

export default Header;
export function Login() {
  return <LoginButton />;
}
