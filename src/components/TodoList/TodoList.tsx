import React from 'react';

interface Todo {
  todolist: any;
}

export const TodoList: React.VFC<Todo> = (props) => {
  return (
    <div>
      <h3 style={{ fontSize: '20px' }}>↓ Todo List Item ↓</h3>
      <p>{props.todolist}</p>
    </div>
  );
};
