// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div >
      {props.toDo.map(item => (
        <Todo key={item.id} item={item} toggleTodo={props.toggleTodo} />
        
      ))}
      <button className="complete-btn" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;