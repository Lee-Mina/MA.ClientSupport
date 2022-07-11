import React from "react";
import { css, cx } from "@emotion/css";

const articleTitle = () => {
  return (
    <div className={cx(titleWrap)}>
      <div className={cx(left)}>
        <div className={cx(title)}>
          [휴대폰] "거래거부등록" 이라는 메시지가 나옵니다.
        </div>
        <div className={cx(uploadDate)}>2020년12월12일</div>
      </div>
      <div className={cx(right)}>
        <div className={cx(edit)}>수정</div>
        <div className={cx(d2lete)}>삭제</div>
        <img src="Glyph_ undefined.png" className={cx(toggleOn)} />
      </div>
    </div>
  );
};
export default articleTitle;

const titleWrap = css`
  display: flex;
  padding: 16px 24px 0px;
  justify-content: space-between;
`;
const title = css`
  width: 508px;
  height: 26px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 170%;
  color: #4f4e5c;
  cursor: pointer;
`;
const right = css`
  display: flex;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 170%;
  text-align: right;
  align-items: center;
  color: #84838d;
`;
const edit = css`
  cursor: pointer;
`;
const d2lete = css`
  padding-left: 8px;
  padding-right: 16px;
  cursor: pointer;
`;
const toggleOn = css`
  transform: rotate(180deg);
  cursor: pointer;
`;
const uploadDate = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 170%;
  color: #84838d;
  cursor: pointer;
`;
const left = css`
  display: flex;
  flex-direction: column;
`;
