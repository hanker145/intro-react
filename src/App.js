import React, { useState } from 'react'
import "./App.css"
import Header from "./components/Header"
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';


function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS fundemental", status: 0},
    { id: "task_2", title: "Code a Todo list level 2", status: 1},
  ]);
  const [showIncomplete, setShowIncomplete] = useState(true);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0
      }
      setTasks([...tasks, task]);
      setNewTask("");
    }
  }

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }
  const setTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {...task, status: status ? 1 : 0}
      }
      return task;
    }))
  } 

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId ))
  }

  
  return (
<div className="container">
  < Header title="Todo List" subTitle="Get Things done"/>
  < Header title="Expenses App" subTitle=""/>
  
  <TaskList tasks={tasks} 
  showIncomplete={showIncomplete} 
  setTaskStatus={setTaskStatus} 
  removeTask={removeTask} setShowIncomplete={setShowIncomplete}/>
  
  
 <AddTaskForm newTask={newTask} 
 handleInputChange={handleInputChange} 
 handleSubmit={handleSubmit}/>
</div>
  )
}

export default App
