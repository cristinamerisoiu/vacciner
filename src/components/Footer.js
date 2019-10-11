import React from "react";
import styled from "styled-components";
import Calendar from "../icons/Calendar";
import Faq from "../icons/Faq";
import Medicine from "../icons/Medicine";

const FooterPage = styled.div`
  display: flex;
  width: 375px;
  height: 52px;
  background-color: #003459;
  border: solid 1px;
  align-content: space-between;
`;

export default function Footer() {
  return (
    <>
      <FooterPage>
        <Medicine />
        <Calendar />
        <Faq />
      </FooterPage>
    </>
  );
}
