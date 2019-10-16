import React from "react";
import GlobalStyles from "./Globalstyles";
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import StandardVaccines from "./pages/StandardVaccines";
import TrackVaccines from "./pages/TrackVaccines";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/startpage" component={StartPage} />
        <Route path="/standardvaccines" component={StandardVaccines} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/trackvaccines" component={TrackVaccines} />
        <Route path="/loginform" component={LoginForm} />
      </Router>
    </>
  );
}

export default App;