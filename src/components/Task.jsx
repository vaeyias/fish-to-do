import React, { useRef, useEffect, useState } from "react";
import "./Task.css";

export default function Task(props) {
  const [task, setTask] = useState(props.task);
  const [color, setColor] = useState("bg-slate-400");
  let inputRef = useRef();
  // show/hide delete button
  const [deleteButton, setDelete] = useState("hidden");

  // whether a task is being deleted
  const [deleted, setDeleted] = useState(false);

  // whether a task is being edited
  const [isEditing, setIsEditing] = useState(props.isEditing);

  // click outside input box to close
  useEffect(() => {
    let handler = (e) => {
      if (isEditing && !inputRef.current.contains(e.target)) {
        if (task.length === 0) {
          alert("Must enter at least one character");
        } else {
          setIsEditing(false);
          setColor("bg-blue-200");
          props.changeAlreadyEditing([]);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // deleting a task
  useEffect(() => {
    if (deleted) {
      props.handleDelete(props.id);
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
      if (task.length === 0) {
        alert("Must enter at least one character");
      } else {
        setIsEditing(false);
        setColor("bg-blue-200");
        props.changeAlreadyEditing([]);
      }
    }
  };

  return (
    <div
      className={
        "bubbles flex items-center justify-center w-44 h-44 rounded-full outline outline-white 0 m-5 relative " +
        color +
        (props.checkAlreadyEditing()
          ? " "
          : " hover:bg-slate-900 hover:text-white")
      }
      // shows and hides delete button
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
      {/* delete Button*/}
      <button
        className={
          "bg-cyan-600 rounded-md p-0 w-7 absolute inset-x-34 inset-y-0 h-fit " +
          deleteButton
        }
        // calls function to delete task
        onClick={() => setDeleted(true)}
      >
        x
      </button>

      {/* displays input box if isEditing and displays the task if not editing*/}
      {isEditing ? (
        <input
          className="text-red-950 w-fit z-50 p-2"
          autoFocus
          // sets initial value of input box
          value={task}
          // updates task as input changes
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={exitEditing}
          ref={inputRef}
          minLength={1}
        />
      ) : (
        <p className="break-words w-40" onClick={enterEditing}>
          {task}
        </p>
      )}
    </div>
  );
}
