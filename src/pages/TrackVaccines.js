import React, { useState } from "react";
import styled from "styled-components";
import ResultTextContainer from "../components/ResultTextContainer";
import Headline from "../components/Headline";
import SearchBar from "../components/SearchBar";
import { diseases } from "../api/diseases";
import { diseasesFind } from "../api/diseasesFind";
import axios from "axios";
// import DatePicker from "react-datepicker";
import SelectDate from "../components/SelectDate";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SearchDisease = styled.ul`
  display: flex;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
`;
const ResultDiseases = styled.div`
  display: flex;
  padding: 5px;
`;

const ButtonAdd = styled.button`
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 6px;
  color: black;
  padding: 5px;
  text-align: center;
  font-size: 10px;
  margin: 10px;

  :hover {
    background-color: #008cba;
    color: white;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 45px;
  border-radius: 20px;
  background-color: white;
  border: #707070 solid 1px;
  opacity: 0.5;
  margin-top: 10px;
  padding: 7px;
  text-align: center;
  justify-content: center;
  align-items: center;

  &::placeholder {
    color: grey;
  }
`;

export default function TrackVaccines({ handleInputChange }) {
  const [search, setSearch] = useState("aaa");

  const FilteredDiseases = diseases.filter(disease =>
    disease.toLowerCase().includes(search.toLowerCase())
  );

  const [startDate, setStartDate] = useState(new Date());

  function addToDbJson(disease) {
    axios
      .post("/diseases", {
        disease
      })
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleClick(disease) {
    addToDbJson(disease);
    console.log(`Link was clicked - data: ${disease}`);
  }

  function handleSearch(value) {
    setSearch(value);
    console.log(search);
  }

  // function onChange(date) {
  //   setDate(date);
  //   console.log("the date was clicked");
  // }
  const foundDisease = diseasesFind.find(disease => disease.id);

  return (
    <>
      <Headline>Track your vaccines</Headline>
      <PageWrapper>
        <SearchBar
          handleInputChange={setSearch}
          onSearch={handleSearch}
          onChange={event => handleInputChange(event.target.value)}
        />
        {FilteredDiseases.map(disease => (
          <ResultDiseases key={disease}>
            <SearchDisease>{disease}</SearchDisease>
            <ButtonAdd disease={disease} onClick={() => handleClick(disease)}>
              Add
            </ButtonAdd>
          </ResultDiseases>
        ))}

        <DateWrapper>
          <SelectDate
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
        </DateWrapper>

        <ResultTextContainer>
          <div>
            <h4>Vaccine: {foundDisease.id}</h4>
            <h4>Date:</h4>
          </div>
        </ResultTextContainer>
      </PageWrapper>
    </>
  );
}
