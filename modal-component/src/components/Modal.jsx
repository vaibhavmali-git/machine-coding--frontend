import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef(null);

  //Escape Key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  //focus close button
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-close">
          <button ref={closeBtnRef} onClick={onClose} aria-label="Close modal">
            x
          </button>
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
