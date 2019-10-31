import React from "react";
import styled from "styled-components";

const CalendarInput = styled.input`
  margin: 1rem;
  border-radius: 5px;
  font: 1rem "Fira Sans", sans-serif;
`;

export default function SelectDate({ date }) {
  return (
    <>
      <CalendarInput
        {...date.toLocaleDateString()}
        type="date"
        name="vaccination-date"
        min="1990-01-01"
        max="2999-12-31"
      ></CalendarInput>
    </>
  );
}
