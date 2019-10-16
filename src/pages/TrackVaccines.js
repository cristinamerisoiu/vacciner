import React from "react";
import styled from "styled-components";
import TextFieldContainer from "../components/TextFieldContainer";
import SelectDate from "../components/SelectDate";
import ResultTextContainer from "../components/ResultTextContainer";
import Globalstyles from "../Globalstyles";
import Headline from "../components/Headline";
import Footer from "../components/Footer";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function TrackVaccines() {
  return (
    <>
      <Headline>Track your vaccines</Headline>
      <PageWrapper>
        <Globalstyles />
        <TextFieldContainer type="text" placeholder="Enter your vaccine" />
        <TextFieldContainer type="text" placeholder="Select date" />
        <SelectDate>Select Date</SelectDate>
        <ResultTextContainer />
        <Footer />
      </PageWrapper>
    </>
  );
}
