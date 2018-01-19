import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import App from './component/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import axios from 'axios';
//window.axios = axios;
//development only axios helpers
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.querySelector('#root')
);
