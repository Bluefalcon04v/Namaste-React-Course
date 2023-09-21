import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root')); 
const head1 = React.createElement('h1', { 
    style: {color:"DarkRed"},
    id: "heading1"
}, "Namaste React"); 
const head2 = React.createElement('h2', {}, "Namaste React");

const headingContainer = React.createElement('div', {className: 'headingContainer'}, [head1, head2]);  


root.render(headingContainer); 