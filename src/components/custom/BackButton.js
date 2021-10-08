import React from 'react';
import { BiArrowBack } from 'react-icons/bi';

export default function BackButton({ action, text }) {
  return (
    <button
      className="button"
      onClick={() => {
        action(null);
      }}
    >
      <BiArrowBack className="button__icon" size={32} />
      <h3 className="button__text">{text}</h3>
    </button>
  );
}
