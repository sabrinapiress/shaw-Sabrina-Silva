import React from "react";
import { GlobalState } from "./global/GlobalState";
import { Router } from "./Routes/Router";
import styled from "styled-components";

const CotainerApp = styled.div`
border: solid 1px #F9B24E;
width: 25rem;
min-height: 50rem;
margin-left: 25rem;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
	margin-left: 0rem;
}

`
document.title = "LabEddit"

const App = () => {
  return (
    <CotainerApp>
      <GlobalState>
        <Router />
      </GlobalState>
    </CotainerApp>
  );
}

export default App;
