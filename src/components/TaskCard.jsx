import { React } from 'react';
import '../styles/TaskCard.css';

const TaskCard = ({ task, id, handleDelete, hidden, handleChecked }) => {
  return (
    <div className='task'>
      <p className='task-description'>{task}</p>
      <div className='task-card-button'>
        <button
          onClick={() => {
            handleChecked(id);
          }}
          className={`check-task fas fa-check ${hidden && `hidden`}`}
        ></button>
        <button
          onClick={() => {
            handleDelete(id);
          }}
          className='delete-task fas fa-trash'
        ></button>
      </div>
    </div>
  );
};

export default TaskCard;
