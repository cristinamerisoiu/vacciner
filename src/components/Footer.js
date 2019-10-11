import React from "react";
import styled from "styled-components";
import Calendar from "../icons/Calendar";
import Faq from "../icons/Faq";
import Medicine from "../icons/Medicine";
import HomeButton from "../icons/HomeButton";

const FooterPage = styled.div`
  display: flex;
  width: 375px;
  height: 52px;
  background-color: #003459;
  border: solid 1px;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <>
      <FooterPage>
        <HomeButton />
        <Medicine />
        <Calendar />
        <Faq />
      </FooterPage>
    </>
  );
}
