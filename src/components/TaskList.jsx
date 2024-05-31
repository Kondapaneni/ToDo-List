import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasks/tasksSlice';
import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <Task 
            task={task}
            onToggle={() => dispatch(toggleTask(task.id))}
            onDelete={() => dispatch(deleteTask(task.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
