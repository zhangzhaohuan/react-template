import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'
@inject('todolist')
@observer
class TodoList extends Component {

  render () {
    let { todolist } = this.props

    return (
      <ul className="todo-list">
        {
          todolist.getListData.map((todo, i) =>
            <li key={i}>{ todo.data }</li>
          )
        }
      </ul>
    )
  }
}

export default TodoList
