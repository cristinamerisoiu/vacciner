import React from "react";
import styled from "styled-components";
import Calendar from "../icons/Calendar";
import Faq from "../icons/Faq";
import Medicine from "../icons/Medicine";
import House from "../icons/House";

const FooterWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 52px;
  background-color: #003459;
  border: solid 1px;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <a href="/HomePage/">
          <House />
        </a>
        <a href="/StandardVaccines/">
          <Medicine />
        </a>
        <a href="/TrackVaccines/">
          <Calendar />
        </a>
        <a href="/Faq/">
          <Faq />
        </a>
      </FooterWrapper>
    </>
  );
}
