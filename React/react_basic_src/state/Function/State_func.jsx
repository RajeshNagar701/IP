/*
React components has a built-in state object.

The state object is where you store property values that belong to the 
component.

When the state object changes, the component re-renders.

=======================================
In class Component

constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }

{this.state.brand}  

wann change then use this.setState(brand:"BMW") built in

========================================

iN fUNC COMPONENT

 const [number,setNumber]=useState(1)

  const [data,setData]=useState({
      name:"Raj Nagar",
      isImage:true
  });

  <button onClick={() => setNumber(number + 1)}>+</button>
  <h1>{number}</h1>
 
  <button onClick={() => setData({ ...data, name: "Akash Nagar" })}>Change</button>
  <h1>{data.name}</h1>

*/


import React, { useState } from 'react'
import Func_img from './Func_img'

function State_func() {

  //var number=1;
  const [number, setNumber] = useState(1)

  //var obj={ name: "Raj Nagar",isImage: true}
  const [data, setData] = useState({
    name: "Raj Nagar",
    isImage: true
  });


  return (
    <div>
      <h1>Life_Func</h1>

      <button onClick={() => setNumber(number + 1)}>+</button>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number - 1)}>-</button>

      <hr />
      <button onClick={() => setData({ ...data, name: "Akash Nagar" })}>Change</button>
      <h1>{data.name}</h1>

      <hr />
      <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
      <button onClick={() => setData({ ...data, isImage: true })}>Show</button>
      {data.isImage ? <Func_img /> : null}

    </div>
  )
}

export default State_func