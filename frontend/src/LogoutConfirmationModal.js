// LogoutConfirmationModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element as the app element for accessibility

function LogoutConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Logout Confirmation"
    >
      <h2>Confirm Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
}

export default LogoutConfirmationModal;
