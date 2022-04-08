import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from '../components/Header';
import AddTask from '../components/AddTask';
import PendingTask from '../components/PendingTask.jsx';
import SettledTask from '../components/SettledTask';
import Footer from '../components/Footer';
import TodoListData from '../adapters/Data';
import Card from '../components/sub-components/Card';
import '../styles/App.css';

function App() {
  const [task, getTask] = useState(TodoListData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    alert('You have Added new Task!');
    getTask([newFeedback, ...task]);
  };

  const checkedTask = (id) => {
    if (window.confirm('Congrats!!')) {
      const index = task.findIndex((e) => e.id === id);
      const object = task[index];
      getTask(
        [...task, { ...object, status: true }].filter((item, i) => {
          return i !== index;
        })
      );
    }
  };

  const deleteTask = (id) => {
    if (window.confirm('Are You sure?')) {
      getTask(task.filter((item) => item.id !== id));
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='main-container'>
        <Card>
          <AddTask handleAdd={addFeedback} />
        </Card>
        <Card>
          <PendingTask
            task={task}
            handleDelete={deleteTask}
            handleChecked={checkedTask}
          />
        </Card>
        <Card>
          <SettledTask task={task} handleDelete={deleteTask} />
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default App;
