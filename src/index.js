import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//React Router Imports
import { router } from './router/Index';
import { RouterProvider } from 'react-router-dom';

//Context Imports
import CartContextProvider from './context/CartContex';

//Firebase Initialization

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA4jmWxE2W-sigYCtB3d1PTn8c605FSMEQ',
  authDomain: 'stefanos-deco.firebaseapp.com',
  projectId: 'stefanos-deco',
  storageBucket: 'stefanos-deco.appspot.com',
  messagingSenderId: '343205204965',
  appId: '1:343205204965:web:04a8b759066ea7de85150c',
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
