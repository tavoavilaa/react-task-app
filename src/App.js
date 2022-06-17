import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    if  (
          !taskItems.find((task) => (task.name === taskName))
        ) 
        {
          
        setTaskItems([...taskItems, { name: taskName, done: false }]);
        }

  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable 
        taskItems={taskItems} 
        toggleTask={toggleTask}
      />

      <VisibilityControl
        isChecked={showCompleted}
        showCompleted={showCompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />

      {
        showCompleted && (
          <TaskTable 
            taskItems={taskItems} 
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )
      }
    </div>
  );
}

export default App;
