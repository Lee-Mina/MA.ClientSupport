import React from "react";
import { css, cx } from "@emotion/css";

const search = () => {
  return (
    <div className={cx(container)}>
      <div className={cx(write)}>작성하기</div>
      <div className={cx(wrap)}>
        <input type="text" placeholder="무엇이 궁금한가요?" id="placeHolder" />
        <img src="search.png" className={cx(searchIconSize)} />
      </div>
    </div>
  );
};
export default search;

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
const write = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 170%;
  color: #4f4e5c;
  text-align: right;
  margin-bottom: 8px;
  cursor: pointer;
`;
const wrap = css`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  width: 460px;
  height: 24px;
  background: #ffffff;
  box-shadow: inset 0px 0px 8px rgba(132, 131, 141, 0.2);
  border-radius: 6px;
  align-items: center;
  color: #84838d;
  #placeHolder {
    width: 428px;
    height: 24px;
    border: 0px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
  }
  #placeHolder:focus {
    outline: none;
  }
`;
const searchIconSize = css`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
