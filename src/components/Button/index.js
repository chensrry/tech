import React from "react";

import style from "./button.module.scss";

const Button = ({ children, type }) => {
  const cls = type === "primary" ? style["primary"] : style["gost"];

  return <a className={` ${style.button} ${cls}`}>{children}</a>;
};

export default Button;
