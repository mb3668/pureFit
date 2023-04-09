import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LoginScreen from './screens/loginScreen/loginScreen';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routes/route';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
