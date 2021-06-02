import React from 'react';
import './assets/reset.css';
import './assets/styles.css';
import { Todo } from './pages/Todo/Todo';
import { Provider } from 'react-redux';
import index from './store';
import { createStore } from 'redux';

const Store = createStore(index);

function App() {
  return (
    <Provider store={Store}>
      <Todo />
    </Provider>
  );
}

export default App;
