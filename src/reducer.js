import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const userData = [
  { name: "Rahiman", id: 1 },
  { name: "Abdur", id: 2 },
  { name: "Shaik", id: 3 },
  { name: "John", id: 4 },
  { name: "Jane", id: 5 },
];

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

export { reducer, defaultState };
