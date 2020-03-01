import React from 'react';
import Todoitem from '../todoitem/todoitem';

class Itemlist extends React.Component {
    constructor() {
        super()
        this.state = {
        todo : "",
        list: []
      };
    }

    setTodo(task) {
        this.setState({todo: task})
    }

    render() {
        let todoList = this.state.list.map(stuff => {
            return (
                <div>
                    <Todoitem connection={(item) => {this.setTodo(item)}} />
                </div>
            );
    });
}
}

export default Itemlist;