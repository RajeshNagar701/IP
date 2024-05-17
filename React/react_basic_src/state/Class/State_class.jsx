
/*

*/

import React, { Component } from 'react'
import State_img from './State_img';

export class State_class extends Component {

    constructor(){
        super();
        this.state={
            name:"Raj nagar",
            isImage:true,
            number:1
        }
    }  

  render() {
    return (
      <div>
        <h1>State_class</h1>
        <hr />

        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number:this.state.number+1})}>-</button>

        <hr />
        <button onClick={()=>this.setState({name:"Akash Nagar"})}>Change</button>
        <h1>{this.state.name}</h1>

        <hr />
        <button onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button onClick={()=>this.setState({isImage:true})}>Show</button>
        {this.state.isImage?<State_img/>:null}
            
      </div>
    )
  }
}

export default State_class