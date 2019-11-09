import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo";
// import Navigation from "../components/Navigation";
// import MenuHamburger from "../components/MenuHamburger";

const StartMain = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #e8f1f2;
  align-items: center;
  justify-content: center;
`;

export default function Start() {
  return (
    <>
      <StartMain>
        <Logo />
      </StartMain>
    </>
  );
}
