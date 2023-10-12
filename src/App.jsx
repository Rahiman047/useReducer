import { useState, useReducer } from "react";
import ShowUserNames from "./ShowUserNames";
import "./App.css";

const userData = [
  { name: "Rahiman", id: 1 },
  { name: "Abdur", id: 2 },
  { name: "Shaik", id: 3 },
  { name: "John", id: 4 },
  { name: "Jane", id: 5 },
];

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const defaultState = {
  people: userData,
};

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: userData };
  }
  if (action.type === REMOVE_ITEM) {
    const newUserData = state.people.filter(
      (eachUser) => eachUser.id !== action.payload
    );
    return { ...state, people: newUserData };
  }

  throw new Error(`No Matching ${action.type} - action type`);
};

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
