import React, { useContext } from "react";
import { DataContext } from "../App";

const Child3 = () => {
  const value = useContext(DataContext);

  return (
    <div>
      <h1>Child3</h1>
      <h3>Data is: {value}</h3>
    </div>
  );
};

export default Child3;