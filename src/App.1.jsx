import { useReducer } from "react";
import ShowUserNames from "./ShowUserNames";
import { reducer, defaultState } from "./App";

export function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [data, setData] = useState(userData);
  // const removeParticularUser = (id) => {
  //   const newData = data.filter((eachData) => {
  //     return eachData.id !== id;
  //   });
  //   setData(newData);
  // };
  // const clearAllUsers = () => {
  //   setData([]);
  // };
  // const resetUsers = () => {
  //   setData(userData);
  // };
  return (
    <div>
      <h1>UserData</h1>
      <div>
        {state.people.map((eachName) => (
          <ShowUserNames
            data={eachName}
            key={eachName.id}
            removeParticularUser={removeParticularUser}
          />
        ))}
      </div>
      {state.people.length > 0 ? (
        <div>
          <button onClick={clearAllUsers}>Clear All</button>
        </div>
      ) : (
        <button onClick={resetUsers}>Reset</button>
      )}
    </div>
  );
}
