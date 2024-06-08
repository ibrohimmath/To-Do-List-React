import React from "react";
import clsx from "clsx";
import { Type, TextSize, TextColor, TextBold } from "../typography";

import backgroundSrc from "../../assets/header_background.png";
import cn from "./style.module.scss";

export default function TasksHeader() {
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
      </div>
    </div>
  );
}
