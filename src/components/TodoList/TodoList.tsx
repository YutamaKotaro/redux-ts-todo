import React from 'react';

interface Todo {
  todoTitle: any;
  todoDetail?: any;
}

export const TodoList: React.VFC<Todo> = (props) => {
  return (
    <div>
      <h3 style={{ fontSize: '24px', marginBottom: '1.5rem' }}>↓ Todo List Item ↓</h3>
      <div style={{ fontSize: '20px' }}>Title ⇨ {props.todoTitle}</div>
      <div>Detail ⇨ {props.todoDetail}</div>
    </div>
  );
};
