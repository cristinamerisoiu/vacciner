import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Disclaimer from "../components/Disclaimer";
import { getDiseases } from "../api/diseases";

const Disease = styled.details`
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
  color: #696969;
  width: 15rem;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  margin-top: 2px;
`;

const StyledDiv = styled.div`
  display: flex;
  color: #696969;
  padding-left: 5px;
`;

export default function VaccineContent() {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    getDiseases()
      .then(response => {
        // console.log(response);
        setDiseases(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {diseases && (
        <>
          {diseases.map(disease => {
            return (
              <Disease>
                <DiseaseSummary key={disease.id}>
                  {disease.title}:
                </DiseaseSummary>
                <DiseaseText>
                  <div>
                    {disease.vaccines.map(vaccine => (
                      <StyledDiv key={vaccine.title}>
                        <a href={vaccine.href}>
                          <div key={disease.id}>{vaccine.title}</div>
                        </a>
                        <p key={disease.id}>{vaccine.text}</p>
                      </StyledDiv>
                    ))}
                  </div>
                </DiseaseText>
              </Disease>
            );
          })}
          <Disclaimer />
        </>
      )}
    </>
  );
}
