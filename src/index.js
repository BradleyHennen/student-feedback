import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


const reviewReducer = (state = [], action) => {
   if (action.type === 'ADD_FEELING') {
      return {feeling: action.payload};
   } else if (action.type === 'ADD_UNDERSTANDING') {
      return action.payload;
   } else if (action.type === 'ADD_SUPPORT') {
      return action.payload;
   } else if (action.type === 'ADD_COMMENTS') {
      return action.payload;
   } 
   return state;
}



const storeInstance = createStore(
    combineReducers({
      reviewReducer
    }),
    applyMiddleware(logger),
 );

ReactDOM.render(
    <Provider store={storeInstance}>
       <App />
    </Provider>,
    document.getElementById('root')
 );
 
registerServiceWorker();
