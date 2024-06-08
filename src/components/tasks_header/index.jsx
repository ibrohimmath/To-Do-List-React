import React from "react";
import clsx from "clsx";
import backgroundSrc from "../../assets/header_background.png";
import cn from "./style.module.scss";

export default function TasksHeader() {
  return (
    <div className={clsx(cn["tasksheader"])}>
      <img src={backgroundSrc} alt="Background image" />
    </div>
  );
}
