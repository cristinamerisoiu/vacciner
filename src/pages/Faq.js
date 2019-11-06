import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";

const FaqDetails = styled.details`
  display: flex;
  width: 100px;
  flex-direction: column;
  padding: 15px;
`;

const FaqSummary = styled.summary`
  padding: 2px 6px;
  width: 15em;
  box-shadow: 2px 2px 3px grey;
  font-family: "Open Sans", sans-serif;
  border-radius: 10px;
`;

const FaqText = styled.div`
  display: flex;
  background-color: #edf2f4;
  box-shadow: 1px 1px 2px grey;
  color: #696969;
  width: 15rem;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  margin-top: 2px;
  line-height: 1.3;
  word-spacing: 1.5px;
  padding: 10px;
`;

export default function Faq() {
  return (
    <>
      <Headline>Faq</Headline>
      <FaqDetails>
        <FaqSummary>Why are vaccinations important?</FaqSummary>
        <FaqText>
          Vaccinations protect people against serious diseases by stimulating
          the immune system to create antibodies against certain bacteria or
          viruses.
        </FaqText>
      </FaqDetails>

      <FaqDetails>
        <FaqSummary>
          How do I know that vaccines are safe and have been tested properly?
        </FaqSummary>
        <FaqText>
          All vaccines go through a long and thorough process of development and
          testing before they are licensed for use. It can take as much as 20
          years for a vaccine to go from first concept to being licensed.
        </FaqText>
      </FaqDetails>
      <FaqDetails>
        <FaqSummary>Is there a link between vaccines and autism?</FaqSummary>
        <FaqText>
          No. Scientific studies and reviews continue to show no relationship
          between vaccines and autism.
        </FaqText>
      </FaqDetails>
      <FaqDetails>
        <FaqSummary>What are the side effects of vaccines?</FaqSummary>
        <FaqText>
          Vaccines, like any medication, may cause some side effects. Most of
          these side effects are very minor, like soreness where the shot was
          given, fussiness, or a low-grade fever. These side effects typically
          only last a couple of days and are treatable.
        </FaqText>
      </FaqDetails>

      <FaqDetails>
        <FaqSummary>
          What are combination vaccines and why are they used?
        </FaqSummary>
        <FaqText>
          Combination vaccines protects you against more than one disease with a
          single shot. They reduce the number of shots and office visits you
          would need.
        </FaqText>
      </FaqDetails>

      <FaqDetails>
        <FaqSummary>
          How long does immunity last after getting a vaccine?
        </FaqSummary>
        <FaqText>
          A few vaccines, like the two for measles or the series for hepatitis
          B, may make you immune for your entire life. Others, like tetanus,
          last for many years but require periodic shots (boosters) for
          continued protection against the disease.
        </FaqText>
      </FaqDetails>
    </>
  );
}
