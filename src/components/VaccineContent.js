import React from "react";
import styled from "styled-components";

const Disease = styled.details`
  display: flex;
  width: 100px;
  flex-direction: column;
  padding: 15px;
`;

const DiseaseSummary = styled.summary`
  padding: 2px 6px;
  width: 15em;
  box-shadow: 2px 2px 3px grey;
  font-family: "Open Sans", sans-serif;
  border-radius: 10px;
`;

const DiseaseText = styled.div`
  display: flex;
  background-color: #edf2f4;
  box-shadow: 1px 1px 2px grey;
  color: #66023c;
  width: 15rem;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  margin-top: 2px;
`;

export default function VaccineContent() {
  return (
    <>
      <Disease>
        <DiseaseSummary> Babies:</DiseaseSummary>
        <DiseaseText>
          <ul>
            <li>Hepatitis A</li>
            <li>Rotavirus</li>
            <li>Diphthetria,tetanus & acellular pertussis</li>
            <li> Measles, mumps, rubella</li>
            <li>Varicella</li>
            <li>Hepatitis B</li>
            <li>Poliomyelitis</li>
            <li>Haemophilus</li>
          </ul>
        </DiseaseText>
      </Disease>
      <Disease>
        <DiseaseSummary> Children 5-6 years old:</DiseaseSummary>
        <DiseaseText>
          <ul>
            <li>Diphthetria,tetanus & acellular pertussis</li>
          </ul>
        </DiseaseText>
      </Disease>
      <Disease>
        <DiseaseSummary> Youngsters 9-17 years old:</DiseaseSummary>
        <DiseaseText>
          <ul>
            <li>Diphthetria,tetanus & acellular pertussis</li>
            <li>Poliomyelitis</li>
            <li>
              All the children vaccines as long as they weren't made or as long
              as the diseases was not experienced.
            </li>
            <li>Immunisation against HPV (girls between 12-17 years old)</li>
          </ul>
        </DiseaseText>
      </Disease>
      <Disease>
        <DiseaseSummary> Adults:</DiseaseSummary>
        <DiseaseText>
          <ul>
            <li>Refresh of tetanus and diphtheria every 10 years</li>
            <li>
              Check the status of the vaccines for Poliomyelitis and Pertussis
              as well as MMR
            </li>
          </ul>
        </DiseaseText>
      </Disease>
      <Disease>
        <DiseaseSummary> Adults over 60:</DiseaseSummary>
        <DiseaseText>
          <ul>
            <li>
              Additional vaccines for Influenza (every year) and once for
              Pneumococcal
            </li>
          </ul>
        </DiseaseText>
      </Disease>
    </>
  );
}
