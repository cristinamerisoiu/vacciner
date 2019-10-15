import React from "react";
import styled from "styled-components";
import GlobalStyles from "../Globalstyles";

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: lightblue;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default function NavbarHamburger() {
  return (
    <>
      <GlobalStyles />
      <StyledBurger>
        <div />
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
}
