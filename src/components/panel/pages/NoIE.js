import React from 'react';
import { FaInternetExplorer } from 'react-icons/fa';

export default function NoIE() {
  return (
    <div className="App">
      <div className="noIE__message">
        <p className="noIE__message__text">Regrettably,</p>
        <p className="noIE__message__text">
          This app does not support{' '}
          <FaInternetExplorer className="noIE__message__text__ie" />
          <span className="noIE__message__text__ie">Internet Explorer</span>.
        </p>
        <p className="noIE__message__text">
          Please consider using a different browser.
        </p>
      </div>
    </div>
  );
}
