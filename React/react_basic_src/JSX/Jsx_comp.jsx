/*
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.


Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.
Expressions in JSX
With JSX you can write expressions inside curly braces { }.
Example of declaration of javascript element & how to use in html direct
{print}


*/


import React from 'react'

// external css import 
import './style.css';

function Jsx_comp() {

  var name="Raj Nagar";
  const myelement = <h1>I Love JSX!</h1>;
  const myelement1 = <h1>React is {5 + 5}</h1> 

  const internalcss={color: 'red',backgroundColor:'yellow'}
  
  const myelement2 = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );
  
  return (
    <div>
        <h1>{"Hi hello"}</h1>
        <h1>{name}</h1>
        <hr />

        {myelement}
        {myelement1}
        {myelement2}

        <hr />

        <h1 style={{color: 'red'}}>Hi im inline css in JSX</h1>
        <h1 style={internalcss}>Hi i m internal css in JSX</h1>

        <h1 className='bigblue'>Hi i am external css</h1>
        <h1 class='bigblue'>Hi i am external css</h1>
        
    </div>
  )
}

export default Jsx_comp