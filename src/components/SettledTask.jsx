import TaskCard from './TaskCard';
import '../styles/SettledTask.css';

const SettledTask = ({ task, handleDelete }) => {
  const filteredData = task.filter((item) => item.status === true);

  if (!task || filteredData.length === 0) {
    return <h1 className='settled-task'>No Completed Task.</h1>;
  }

  return (
    <div className='settled-task'>
      <h1>Task Done</h1>
      {task
        .filter((item) => item.status === true)
        .map((item, index) => (
          <TaskCard
            key={item.id}
            id={item.id}
            task={item.task}
            handleDelete={handleDelete}
            hidden={true}
          />
        ))}
    </div>
  );
};

export default SettledTask;
