import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/form';
import Navbar from './components/navbar';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Game from './tutorialReact';






/**
 * I changed the default App for the Game for the tutorial following.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Form />
    <Navbar />
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
