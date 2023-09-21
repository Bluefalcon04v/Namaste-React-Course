const root = ReactDOM.createRoot(document.querySelector('#root')); //getting the Root Element ie Container in the DOM
        
const head1 = React.createElement('h1', { 
    style: {color:"red"},
    id: "heading1"
}, "Namaste React"); 
const head2 = React.createElement('h2', {}, "Namaste React");

const headingContainer = React.createElement('div', {className: 'headingContainer'}, [head1, head2]); //Appending the Root Element with both headings 


root.render(headingContainer); // to update the DOM structure