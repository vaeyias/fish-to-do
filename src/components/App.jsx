import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import main_page from "../assets/main_page.png";
import "./App.css";
import Task from "./Task.jsx";

function App() {
  const [tasks, setTasks] = useState(["hi", "there"]);

  return (
    <>
      <div className="h-32">
        <h1 className="text-blue-950">To-Do</h1>
      </div>

      <div>
        <button
          className=" text-white m-14"
          onClick={() => setTasks([...tasks, "edit task"])}
        >
          New
        </button>
      </div>
      {console.log(tasks)}
      <div className="flex items-center justify-center">
        {tasks.map((taskText, i) => (
          <Task task={taskText} />
        ))}
      </div>
    </>
  );
}

export default App;
