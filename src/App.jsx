import { useState, useReducer } from "react";
import ShowUserNames from "./ShowUserNames";
import "./App.css";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { defaultState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeParticularUser = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const clearAllUsers = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetUsers = () => {
    dispatch({ type: RESET_LIST });
  };

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

export default App;
