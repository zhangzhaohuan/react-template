import React, { Component } from 'react'
import { Provider } from 'mobx-react';
import AddTodo from './addtodo.jsx'
import ToggleList from './togglelist.jsx'
import TodoList from './todolist.jsx'
import store from '../store';

class App extends Component {
  componentDidMount() {
    console.log(store);
  }
  render() {
    return (
      <div className="todo-app">
        <Provider {...store} >
          <div>
            <AddTodo />
            <ToggleList />
            <TodoList />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App
