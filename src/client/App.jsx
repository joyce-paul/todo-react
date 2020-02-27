import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        word : ""
      }
    }


clickHandler(){
  console.log("clicking");
}


changeHandler(event){
  this.setState({word:event.target.value});
  console.log("change", event.target.value);
}


  render() {
    console.log("rendering");
    return (
      <div className="item">
         <input onChange={(event)=>{this.changeHandler(event);}}/>
         <button onClick={()=>{this.clickHandler()}}>Add an item</button>
      </div>
    );
  }
}

export default hot(module)(App);