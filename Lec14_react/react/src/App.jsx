import React, { createContext } from "react";
import GrandFather from "./components/GrandFather";

export const UserContext = createContext();

function App() {
  const message = "Bade W ke niche hai";

  return (
    <UserContext.Provider value={message}>
      <GrandFather />
    </UserContext.Provider>
  );
}

export default App;