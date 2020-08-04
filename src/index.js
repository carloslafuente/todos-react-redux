import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './redux/reducers';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, rootElement);

serviceWorker.unregister();
