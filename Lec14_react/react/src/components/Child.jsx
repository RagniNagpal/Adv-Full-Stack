import React from 'react'
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Child() {

  const data = useContext(UserContext);

  return (
    <>
      <h4>Child</h4>
      <p>{data}</p>
    </>
  );
}

export default Child;