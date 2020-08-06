import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, rootElement);
