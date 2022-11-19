import React from "react";

import style from "./index.module.scss";

import Wrapper from "../Layout/Wrapper";

const Marjor = () => {
  return (
    <Wrapper title="产品特性">
      <div className={style.marjor_box}>
        <div className={style.marjor_item}>
          <img src="" alt="" />
        </div>
        <div className={style.marjor_item}>
          <img src="" alt="" />
        </div>
        <div className={style.marjor_item}>
          <img src="" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Marjor;
