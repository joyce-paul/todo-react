import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        word : ""
      }
    }


changeHandler(event){
  this.setState({word:event.target.value});
  console.log("change", event.target.value);
}


  render() {
    return (
      <div>
        <h4>Welcome</h4>

       <input onChange={(event)=>{this.changeHandler(event);}}/>
      </div>
    );
  }
}

export default hot(module)(App);
