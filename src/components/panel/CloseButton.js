import React from 'react';
import { CgClose } from 'react-icons/cg';

export default function CloseButton({ toggleDisplayPagePanel }) {
  return (
    <button
      className="pagePanel__heading__close"
      onClick={() => {
        // toggle();
        toggleDisplayPagePanel();
      }}
    >
      <CgClose className="pagePanel__heading__close__icon" size={32} />
    </button>
  );
}
