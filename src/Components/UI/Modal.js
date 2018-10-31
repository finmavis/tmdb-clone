import React from 'react';
import './Modal.css';

const Modal = props => {
  return props.isOpen ? (
    <div className="modal" onClick={props.toggleModal}>
      <div className="modal-content">{props.children}</div>
    </div>
  ) : null;
};

export default Modal;
