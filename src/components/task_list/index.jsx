import React, { useState, useEffect } from "react";
import { addTask, getTasks, setTasks } from "../../localStorage";
import TaskItem from "../task_item";
import Toast from "../../toast";
import cn from "./style.module.scss";

export default function TaskList({ change, setChange }) {
  const [tasks, setTasks] = useState(getTasks());

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessages] = useState("");

  useEffect(() => {
    if (change) {
      const tasksCurr = getTasks();
      if (tasks.length > tasksCurr.length) {
        setShowToast(true);
        setToastMessages("Task was successfully deleted");
      }
      const timeout = setTimeout(() => {
        setTasks(tasksCurr);
        setChange(false);
        clearTimeout(timeout);
      }, 2800);
    }
  }, [change]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {showToast && <Toast type="success" message={toastMessage} />}
      <ul>
        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            isDone={item.isDone}
            title={item.title}
            description={item.description}
            change={change}
            setChange={setChange}
          />
        ))}
      </ul>
    </>
  );
}
