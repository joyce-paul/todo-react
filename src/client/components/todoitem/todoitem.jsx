import React from 'react';

class Todoitem extends React.Component {
      render() {
        return (
          <div>
            <h1>Task: <input onChange={ event => {this.props.connection(event.target.task)} }/></h1>
          </div>
        )
      }
    }

export default Todoitem;