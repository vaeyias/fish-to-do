import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import main_page from "../assets/main_page.png";
import "./App.css";
import Task from "./Task.jsx";

function App() {
  const [tasks, setTasks] = useState(["hi", "there"]);
  const [success, setSuccess] = useState("");
  return (
    <>
      <div className="top">
        <div className="flex h-32 justify-center">
          <h1 className="text-blue-950 bg-white rounded-3xl w-52 h-fit">
            To-Do
          </h1>
        </div>

        <div>
          <button
            className=" text-white mt-14 mb-3"
            onClick={() => {
              setTasks([...tasks, "edit task"]);
              setSuccess("success!");
              setTimeout(() => setSuccess(""), 700);
            }}
          >
            New
          </button>
          <p className="successText">{success}</p>
        </div>
      </div>

      {console.log(tasks)}
      <body className="flex items-center justify-center flex-wrap">
        {tasks.map((taskText, i) => (
          <Task task={taskText} />
        ))}
      </body>
    </>
  );
}

export default App;
