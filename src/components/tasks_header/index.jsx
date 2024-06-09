import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  addTask,
  updateTask,
  getUpdateItem,
  deleteUpdateItem,
} from "../../localStorage";
import { Type, TextSize, TextColor, TextBold } from "../typography";
import { Input } from "../input";
import Button from "../button";
import Toast from "../../toast";

import backgroundSrc from "../../assets/header_background.png";
import cn from "./style.module.scss";

export default function TasksHeader({ change, setChange }) {
  // Manipulating titleVal and descVal in form
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [titleVal, setTitleVal] = useState("");
  const [descVal, setDescVal] = useState("");

  // Manipulating for showing toast in proper situation
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastType, setToastType] = useState("success");

  // Manipulating update task item
  const [itemUpdate, setItemUpdate] = useState(null);
  const [isupdating, setIsupdating] = useState(false);

  // set updateItem when change has been detected
  useEffect(() => {
    const updateItem = getUpdateItem();
    setItemUpdate(updateItem);
    setIsupdating(!!updateItem);
  }, [change]);

  // Fill form with item update properties
  useEffect(() => {
    if (itemUpdate) {
      setTitleVal(itemUpdate.title);
      setDescVal(itemUpdate.description);
    }
  }, [itemUpdate]);

  // Toast useEffect
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  function handleTitleInput(e) {
    setTitleVal(e.target.value);
  }
  function handleDescInput(e) {
    setDescVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (titleVal === "" && descVal === "") {
      return;
    }

    if (titleVal.trim() && descVal.trim()) {
      setChange(true);
      if (!isupdating) {
        addTask(titleVal, descVal);
        setToastText("Task has been successfully added");
      } else {
        updateTask(itemUpdate.id, titleVal, descVal, itemUpdate.isDone);
        setChange(true);
        setToastText("Task has been successfully updated");
        setIsupdating(false);
        deleteUpdateItem();
      }
      setToastType("success");
      setShowToast(true);
    } else {
      setToastText("Invalid title or description values");
      setToastType("error");
      setShowToast(true);
    }
    setTitleVal("");
    setDescVal("");
    titleRef.current.value = "";
    descRef.current.value = "";
  }

  return (
    <div className={clsx(cn["tasksheader"])}>
      {showToast && <Toast type={toastType} message={toastText} />}
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
            value={titleVal}
            onChange={handleTitleInput}
            ref={titleRef}
          />
          <Input
            type="text"
            placeholder="Description"
            style={{ width: "100%", marginTop: "1.25rem" }}
            value={descVal}
            onChange={handleDescInput}
            ref={descRef}
          />
          <Button style={{ display: "block", margin: "1.1rem auto 0 auto" }}>
            {`${isupdating ? "Update" : "Add"}`}
          </Button>
        </form>
      </div>
    </div>
  );
}
