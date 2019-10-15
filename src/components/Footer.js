import React from "react";
import styled from "styled-components";
import Calendar from "../icons/Calendar";
import Faq from "../icons/Faq";
import Medicine from "../icons/Medicine";
import House from "../icons/House";

const FooterPage = styled.div`
  display: flex;
  width: 100vw;
  height: 52px;
  background-color: #003459;
  border: solid 1px;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <>
      <FooterPage>
        <House />
        <Medicine />
        <Calendar />
        <Faq />
      </FooterPage>
    </>
  );
}
