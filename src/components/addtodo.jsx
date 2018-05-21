import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'
@inject('todolist')
@observer
class AddTodo extends Component {
  componentDidMount(){
    console.log(this.props.todolist);
  }
  render () {
    let { todolist } = this.props
    console.log('pp');
    
    return (
      <div className="add-todo">
        <input
          className="input"
          placeholder="记录你的 todo 吧..."
          value={todolist.defaultVal}
          onChange={todolist.handlerChange}
          onKeyDown={todolist.addTodo}
        />
        <i className="input-length">{todolist.getInputLength}</i>
        <p className="input-review">{todolist.defaultVal}</p>
      </div>
    )
  }
}

export default AddTodo
