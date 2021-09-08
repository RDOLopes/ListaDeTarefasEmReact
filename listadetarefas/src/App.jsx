import React, { useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask";

import "./components/Tasks";
import Tasks from "./components/Tasks";

const App = () => {
  
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [...tasks, 
        {
          id: Math.random(10), 
          title: taskTitle,
          completed: false
        }];

        setTasks(newTasks);
  };

  

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
};

export default App;
