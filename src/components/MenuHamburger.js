import React from "react";
import styled from "styled-components";
import Medicine from "../icons/Medicine";
import Calendar from "../icons/Calendar";
import Faq from "../icons/Faq";
import House from "../icons/House";
import GlobalStyles from "../Globalstyles";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #00203f29;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  div {
    display: flex;
    align-items: center;
  }
  a {
    font-size: 12px;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: deeppink;
    }
  }
`;

export default function MenuHamburger() {
  return (
    <>
      <GlobalStyles />
      <StyledMenu>
        <a href="/">
          <div>
            <span aria-label="standard vaccines">
              <Medicine width={30} />
            </span>
            Standard vaccines
          </div>
        </a>

        <a href="/">
          <div>
            <span aria-label="track your vaccines">
              <Calendar width={25} />
            </span>
            Track your vaccines
          </div>
        </a>
        <a href="/">
          <div>
            <span aria-label="faq">
              <Faq width={30} />
            </span>
            Faq
          </div>
        </a>
        <a href="/">
          <div>
            <span aria-label="home">
              <House width={30} />
            </span>
            Home
          </div>
        </a>
      </StyledMenu>
    </>
  );
}
