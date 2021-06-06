import React from 'react';
import './assets/reset.css';
import './assets/styles.css';
import { Todo } from './pages/Todo/Todo';
import { Provider } from 'react-redux';
import index from './store';
import { createStore } from 'redux';
import { CookiesProvider } from 'react-cookie';

const Store = createStore(index);

function App() {
  return (
    <CookiesProvider>
      <Provider store={Store}>
        <Todo />
      </Provider>
    </CookiesProvider>
  );
}

export default App;
