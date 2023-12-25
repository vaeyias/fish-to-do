import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import main_page from "../assets/main_page.png";
import "./App.css";
import Task from "./Task.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  let id = 0;
  const [tasks, setTasks] = useState([]);
  const [success, setSuccess] = useState("   ");
  const [alreadyEditing, setAlreadyEditing] = useState([]);

  // keeps track of what task is being edited
  const changeAlreadyEditing = (id) => {
    setAlreadyEditing(id);
  };

  // checks whether a task is being edited
  const checkAlreadyEditing = (id) => {
    if (alreadyEditing.length == 0 || alreadyEditing[0] == id) {
      return false;
    } else {
      return true;
    }
  };

  // deletes a task
  const handleDelete = (id) => {
    console.log("deleting");
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="top">
        <div className="flex h-32 justify-center">
          <h1 className="text-blue-950 bg-white rounded-3xl w-52 h-fit">
            Bubble
          </h1>
        </div>

        <div>
          <button
            className=" text-white mt-14 mb-3"
            onClick={() => {
              id = uuidv4();
              setTasks([...tasks, { todo: "click to edit", id: id }]);

              setSuccess("success!");
              setTimeout(() => setSuccess("   "), 700);
            }}
          >
            New
          </button>
          <p className="successText p-0 m-0">{success}</p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap">
        {tasks.map((todo) => (
          <Task
            task={todo.todo}
            key={todo.id}
            id={todo.id}
            handleDelete={handleDelete}
            changeAlreadyEditing={changeAlreadyEditing}
            checkAlreadyEditing={checkAlreadyEditing}
          />
        ))}
      </div>
    </>
  );
}

export default App;
