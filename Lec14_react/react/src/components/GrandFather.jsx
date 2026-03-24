import { UserContext } from "./UserContext";
import Father from "./componnet/Father";   

function GrandFather() {

  const message = "Bade W ke niche hai ";

  return (
    <UserContext.Provider value={message}>
      <h2>GrandFather Component</h2>
      <Father /> 
    </UserContext.Provider>
  );
}

export default GrandFather;