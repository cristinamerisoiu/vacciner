import React, { useState } from "react";
import MenuHamburger from "../components/MenuHamburger";
import NavbarHamburger from "../components/NavbarHamburger";
import styled from "styled-components";
import img from "../resources/DNA2.png";
// import ReactPlayer from "react-player";

const ContainerPage = styled.div`
  background-size: 100% 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  margin: 0px;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: red solid 5px;
`;

const Container = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  border: black solid 2px;
`;

// const PlayerContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding-top: 90px;
//   position: relative;
//   padding-bottom: 56.25%;
//   padding-top: 25px;
//   align-items: center;
//   height: 0;
// `;

// const IframeContainer = styled.iframe`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <ContainerPage>
      <NavbarHamburger open={open} onClick={() => setOpen(!open)} />
      <MenuHamburger open={open} />
      <FlexContainer>
        <Container />
        <Container />
        <Container />
      </FlexContainer>
    </ContainerPage>
  );
}
