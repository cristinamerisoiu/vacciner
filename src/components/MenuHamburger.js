import React from "react";
import styled from "styled-components";
import Medicine from "../icons/Medicine";
import Calendar from "../icons/Calendar";
import FaqIcon from "../icons/FaqIcon";
import { Link } from "react-router-dom";
import Key from "../icons/Key";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #003459;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  div {
    display: flex;
    align-items: center;
  }

  a {
    font-size: 16px;
    padding: 20px;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    font-family: "Open Sans", sans-serif;

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
          <div>
            <span aria-label="standard vaccines">
              <Medicine width={30} />
            </span>
            <TextWrapper>Standard vaccines</TextWrapper>
          </div>
        </StyledLink>

        <StyledLink to="/trackvaccines">
          <div>
            <span aria-label="track your vaccines">
              <Calendar width={25} />
            </span>
            <TextWrapper>Track your vaccines</TextWrapper>
          </div>
        </StyledLink>
        <StyledLink to="/faq">
          <div>
            <span aria-label="faq">
              <FaqIcon width={30} />
            </span>
            <TextWrapper>Faq</TextWrapper>
          </div>
        </StyledLink>

        <StyledLink to="/login">
          <div>
            <span aria-label="login">
              <Key width={25} />
            </span>
            <TextWrapper>My account</TextWrapper>
          </div>
        </StyledLink>
      </StyledMenu>
    </>
  );
}
