import React, { useState } from "react";
import styled from "styled-components";
import TextFieldContainer from "../components/TextFieldContainer";
import SelectDate from "../components/SelectDate";
import ResultTextContainer from "../components/ResultTextContainer";
import Headline from "../components/Headline";
import Footer from "../components/Footer";
import SearchVaccines from "../components/SearchVaccines";
import { diseases } from "../api/diseases";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SearchDisease = styled.ul`
  display: flex;
  margin-top: 10px;
`;
const ResultDiseases = styled.div`
  display: flex;
`;

export default function TrackVaccines({ handleInputChange }) {
  const [search, setSearch] = useState(".");

  const FilteredDiseases = diseases.filter(disease =>
    disease.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearch(value) {
    setSearch(value);
  }

  return (
    <>
      <Headline>Track your vaccines</Headline>
      <PageWrapper>
        <SearchVaccines
          handleInputChange={setSearch}
          onSearch={handleSearch}
          onChange={event => handleInputChange(event.target.value)}
        />
        {FilteredDiseases.map(disease => (
          <ResultDiseases key={disease} disease={disease}>
            <SearchDisease>{disease}</SearchDisease>
          </ResultDiseases>
        ))}
        <TextFieldContainer type="text" placeholder="Select date" />
        <SelectDate>Select Date</SelectDate>
        <ResultTextContainer />
        <Footer />
      </PageWrapper>
    </>
  );
}
