import { observable, computed, autorun, action } from 'mobx'

import data from './data.js'

class Todolist {
  @observable todoData = data
  @observable defaultVal = 'abc'
  @observable defaultVal2 = 'abc2'
  @observable checked = true

  welcome = () => {
    autorun(() => {
      if (this.defaultVal === 'hunter') {
        console.log('welcome')
      }
    })
  }
  autorun(){
    if (this.defaultVal === 'hunter') {
      console.log('welcome')
    }
  }
  @computed get getInputLength () {
    return this.defaultVal.length
  }
  @computed get getListData () {
    if (this.checked) {
      return this.todoData
    } else {
      let val = []
      this.todoData.forEach(el => {
        if (el.status) {
          val.push(el)
        }
      })
      return val
    }
  }
  @computed get setLeftStyle () {
    if (this.checked) {
      return {
        background: 'rgba(150, 150, 150, 0.5)'
      }
    } else {
      return {

      }
    }
  }
  @computed get setRightStyle () {
    if (!this.checked) {
      return {
        background: 'rgba(150, 150, 150, 0.5)'
      }
    } else {
      return {
        
      }
    }
  }

  @action.bound handlerChange (event) {
    this.defaultVal = event.target.value
  }
  @action.bound addTodo (event) {
    if (event.keyCode === 13) {
      var data = {
        'data': event.target.value
      }
      this.todoData.push(data);
      this.defaultVal = ''
    } else {
      return false
    }
  }
  @action.bound handerToggleLeft () {
    this.checked = true
  }
  @action.bound handerToggleRight () {
    this.checked = false
  }
}

let todolist = new Todolist()

todolist.welcome.call(todolist)

export default todolist 
