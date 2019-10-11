import React from "react";
import styled from "styled-components";

const ResultField = styled.div`
  display: flex;
  width: 330px;
  height: 121px;
  border-radius: 15px;
  border: #707070 solid 1px;
  background-color: #c5d5e4;
`;

export default function ResultTextContainer() {
  return <ResultField />;
}
