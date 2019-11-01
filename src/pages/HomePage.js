import React, { useState } from "react";
import MenuHamburger from "../components/MenuHamburger";
import NavbarHamburger from "../components/NavbarHamburger";
import styled from "styled-components";
import img from "../resources/DNA2.png";
import ReactPlayer from "react-player";

const Container = styled.div`
  background-size: 100% 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  margin: 0px;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
`;

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 90px;
`;

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <NavbarHamburger open={open} onClick={() => setOpen(!open)} />
      <MenuHamburger open={open} />
      <PlayerContainer>
        <ReactPlayer url="https://www.youtube.com/watch?v=y2WtUMvNjzQ" />
      </PlayerContainer>
    </Container>
  );
}
