import React from "react";
import styled from "styled-components";

const DisclaimerWrapper = styled.div`
  display: flex;
  margin-top: 200px;
`;

const LineBreak = styled.hr`
  color: grey;
`;

const DisclaimerText = styled.small`
  font-size: 0.7em;
  color: #66023c;
  font-family: "Open Sans", sans-serif;
  padding: 10px;
  text-align: justify;
`;

export default function Disclaimer() {
  return (
    <>
      <DisclaimerWrapper>
        <DisclaimerText>
          <LineBreak />
          <p>
            * The information contained in this website is not intended to
            recommend the self management of health problems or wellness. It is
            not intended to endorse or recommend any particular type of medical
            treatment. Should any reader have any health care related questions,
            promptly call or consult your physician or healthcare provider.
          </p>
        </DisclaimerText>
      </DisclaimerWrapper>
    </>
  );
}
