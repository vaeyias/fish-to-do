import React, { useState } from "react";
import "./Task.css";

export default function Task(props) {
  const [task, setTask] = useState("add task");

  return (
    <div className="flex items-center justify-center bg-white w-44 h-44 rounded-full hover:bg-blue-50 m-5">
      <p className="break-all w-40">{props.task}</p>
    </div>
  );
}
