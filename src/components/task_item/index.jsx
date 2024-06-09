import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Type, TextBold, TextColor, TextSize } from "../typography";
import {
  getUpdateItem,
  setUpdateItem,
  updateTask,
  deleteTask,
} from "../../localStorage";
import cn from "./style.module.scss";

export default function TaskItem({
  id,
  isDone,
  title,
  description,
  style = {},
  change,
  setChange,
}) {
  const [IsDone, setIsDone] = useState(isDone);
  const [Title, setTitle] = useState(title);
  const [Description, setDescription] = useState(description);

  function handleTaskDone() {
    if (IsDone) return;
    setChange(true);
    setIsDone(true);
    updateTask(id, Title, Description, true);
  }

  function handleTaskUpdate() {
    setChange(true);
    if (isDone) {
      return;
    }
    setUpdateItem(id);
  }

  function handleTaskDelete() {
    setChange(true);
    deleteTask(id);
  }

  return (
    <div className={clsx(cn["task-item"])} style={style}>
      <div className={clsx(cn["task-item__content"])}>
        <span
          className={clsx(cn["task-item--done"], IsDone && cn["task--done"])}
          onClick={handleTaskDone}
        >
          <i className="fa-regular fa-circle-check"></i>
        </span>
        <Type
          tag="div"
          boldness={TextBold.semibold}
          color={TextColor.black}
          size={TextSize.md}
          style={{
            textAlign: "left",
            width: "100%",
            textDecoration: `${IsDone && "line-through"}`,
            color: `${IsDone && "grey"}`,
          }}
        >
          {title}
        </Type>
        <span
          className={clsx(cn["task-item--update"])}
          onClick={handleTaskUpdate}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </span>
        <span
          className={clsx(cn["task-item--delete"])}
          onClick={handleTaskDelete}
        >
          <i className="fa-regular fa-trash-can"></i>
        </span>
      </div>
      <hr />
      <div
        className={clsx(cn["task-item__desc"])}
        style={{
          textDecoration: `${IsDone && "line-through"}`,
          color: `${IsDone && "grey"}`,
        }}
      >
        {description}
      </div>
    </div>
  );
}
