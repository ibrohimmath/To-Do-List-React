import React from "react";
import clsx from "clsx";

import cn from "./style.module.scss";

export default function Button({ children, style = {} }) {
  return <button style={style}>{children}</button>;
}
