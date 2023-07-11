import { createPortal } from 'react-dom';
import React from 'react';

export const OverlayPanel = ({
  children,
  isOpen,
  handleClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}) => {
  return (
    <>
      {createPortal(
        <section
          className="is-panel"
          style={{
            width: isOpen ? '50%' : 0,
            height: '100vh',
            transition: 'width .5s',
            background: '#000',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            overflowY: 'scroll',
            overflowX: 'hidden',
          }}
        >
          <button onClick={handleClose} className="button is-danger is-large">
            x
          </button>
          <div>{children}</div>
        </section>,
        document.body,
      )}
    </>
  );
};
