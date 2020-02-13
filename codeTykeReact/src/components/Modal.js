import React from "react";

const Modal = props => {
  return (
    <div className="modal">
      <h3>Rules</h3>
      <div>{props.info}</div>
    </div>
  );
};

export default Modal;
// <div className="modal-container" onClick={() => setShowModal(!showModal)}> </div>
