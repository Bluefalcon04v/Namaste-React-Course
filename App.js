import React from 'react';
import ReactDOM from 'react-dom/client';

// This is a React Element ie. it is just a Object 
const heads = (
    <h1 id='heading' key="heading" style={{color:"red",fontFamily:"cursive"}}> Namaste React </h1>
);

const root = ReactDOM.createRoot(document.querySelector('#root')); 

root.render(heads); //calling the element in DOM  