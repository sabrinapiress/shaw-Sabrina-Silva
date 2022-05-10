import React from "react";
import { GlobalState } from "./global/GlobalState";
import { Router } from "./Routes/Router";

const App = () => {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
