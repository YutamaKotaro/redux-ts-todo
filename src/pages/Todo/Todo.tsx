import React, { useCallback, useState } from 'react';
import { InputTextField, PrimaryButton, TodoList } from '../../components';
import { useCookies } from 'react-cookie';

export const Todo = () => {
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [todo, setTodo] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const inputTitile = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const inputDetail = useCallback(
    (event) => {
      setDetail(event.target.value);
    },
    [setDetail]
  );

  const handleOnSubmit = () => {
    setCookie('user', 'obydul', { path: '/' });
  };

  return (
    <div className={'c-section-container'}>
      <h2>TOTO LIST</h2>
      <InputTextField
        label={'Title'}
        multiline={true}
        fullWidth={true}
        required={true}
        type={'text'}
        value={title}
        onChange={inputTitile}
      />
      <InputTextField
        label={'Detail'}
        multiline={true}
        fullWidth={true}
        required={false}
        type={'text'}
        value={detail}
        onChange={inputDetail}
      />
      <div className={'module-spacer--medium'}></div>
      <PrimaryButton label={'Add Todo'} onClick={() => handleOnSubmit()} />
      <TodoList />
    </div>
  );
};
