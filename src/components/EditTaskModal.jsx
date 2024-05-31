import React, { useState } from 'react';
import './EditTaskModal.css';

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    onSave(task.id, editText);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input 
          type="text" 
          value={editText} 
          onChange={(e) => setEditText(e.target.value)} 
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditTaskModal;
