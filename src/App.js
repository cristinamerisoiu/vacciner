import React from "react";
import GlobalStyles from "./Globalstyles";
import StartPage from "./components/StartPage";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledDiv>
        <StartPage />
      </StyledDiv>
    </>
  );
}

export default App;
