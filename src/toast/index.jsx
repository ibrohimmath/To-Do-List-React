import React, { useEffect, useRef } from "react";
import clsx from "clsx";

import cn from "./style.module.scss";

export default function Toast({ type = "success", message }) {
  const toastRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (toastRef && toastRef.current) {
        toastRef.current.classList.add("hidden");
      }
    }, 2800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={clsx(cn["toast"], cn[`toast-${type}`])} ref={toastRef}>
      {message}
    </div>
  );
}
