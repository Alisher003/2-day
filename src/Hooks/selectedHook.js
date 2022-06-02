import React from "react";
import { Contextt } from "../Context/selectedContext";

const KarzinkaHook = () => {
  const karItem = React.useContext(Contextt);

  return [karItem.state, karItem.setState];
};

export default KarzinkaHook;
