import React from "react";

import Header from "./Header";

import style from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>footer</footer>
    </div>
  );
};

export default Layout;
