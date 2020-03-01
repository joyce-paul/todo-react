import React from 'react';

var popups = require("popups");

class Form extends React.Component {

    constructor(){
      super()

      this.state = {
        todo : "",
        list: []
      };
    }

    clickHandler(){
        if (this.state.todo.length > 1 && this.state.todo.length < 200 ) {
                 this.state.list.push(this.state.todo);
                 this.setState(this.state.list);
                console.log("clicking");
        } else {
            popups.alert({
                content:
                "more than 1 char and less than 200 chars"
            });
        }
  }

    changeHandler(event){
        this.setState({todo: event.target.value});
        console.log("change handler", event.target.value);
    }

      render() {
        let todoList = this.state.list.map(stuff => {
            return (
                    <li>
                    {stuff}
                    </li>
            );
        });

        return (
          <div className="list">
             <input onChange={(e)=>{this.changeHandler(e)}} value={this.state.todo}/>
             <button className="btn btn-warning" onClick={()=>{this.clickHandler()}}>Add an item</button>
             <ul style={{backgroundColor: "lightyellow"}}>
             {todoList}
             </ul>
          </div>
        );
      }
    }

export default Form;