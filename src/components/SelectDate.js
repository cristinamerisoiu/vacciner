import React from "react";
import styled from "styled-components";

const CalendarInput = styled.input`
  border-radius: 5px;
  font: 1em "Fira Sans", sans-serif;
  color: grey;
  border: none;
  margin: 3px 5px 0 5px;
  background: transparent;
`;

export default function SelectDate() {
  return (
    <CalendarInput
      type="date"
      name="vaccination-date"
      min="1990-01-01"
      max="2999-12-31"
    ></CalendarInput>
  );
}
