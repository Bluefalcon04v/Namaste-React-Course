import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root')); 
const head1 = React.createElement('h1', { 
    style: {color:"DarkRed"},
    id: "heading",
    key: "heading1"  // key is used for the React to identify each elements
}, "Namaste React"); 
const head2 = React.createElement('h2', { key: "heading2"
}, "Namaste World");

const headingContainer = React.createElement('div', {className: 'headingContainer'}, [head1, head2]);  


root.render(headingContainer); 