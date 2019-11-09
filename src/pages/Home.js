import React, { useState } from "react";
import MenuHamburger from "../components/MenuHamburger";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Logo from "../icons/Logo";
import TextBox from "../components/TextBox";

const Text = styled.h4`
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  color: #66023c;
`;

const StartMain = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #e8f1f2;
  align-items: center;
  justify-content: center;
`;

export default function Start() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StartMain>
        <Navigation open={open} onClick={() => setOpen(!open)} />
        <MenuHamburger open={open} />
        <Logo />
      </StartMain>
      <TextBox>
        <Text>
          vaccine.log : provides you with the most important information about
          vaccines at a glance. Keep track of your vaccines - painless and
          straightforward.
        </Text>
      </TextBox>
    </>
  );
}
