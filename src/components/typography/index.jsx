import React from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

export const TextColor = {
  default: "text-color--green",
  black: "text-color--black",
  white: "text-color--white",
};

export const TextSize = {
  default: "text-size--md",
  sm: "text-size--sm",
  md: "text-size--md",
  lg: "text-size--lg",
  xl: "text-size--xl",
};

export const TextBold = {
  default: "text-boldness--normal",
  normal: "text-boldness--normal",
  semibold: "text-boldness--semibold",
  bold: "text-boldness--bold",
};

export function Type({
  tag = "span",
  style = "",
  size = TextSize.default,
  color = TextColor.default,
  boldness = TextBold.default,
  children,
}) {
  const Tag = `${tag}`;

  return (
    <Tag
      className={clsx(cn["text"], cn[size], cn[color], cn[boldness])}
      style={style}
    >
      {children}
    </Tag>
  );
}
