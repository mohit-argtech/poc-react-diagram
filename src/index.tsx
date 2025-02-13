import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import App from './App';
import reportWebVitals from './reportWebVitals'
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './reducer';
import { BrowserRouter } from 'react-router-dom';
// import configureStore from '../configureStore'

// import configureStore from '../configureStore'

const store = configureStore({
  reducer:rootReducer,
});
 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
