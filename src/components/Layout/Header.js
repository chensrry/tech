import React from "react";

import Button from "../Button";

import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_content}>
        <div className={style.header_menu}>
          <ul className={style.header_ul}>
            <li className={style.header_li}>版权存证</li>
            <li className={style.header_li}>上传作品</li>
            <li className={style.header_li}>区块链浏览器</li>
          </ul>
        </div>
        <div className={style.header_action}>
          <Button type="gost">登陆</Button>
          <Button type="primary">注册</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
