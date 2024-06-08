import React, { forwardRef } from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

export const InputRadius = {
  default: "input-radius--sm",
  sm: "input-radius--sm",
};

export const InputBackground = {
  default: "input-background--primary",
  primary: "input-background--primary",
};

export const InputPadding = {
  default: "input-padding--md",
  md: "input-padding--md",
};

export const InputSize = {
  default: "input-size--md",
  md: "input-size--md",
};

export const InputBold = {
  default: "input-boldness--normal",
  normal: "input-boldness--normal",
};

export const Input = forwardRef(function Input(props, ref) {
  const {
    type = "text",
    placeholder,
    radius = InputRadius.default,
    background = InputBackground.default,
    padding = InputPadding.default,
    size = InputSize.default,
    boldness = InputBold.default,
    style = {},
    onChange,
  } = props;

  const classNames = clsx(
    cn["input"],
    cn[radius],
    cn[background],
    cn[padding],
    cn[size],
    cn[boldness]
  );

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames}
      style={style}
      onChange={onChange}
      ref={ref}
    />
  );
});
