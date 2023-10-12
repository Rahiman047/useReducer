import React from "react";

const ShowUserNames = ({ data, removeParticularUser }) => {
  const { name, id } = data;

  const removeUser = () => {
    removeParticularUser(id);
  };

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <button type="button" onClick={removeUser}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ShowUserNames;
