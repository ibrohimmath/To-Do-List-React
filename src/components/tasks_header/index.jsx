import React, { useRef, useState } from "react";
import clsx from "clsx";
import { Type, TextSize, TextColor, TextBold } from "../typography";
import { Input } from "../input";
import Button from "../button";

import backgroundSrc from "../../assets/header_background.png";
import cn from "./style.module.scss";

export default function TasksHeader() {
  const [titleVal, setTitleVal] = useState("");
  const [descVal, setDescVal] = useState("");

  function handleTitleInput(e) {
    setTitleVal(e.target.value);
  }

  function handleDescInput(e) {
    setDescVal(e.target.value);
  }

  const titleRef = useRef(null);
  const descRef = useRef(null);

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
        <form action="">
          <Input
            type="text"
            placeholder="Title"
            style={{ width: "100%" }}
            onClick={handleTitleInput}
          />
          <Input
            type="text"
            placeholder="Description"
            style={{ width: "100%", marginTop: "1.25rem" }}
            onClick={handleDescInput}
          />
          <Button style={{ display: "block", margin: "1.1rem auto 0 auto" }}>
            Add
          </Button>
        </form>
      </div>
    </div>
  );
}
