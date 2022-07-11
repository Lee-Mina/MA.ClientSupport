import React from "react";
import { css, cx } from "@emotion/css";
import Search from "./noticeWriteSearch";
import Header from "./noticeWriteheader";

const serchHeader = () => {
  return (
    <div className={cx(wholeStyle)}>
      <Header />
      <Search className={cx(searchStyle)} />
    </div>
  );
};
export default serchHeader;

const searchStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
const wholeStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
