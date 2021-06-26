import React, { useCallback, useState } from 'react';
import { InputTextField, PrimaryButton, TodoList } from '../../components';
import { setTodo, Cookie, setCookie } from '../../storage';

export const Todo = () => {
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');

  const inputTitle = useCallback(
    (event: any) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const inputDetail = useCallback(
    (event: any) => {
      setDetail(event.target.value);
    },
    [setDetail]
  );

  const handleOnSubmit = () => {
    setCookie.title = title;
    setCookie.detail = detail;

    setTitle('');
    setDetail('');
  };

  return (
    <div className={'c-section-container'}>
      <h2>TODO LIST</h2>
      <InputTextField
        label={'Title'}
        multiline={true}
        fullWidth={true}
        required={true}
        type={'text'}
        value={title}
        onChange={inputTitle}
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
      <TodoList todoTitle={Cookie.title} todoDetail={Cookie.detail} />
    </div>
  );
};
