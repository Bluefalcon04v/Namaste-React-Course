import React from 'react';
import ReactDOM from 'react-dom/client';

const heads = (
    <h1 id='heading' key="heading" style={{color:"red",fontFamily:"cursive"}}> Namaste heads </h1>
);

const Heads2 = () =>(
    <h2>Namaste heads2</h2>
)

const HeadingComponent = () =>( // Creating a functional component
    <div>
        <h1> Namaste Mom</h1>
        {heads}        {/* Calling for the "heads" element in the functional components */}


        {Heads2()}        {/* Calling for the "heads2" Functional Components in the another functional component also known as component composition*/}
        {/* OR */}
        <Heads2/>        {/* Calling for the "heads2" Functional Components in the another functional component also known as component composition */}
    </div>
)

const root = ReactDOM.createRoot(document.querySelector('#root')); 

root.render(<HeadingComponent/>); //calling the function components