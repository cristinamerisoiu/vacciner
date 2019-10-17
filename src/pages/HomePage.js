import React from "react";
import MenuHamburger from "../components/MenuHamburger";
import NavbarHamburger from "../components/NavbarHamburger";
import Footer from "../components/Footer";
import styled from "styled-components";
import img from "../resources/DNA2.png";

const ImageWrapper = styled.div`
  background-size: 100% 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-size: cover;
`;

export default function HomePage() {
  return (
    <>
      <ImageWrapper>
        <NavbarHamburger />
        <MenuHamburger />
      </ImageWrapper>
      <Footer />
    </>
  );
}
