import React, { useEffect } from "react";
import "./App.css";
import MyContext from "./contexts/MyContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { getEquipments } from "./Services/service";

function App() {
  const [equipmentsLists, setEquipmentsLists] = React.useState(null);

  return (
    <>
      <MyContext.Provider value={{ equipmentsLists, setEquipmentsLists }}>
        <Dashboard />
      </MyContext.Provider>
    </>
  );
}

export default App;
