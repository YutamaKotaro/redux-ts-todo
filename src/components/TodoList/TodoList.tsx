import React from 'react';

interface Todo {
  todoTitle: any;
  todoDetail?: any;
}

export const TodoList: React.VFC<Todo> = (props) => {
  return (
    <div>
      <h3 style={{ fontSize: '20px' }}>↓ Todo List Item ↓</h3>
      <div>Title ⇨ {props.todoTitle}</div>
      <div>Detail ⇨ {props.todoDetail}</div>
    </div>
  );
};
