
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import HomeMain from "./Components/HOME/HomeMain";
import Wave from "./Components/HOME/Main/Wave"
import LogoHome from "./Components/LogoHome";
import Nav from "./Components/Navbar";
import Wave1 from "./Components/Wave1";
import { Activities } from "./Pages/Activities/Activities";
import Contact from "./Pages/Contact/Contact";
import CountryDetail from "./Pages/CountryDetail";
import Countries from "./Pages/Paises/Paises";

function App() {
  return (
    <React.Fragment>
      <Compo>
        <Nav />
        <Route exact path="/" component={Wave1} />
        <Route exact path="/" component={Wave} /> 
        <Route exact path="/" component={LogoHome} />
        <Route exact path="/" component={HomeMain} />
        <Route path="/home" component={Countries} />
        <Route path="/country/:id" component={CountryDetail} />
        <Route path="/activities" component={Activities}/>
        <Route path="/contact" component={Contact}/>
      </Compo>
    </React.Fragment>
  );
}

export default App;

const Compo = styled.div`
  /* background-color: #43597D;
background-color: #A0C0D6;
ok
background-color: #DE7456;
background-color: #2B3240; */
`;

