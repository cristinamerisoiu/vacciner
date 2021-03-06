import React from "react";
import styled from "styled-components";

const TextField = styled.input`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 45px;
  border-radius: 20px;
  background-color: white;
  border: #707070 solid 1px;
  opacity: 0.5;
  margin-top: 50px;
  text-align: center;
  font-size: 16px;
  &::placeholder {
    color: grey;
  }
`;

export default function SearchBar({ onSearch }) {
  function handleInputChange(event) {
    const value = event.target.value;
    onSearch(value);
  }

  return (
    <TextField
      type="search"
      placeholder="Enter your vaccine"
      onChange={handleInputChange}
    ></TextField>
  );
}
