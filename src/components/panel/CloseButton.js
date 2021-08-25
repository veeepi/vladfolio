import React from 'react';

export default function CloseButton({ toggleDisplayPagePanel }) {
  return (
    <button
      className="pagePanel__heading__close"
      onClick={() => {
        // toggle();
        toggleDisplayPagePanel();
      }}
    >
      {/* <GrClose className="pagePanel__close__X" size={32} /> */}
    </button>
  );
}
