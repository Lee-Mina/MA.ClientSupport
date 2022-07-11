import React from "react";
import { css, cx } from "@emotion/css";

const articleTitle = () => {
  return (
    <div className={cx(titleWrap)}>
      <div className={cx(left)}>
        <input
          type="text"
          placeholder="제목을 입력해 주세요."
          className={cx(title)}
        />
      </div>
      <button className={cx(rightWriteButton)}>
        <div className={cx(writeButtonText)}>작성</div>
        <img src="write.png" className={cx(writeImg)} />
      </button>
    </div>
  );
};
export default articleTitle;

const titleWrap = css`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  justify-content: space-between;
`;
const title = css`
  width: 625px;
  height: 30px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 170%;
  color: #4f4e5c;
  outline: none;
  border: 0px;
`;
const rightWriteButton = css`
  display: flex;
  width: 100px;
  height: 43px;
  align-items: center;
  background-color: #ff445e;
  border: none;
  border-radius: 6px;
  justify-content: center;
  cursor: pointer;
`;
const left = css`
  display: flex;
  flex-direction: column;
`;
const writeButtonText = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
const writeImg = css`
  width: 15px;
  height: 15px;
  padding-left: 8px;
`;
