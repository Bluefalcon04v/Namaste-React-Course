import { useEffect, useState } from "react";

const User = (props) => {
const [value, setValue] = useState(0)
const [value2, setValue2] = useState(2)

useEffect(() => {
  const timeRender = setInterval(() => {
    console.log("hello world!")
  }, 1000)

  return() =>{  // This will make the component unmount when we change the components 
    clearInterval(timeRender)
    console.log("Unmounted");
  }
  
  
})
  return (
    <>
      <div className="userCard">
        User Functional Component
        <h3>Name = {props.name}</h3>
        <h3>Occupation = {props.occupation}</h3>
        <h3>City Name = {props.city}</h3>
        <p>{value}</p>
        <p>{value2}</p>
        <button onClick={()=>{setValue(value + 1), setValue2(value2 + 3)}}> Function Component </button>
      </div>
    </>
  );
};

export default User;
