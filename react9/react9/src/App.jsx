import React, { createContext } from "react";
import Child1 from "./components/child1";

export const DataContext = createContext();

const App = () => {
  const data = 10;

  return (
    <div>
      <DataContext.Provider value={data}>
        <Child1 />
      </DataContext.Provider>
      <Child4 />    
      {/* output undefined hai child4 ka kyunki dataContext.Provider ke bahar likha hai  */}
    </div>
  );
};

export default App;