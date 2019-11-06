import React from "react";
import GlobalStyles from "./GlobalStyles";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Standard from "./pages/Standard";
import TrackVaccines from "./pages/TrackVaccines";
import Login from "./pages/Login";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/start" component={Start} />
          <Route path="/standard" component={Standard} />
          <Route path="/trackvaccines" component={TrackVaccines} />
          <Route path="/login" component={Login} />
          <Route path="/faq" component={Faq} />
        </Container>
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
