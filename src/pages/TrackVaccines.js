import React, { useState } from "react";
import styled from "styled-components";
import TextFieldContainer from "../components/TextFieldContainer";
import ResultTextContainer from "../components/ResultTextContainer";
import Headline from "../components/Headline";
import SearchBar from "../components/SearchBar";
import { diseases } from "../api/diseases";
import axios from "axios";
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

export default function TrackVaccines({ handleInputChange }) {
  const [search, setSearch] = useState("aaa");

  const FilteredDiseases = diseases.filter(disease =>
    disease.toLowerCase().includes(search.toLowerCase())
  );

  const [date, setDate] = useState();

  function addToDbJson(disease) {
    axios
      .post("http://localhost:3002/diseases", {
        diseases
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
    console.log("The link was clicked.");
  }

  function handleSearch(value) {
    setSearch(value);
    console.log(search);
  }

  function onChange(date) {
    setDate(date);
    console.log("the date was clicked");
  }

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
        <TextFieldContainer />
        <SelectDate value={date} onChange={() => onChange(setDate)} />

        {/* // type="text"
          // name="daterange"
          // value="01/01/2018 - 01/15/2018"
          // name="vaccination-date"
          // min="1990-01-01"
          // max="2999-12-31"
          // placeholder="Select date"
        /> */}
        {/* <SelectDate value={date} onChange={() => onChange(setDate)} /> */}
        <ResultTextContainer />
      </PageWrapper>
    </>
  );
}
