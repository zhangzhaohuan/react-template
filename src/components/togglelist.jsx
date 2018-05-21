import React, { Component } from 'react'
import { observer,inject } from 'mobx-react'
@inject('todolist')
@observer
class ToggleList extends Component {
  render () {
    let { todolist } = this.props
    return (
      <div className="toggle-list">
        <p style={todolist.setLeftStyle}>
          all
          <input type="radio" name="allornot" checked={todolist.checked} onChange={todolist.handerToggleLeft}/>
        </p>
        <p style={todolist.setRightStyle}>
          part
          <input type="radio" name="allornot" checked={!todolist.checked} onChange={todolist.handerToggleRight}/>
        </p>
      </div>
    )
  } 
}

export default ToggleList
