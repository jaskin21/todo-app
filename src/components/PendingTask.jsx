import TaskCard from './TaskCard';
import '../styles/PendingTask.css';

const PendingTask = ({ task, handleDelete, handleChecked }) => {
  const filteredData = task.filter((item) => item.status === false);

  if (!task || filteredData.length === 0) {
    return <h1 className='pending-task'>No Pending Task</h1>;
  }

  return (
    <div className='pending-task'>
      <h1>Pending Task </h1>
      {task
        .filter((item) => item.status === false)
        .map((item, index) => (
          <TaskCard
            key={item.id}
            id={item.id}
            rating={item.rating}
            task={item.task}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
          />
        ))}
    </div>
  );
};

export default PendingTask;
