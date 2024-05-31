import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../features/tasks/tasksSlice';
import EditTaskModal from './EditTaskModal';

const Task = ({ task, onToggle, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleSave = (id, text) => {
    dispatch(updateTask({ id, text }));
    setIsEditing(false);
  };

  return (
    <div>
      <span onClick={onToggle}>
        {task.text}
      </span>
      <button onClick={onDelete}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {isEditing && (
        <EditTaskModal 
          task={task}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default Task;
