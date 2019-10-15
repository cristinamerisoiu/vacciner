import React from "react";
import styled from "styled-components";
import Logo from "../icons/Logo";

const StartPageMain = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #e8f1f2;
  align-items: center;
  justify-content: center;
`;

export default function StartPage() {
  return (
    <>
      <StartPageMain>
        <Logo />
      </StartPageMain>
    </>
  );
}
