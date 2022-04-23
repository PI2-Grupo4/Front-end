import React, { useEffect } from "react";
import "./App.css";
import Timer from "./components/Dashboard/Timer";
import { connectWithStore, Provider } from "./contexts/Context";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Provider>
        <Timer>
          <Dashboard />
        </Timer>
      </Provider>
    </>
  );
}

export default connectWithStore(App);
