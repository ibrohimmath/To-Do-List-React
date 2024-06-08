import React from "react";
import clsx from "clsx";

import cn from "./style.module.scss";

export default function Container({ children }) {
  return <div className={clsx(cn["container"])}>{children}</div>;
}
