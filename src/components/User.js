import { useState } from "react";

const User = (props) => {
const [value, setValue] = useState(0)

  return (
    <>
      <div className="userCard">
        User Functional Component
        <h3>Name = {props.name}</h3>
        <h3>Occupation = {props.occupation}</h3>
        <h3>City = {props.city}</h3>
        <p>{value}</p>
        <button onClick={()=>setValue(value + 1)}> Function Component </button>
      </div>
    </>
  );
};

export default User;
