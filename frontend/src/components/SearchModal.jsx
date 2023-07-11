import React from "react";
import Modal from "./Modal";

const SearchModal = ({ isOpen, onClose }) => {
  console.log(isOpen);
  console.log(!isOpen);
  if (!isOpen) return null;
  return (
    <Modal>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default SearchModal;
