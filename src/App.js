import React from "react";
import GlobalStyles from "./Globalstyles";
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import StandardVaccines from "./pages/StandardVaccines";
import TrackVaccines from "./pages/TrackVaccines";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import styled from "styled-components";
// import Hepatitis from "./components/Diseases";

const StyledApp = styled.main`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  height: 100vh;
`;

const Container = styled.div`
  overflow: scroll;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Container>
        <Router>
          <Route exact path="/startpage" component={StartPage} />
          <Route path="/standardvaccines" component={StandardVaccines} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/trackvaccines" component={TrackVaccines} />
          <Route path="/loginform" component={LoginForm} />
        </Router>
      </Container>
      <Footer />
    </StyledApp>
  );
}

export default App;
