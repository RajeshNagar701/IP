import React,{useState,createContext} from 'react'
import B from './B'

export const Usercontext=createContext();

function A() {
  
const [name,setName]=useState("Raj nagar");
  return (
    <Usercontext.Provider value={{name,setName}}>
        <button onClick={()=>setName("Akash Nagar")}>Change A</button>
        <h1>Hi i am A Component : {name}</h1>
        <B/>
    </Usercontext.Provider>
  )
}

export default A