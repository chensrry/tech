import React from "react";

import style from "./index.module.scss";

import Wrapper from "../Layout/Wrapper";

const items = [
  {
    title: "视频",
    value: 1000,
  },
  {
    title: "文档",
    value: 1000,
  },
  {
    title: "图片",
    value: 1000,
  },
  {
    title: "音效",
    value: 1000,
  },
  {
    title: "网页",
    value: 1000,
  },
];

const Description = () => {
  return (
    <Wrapper>
      <div className={style.description}>
        <h3>已通过六脉通上链登记数</h3>
        <div className={style.flex_box}>
          {items.map(({ title, value }, index) => {
            return (
              <div key={index} className={style.flex_item}>
                <p>{title}</p>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Description;
