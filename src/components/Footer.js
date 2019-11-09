import React from "react";
import styled from "styled-components";
import Calendar from "../icons/Calendar";
import FaqIcon from "../icons/FaqIcon";
import Medicine from "../icons/Medicine";
import House from "../icons/House";
import Key from "../icons/Key";
import { Link } from "react-router-dom";

const FooterWrapper = styled.nav`
  display: flex;
  width: 100vw;
  height: 52px;
  background-color: #003459;
  border: solid 1px;
  justify-content: space-around;
  padding: 4px;
  position: sticky;
`;

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <Link to="/">
          <House />
        </Link>
        <Link to="/standard">
          <Medicine />
        </Link>
        <Link to="/trackvaccines">
          <Calendar />
        </Link>
        <Link to="/faq">
          <FaqIcon />
        </Link>
        <Link to="/login">
          <Key />
        </Link>
      </FooterWrapper>
    </>
  );
}
