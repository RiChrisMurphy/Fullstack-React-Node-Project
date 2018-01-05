import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import App from './component/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.querySelector('#root')
);

console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY);
console.log('environment is', process.env.NODE_ENV);
