import React from "react";

import style from "./wrapper.module.scss";

const Wrapper = ({ children, title, warpperStyle = {}, contentStyle = {} }) => {
  return (
    <section
      className={style.wrapper}
      style={{ width: "1200px", margin: "auto", ...warpperStyle }}
    >
      {title && <h2 className={style.wrapper_title}>{title}</h2>}
      <div className={style.wrapper_main} style={contentStyle}>
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
