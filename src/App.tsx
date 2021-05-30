import React from 'react';
import './assets/reset.css';
import './assets/styles.css';
import { Todo } from './pages/Todo/Todo';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { createStore } from 'redux';

const Store = createStore(store);

function App() {
  return (
    <Provider store={Store}>
      <Todo />
    </Provider>
  );
}

export default App;
