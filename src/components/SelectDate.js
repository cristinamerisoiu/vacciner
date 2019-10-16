import React from "react";
import styled from "styled-components";

const CalendarLabel = styled.label`
  display: block;
  font: 1rem "Fira Sans", sans-serif;
`;

const CalendarInput = styled.input`
  margin: 1rem;
  border-radius: 2px;
`;

export default function SelectDate() {
  return (
    <>
      <CalendarLabel for="start"></CalendarLabel>
      <CalendarInput
        type="date"
        id="start"
        name="vaccination-date"
        value=""
        min="1990-01-01"
        max="2999-12-31"
      ></CalendarInput>
    </>
  );
}
