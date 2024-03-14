import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

const DeleteButton = ({ productId, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    onDelete(productId);
    setShowConfirm(false);
  };

  return (
    <>
      <button className="btn btn-danger" onClick={() => setShowConfirm(true)}>
        Delete
      </button>
      <ConfirmModal show={showConfirm} onClose={() => setShowConfirm(false)} onConfirm={handleDelete}>
        Are you sure you want to delete this product?
      </ConfirmModal>
    </>
  );
};

export default DeleteButton;
