import styled from "styled-components";

const TextField = styled.input`
  display: flex;
  width: 330px;
  height: 45px;
  border-radius: 20px;
  background-color: #e8f1f2;
  border: #707070 solid 1px;
  opacity: 0.5;
  color: green;

  &::placeholder {
    color: #b0b0b0;
  }
`;

export default TextField;
