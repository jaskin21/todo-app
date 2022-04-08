import { useState } from 'react';
import '../styles/AddTask.css';

const AddTask = ({ handleAdd }) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 1) {
      const newFeedback = {
        task: text,
        status: false,
      };
      handleAdd(newFeedback);
      setText('');
    }
  };

  return (
    <div className='add-task'>
      <form onSubmit={handleSubmit}>
        <label>Hai! Input your Plan below.</label>
        <input
          onChange={handleTextChange}
          value={text}
          placeholder='Input Your Task'
        />
        <button type='submit' className='add-task-button'>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
