import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NoIE from './components/panel/pages/NoIE';
import reportWebVitals from './reportWebVitals';
import Bowser from 'bowser';

const browser = Bowser.getParser(window.navigator.userAgent);

ReactDOM.render(
  <React.StrictMode>
    {browser.parsedResult.browser.name === 'Internet Explorer' ? (
      <NoIE />
    ) : (
      <App />
    )}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
