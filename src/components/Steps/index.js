import React from "react";

import style from "./index.module.scss";

import Wrapper from "../Layout/Wrapper";

const steps = [
  {
    step: "第一步",
    desc: "上传作品",
  },
  {
    step: "第一步",
    desc: "上传作品",
  },
  {
    step: "第一步",
    desc: "上传作品",
  },
  {
    step: "第一步",
    desc: "上传作品",
  },
];

const Steps = () => {
  return (
    <Wrapper title="步骤">
      <div className={style.steps_box}>
        {steps.map(({ step, desc }, index) => {
          return (
            <div className={style.step_item} key={index}>
              <img src="" alt="" />
              <p>{step}</p>
              <p>{desc}</p>
              {index > 2 ? null : <span className={style.step_arrow}>---</span>}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Steps;
