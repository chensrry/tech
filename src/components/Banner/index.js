import React from "react";

import style from "./index.module.scss";

import Wrapper from "../Layout/Wrapper";

const Banner = () => {
  return (
    <Wrapper contentStyle={{ paddingTop: "0px" }}>
      <div className={style.banner}>
        <div className={style.banner_left}>
          <h2 className={style.banner_title}>原创作品版权保护</h2>
          <ul>
            <li>通过区块链技术构建高效智能的区块链版权保护生态</li>
            <li>累积已为200万新闻稿件进行了版权存证</li>
          </ul>
          <div className={style.actions}>
            <a className={style.danger_action}>上传作品</a>
            <a className={style.ready_action}>已有作品</a>
          </div>
        </div>
        <div className={style.banner_right}>
          <img src="" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
