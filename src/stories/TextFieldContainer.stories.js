import React from "react";
import styled from "styled-components";
import TextFieldContainer from "../components/TextFieldContainer";

export default {
  title: "Text Field"
};
const Container = styled.div`
  width: 400px;
`;

export const TextField = () => (
  <Container>
    <TextFieldContainer placeholder="HELOOO" />
  </Container>
);
