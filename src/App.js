import React from "react";
import GlobalStyles from "./GlobalStyles";
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import StandardVaccines from "./pages/StandardVaccines";
import TrackVaccines from "./pages/TrackVaccines";
import LoginForm from "./pages/LoginForm";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import styled from "styled-components";

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
      <Router>
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/startpage" component={StartPage} />
          <Route path="/standardvaccines" component={StandardVaccines} />
          <Route path="/trackvaccines" component={TrackVaccines} />
          <Route path="/loginform" component={LoginForm} />
          <Route path="/faq" component={Faq} />
        </Container>
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
