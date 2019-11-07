import React from "react";
import styled from "styled-components";
import Medicine from "../icons/Medicine";
import Calendar from "../icons/Calendar";
import FaqIcon from "../icons/FaqIcon";
import House from "../icons/House";
import { Link } from "react-router-dom";
import Key from "../icons/Key";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #00728f;
  height: 70%;
  margin-top: 20px;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  border-radius: 20px;

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
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function MenuHamburger({ open }) {
  return (
    <>
      <StyledMenu open={open}>
        <StyledLink to="/standard">
          <a href="/">
            <div>
              <span aria-label="standard vaccines">
                <Medicine width={30} />
              </span>
              <TextWrapper>Standard vaccines</TextWrapper>
            </div>
          </a>
        </StyledLink>

        <StyledLink to="/trackvaccines">
          <a href="/">
            <div>
              <span aria-label="track your vaccines">
                <Calendar width={25} />
              </span>
              <TextWrapper>Track your vaccines</TextWrapper>
            </div>
          </a>
        </StyledLink>
        <StyledLink to="/faq">
          {/* <a href="/"> */}
          <div>
            <span aria-label="faq">
              <FaqIcon width={30} />
            </span>
            <TextWrapper>Faq</TextWrapper>
          </div>
          {/* </a> */}
        </StyledLink>
        <StyledLink to="/">
          <a href="/">
            <div>
              <span aria-label="home">
                <House width={30} />
              </span>
              <TextWrapper>Home</TextWrapper>
            </div>
          </a>
        </StyledLink>
        <StyledLink to="/login">
          <a href="/">
            <div>
              <span aria-label="login">
                <Key width={25} />
              </span>
              <TextWrapper>My account</TextWrapper>
            </div>
          </a>
        </StyledLink>
      </StyledMenu>
    </>
  );
}
