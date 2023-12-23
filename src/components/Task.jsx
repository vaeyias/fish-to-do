import React, { useEffect, useState } from "react";
import "./Task.css";

export default function Task(props) {
  const [task, setTask] = useState(props.task);
  const [color, setColor] = useState("bg-white");
  const [deleteButton, setDelete] = useState("hidden");
  const [deleted, setDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(props.isEditing);

  useEffect(() => {
    if (deleted) {
      props.handleDelete(props.id);
      console.log("hi" + deleted + props.id);
    }
  }, [deleted]);

  const enterEditing = () => {
    if (!props.checkAlreadyEditing()) {
      setIsEditing(true);
      setDelete("hidden");
      setColor("bg-slate-900");
      props.changeAlreadyEditing([props.id]);
    }
  };

  const exitEditing = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      setColor("bg-white");
      props.changeAlreadyEditing([]);
    }
  };

  return (
    <div
      className={
        "bubbles flex items-center justify-center w-44 h-44 rounded-full outline outline-white 0 m-5 " +
        color +
        (props.checkAlreadyEditing()
          ? " "
          : " hover:bg-slate-900 hover:text-white")
      }
      onMouseEnter={() => {
        if (!isEditing && !props.checkAlreadyEditing()) {
          setDelete("inline");
        }
      }}
      onMouseLeave={() => {
        if (!isEditing && !props.checkAlreadyEditing()) {
          setDelete("hidden");
        }
      }}
    >
      <button
        className={"bg-red-600 rounded-md p-0 w-7 " + deleteButton}
        onClick={() => setDeleted(true)}
      >
        x
      </button>

      {isEditing ? (
        <input
          className="text-red-950 w-fit z-50"
          autoFocus
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={exitEditing}
        />
      ) : (
        <p className="break-words w-40" onClick={enterEditing}>
          {task}
        </p>
      )}
    </div>
  );
}
