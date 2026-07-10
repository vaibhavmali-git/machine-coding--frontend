import React, { useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  if (!isOpen) return null;


  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" ref={modalRef} aria-modal={true} aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close">
          <button onClick={onClose}>x</button>
        </div>
        <div className="modal-content">
          <h2 id="modal-title">Modal Title</h2>
          <p>This is the modal body. Put any content here</p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
