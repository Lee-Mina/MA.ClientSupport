import { React } from "react";
import { css, cx } from "@emotion/css";
import SideBar from "../../components/NoticeWrite/noticeWriteSidebar";
import ArticleTitle from "../../components/NoticeWrite/noticeWriteArticleTitle";
import CommentContainer from "../../components/NoticeWrite/noticeCommentWrapper";
import HeaderSearch from "../../components/NoticeWrite/noticeWriteSearchHeader";
import TextArea from "../../components/NoticeWrite/noticeWriteTextArea";

const noticeWrite = () => {
  return (
    <div class={cx(wholeStyle)}>
      <HeaderSearch />
      <section className={cx(sectionStyle)}>
        <article>
          <SideBar />
        </article>
        <article className={cx(container)}>
          <ArticleTitle />
          <TextArea />
          <CommentContainer />
        </article>
      </section>
    </div>
  );
};
export default noticeWrite;

const wholeStyle = css`
  margin: 0 auto;
  width: 1190px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 1128px;
`;
const container = css`
  width: 936px;
  height: fit-content;
  max-height: 696px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(132, 131, 141, 0.5);
  border-radius: 6px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-left: 24px;
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
    position: relative;
    left: 300px;
    top: 50px;
    height: 183px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 68, 94, 1);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(231, 231, 232, 1);
    border-radius: 10px;
  }
`;
const sectionStyle = css`
  display: flex;
  margin-top: 24px;
`;
