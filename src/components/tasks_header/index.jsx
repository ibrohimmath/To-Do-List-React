import React, { useRef, useState } from "react";
import clsx from "clsx";
import { Type, TextSize, TextColor, TextBold } from "../typography";
import { Input } from "../input";
import Button from "../button";

import { getTasks, setTasks, addTask } from "../../localStorage";

import backgroundSrc from "../../assets/header_background.png";
import cn from "./style.module.scss";

console.log(getTasks());

export default function TasksHeader() {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const [titleVal, setTitleVal] = useState("");
  const [descVal, setDescVal] = useState("");

  function handleTitleInput(e) {
    setTitleVal(e.target.value);
  }

  function handleDescInput(e) {
    setDescVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(titleRef.current.value, titleVal);
    // console.log(descRef.current.value, descVal);

    if (titleVal.trim() && descVal.trim()) {
      addTask(titleVal, descVal);
      alert("Task has been successfully added");
      titleRef.current.value = "";
      descRef.current.value = "";
      return;
    }

    titleRef.current.value = "";
    descRef.current.value = "";
    alert("Invalid title or description values");
  }

  return (
    <div className={clsx(cn["tasksheader"])}>
      <img src={backgroundSrc} alt="Background image" />
      <div className={clsx(cn["tasksheader__content"])}>
        <Type
          tag="div"
          size={TextSize.xl}
          color={TextColor.black}
          boldness={TextBold.bold}
          style={{ textAlign: "center", padding: "2rem 0" }}
        >
          My Tasks
        </Type>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Title"
            style={{ width: "100%" }}
            onChange={handleTitleInput}
            ref={titleRef}
          />
          <Input
            type="text"
            placeholder="Description"
            style={{ width: "100%", marginTop: "1.25rem" }}
            onChange={handleDescInput}
            ref={descRef}
          />
          <Button style={{ display: "block", margin: "1.1rem auto 0 auto" }}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}
