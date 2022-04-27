import React, { useEffect } from "react";
import { connectWithStore } from "../../contexts/Context";
import { getEquipments } from "../../Services/service";

const Timer = ({ children, storeSetState }) => {
  const [timer, setTimer] = React.useState(0);

  const REFRESH_TIME = 1000;

  useEffect(() => {
    setTimeout(() => {
      getEquipments().then((data) => {
        storeSetState({ equipments: data });
        setTimer(timer + 1);
      });
    }, REFRESH_TIME);
  }, [timer, storeSetState]);

  return children;
};

export default connectWithStore(Timer);
