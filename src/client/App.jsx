import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
      super()

      this.state = {
        todo : "",
        list: []
      };
    }

    clickHandler(){
      console.log("clicking");
      this.state.list.push(this.state.todo);
      this.setState(this.state.list);
  }

    changeHandler(event){
        let newTodo = this.state.todo;
        newTodo = event.target.value;
        this.setState({todo: event.target.value});
        console.log("change handler", event.target.value);
    }


      render() {
        console.log("rendering");
        let todoList = this.state.list.map(stuff => {
            return (
                <ul>
                    <li>
                    {stuff}
                    </li>
            </ul>);
        });

        return (
          <div className="list">
             <input onChange={()=>{this.changeHandler()}} value={this.state.todo}/>
             <button onClick={()=>{this.clickHandler()}}>Add an item</button>
             <ul>
             {todoList}
             </ul>
          </div>
        );
      }
    }

    export default hot(module)(App);