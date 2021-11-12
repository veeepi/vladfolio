import React from 'react';
import { CgClose } from 'react-icons/cg';

export default function FlyingButton({ action, appSelected, eventData }) {
  return (
    <button
      style={{
        display: `${appSelected ? 'block' : 'none'}`,
        position: 'fixed',
        left: `${eventData.clientX}px`,
        top: `${eventData.clientY}px`,
        // left: 0,
        // top: 0,
      }}
      className="flyingButton"
      onClick={() => {
        action(null);
      }}
    >
      <CgClose className="pagePanel__heading__close__icon" size={32} />
    </button>
  );
}
