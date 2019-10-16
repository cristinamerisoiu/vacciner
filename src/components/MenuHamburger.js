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
  background: #00728f;
  height: 70%;
  margin-top: 48px;
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

const TextWrapper = styled.span`
  margin-left: 15px;
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
            <TextWrapper> Standard vaccines</TextWrapper>
          </div>
        </a>

        <a href="/">
          <div>
            <span aria-label="track your vaccines">
              <Calendar width={25} />
            </span>
            <TextWrapper>Track your vaccines</TextWrapper>
          </div>
        </a>
        <a href="/">
          <div>
            <span aria-label="faq">
              <Faq width={30} />
            </span>
            <TextWrapper>Faq</TextWrapper>
          </div>
        </a>
        <a href="/">
          <div>
            <span aria-label="home">
              <House width={30} />
            </span>
            <TextWrapper> Home</TextWrapper>
          </div>
        </a>
      </StyledMenu>
    </>
  );
}
