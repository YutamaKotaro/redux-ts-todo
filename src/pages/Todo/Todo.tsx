import React, { useState } from 'react';
import { InputTextField, PrimaryButton, TodoList } from '../../components';

export const Todo = () => {
  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  return (
    <div className={'c-section-container'}>
      <h2>TOTO LIST</h2>
      <InputTextField
        label={'Title'}
        multiline={true}
        fullWidth={true}
        required={true}
        type={'text'}
      />
      <InputTextField
        label={'Detail'}
        multiline={true}
        fullWidth={true}
        required={false}
        type={'text'}
      />
      <div className={'module-spacer--medium'}></div>
      <PrimaryButton label={'Add Todo'} />
      <TodoList />
    </div>
  );
};
