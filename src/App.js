import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

import "./app.css";


const toDo  = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Clean basment',
    id: 646464646,
    completed: false
  },

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo
    };
  }

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDo : [...this.state.toDo, newTodo]
    })
  }

  clearClompleted = e => {
    e.preventDefault();
    this.setState({
      toDo : this.state.toDo.filter(item =>
        !item.completed)

    })
  }

  toggleTodo = toDoId => {
    this.setState({
      toDo : this.state.toDo.map(item => {
        if(toDoId === item.id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }


  render() {
    return (
      <div className="App">
        <div className="content">
        <div className="header">
          <h1>Todo List</h1>
          
        </div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          toDo={this.state.toDo}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearClompleted}
        />
        </div>
      </div>
    );
  }
}

export default App;
