import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  width: 358px;
  height: 472px;
  background-color: #e8f1f2;
  border: #707070 solid 1px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  opacity: 0.4;
`;

export default function CardContainer() {
  return <Card />;
}
