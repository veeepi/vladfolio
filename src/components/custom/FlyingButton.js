import React from 'react';
import { CgClose } from 'react-icons/cg';

export default function FlyingButton({ action, appSelected, eventData }) {
  return (
    <button
      className={`flyingButton`}
      style={{
        display: `${appSelected ? 'block' : 'none'}`,

        left: `${eventData.clientX - 35}px`,
        top: `${eventData.clientY - 35}px`,
      }}
      onClick={() => {
        action(null);
      }}
    >
      <CgClose className="pagePanel__heading__close__icon" size={32} />
    </button>
  );
}
