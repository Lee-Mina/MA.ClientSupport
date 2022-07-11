import { css, cx } from "@emotion/css";

const textArea = () => {
  return (
    <div className={cx(wrap)}>
      <div className={cx(leftLine)}></div>
      <div className={cx(TextOfArticle)}>
        환불 안내 사항 <br />
        Daum캐쉬 환불은 1가지 방법으로 가능합니다.
      </div>
    </div>
  );
};
export default textArea;

const wrap = css`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #ededef; ;
`;
const leftLine = css`
  display: flex;
  background-color: #ff445e;
  width: 2px;
  height: 56px;
`;
const TextOfArticle = css`
  width: 872px;
  height: 56px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  padding-left: 16px;
  display: flex;
  align-items: center;
  resize: none;
`;
