import React, { useCallback, useState } from 'react';
import { InputTextField, PrimaryButton, TodoList } from '../../components';
import { TodoState } from '../../store/initialState';

export const Todo = () => {
  const [todo, setTodo] = useState<TodoState>({ id: 0, title: '', detail: '', status: 'undone' });

  const inputTitile = useCallback(
    (event) => {
      setTodo(event.target.value);
    },
    [setTodo]
  );

  const inputDetail = useCallback(
    (event) => {
      setTodo(event.target.value);
    },
    [setTodo]
  );

  return (
    <div className={'c-section-container'}>
      <h2>TOTO LIST</h2>
      <InputTextField
        label={'Title'}
        multiline={true}
        fullWidth={true}
        required={true}
        type={'text'}
        value={todo.title}
        onChange={inputTitile}
      />
      <InputTextField
        label={'Detail'}
        multiline={true}
        fullWidth={true}
        required={false}
        type={'text'}
        value={todo.detail}
        onChange={inputDetail}
      />
      <div className={'module-spacer--medium'}></div>
      <PrimaryButton label={'Add Todo'} />
      <TodoList />
    </div>
  );
};
