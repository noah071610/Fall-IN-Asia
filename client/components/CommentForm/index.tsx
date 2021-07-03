import React, { FC, useState } from "react";
import { CommentFormWrapper } from "./styles";
import { Input } from "antd";
interface IProps {}

const CommentForm: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CommentFormWrapper>
      <div className="name-space">
        <a className="icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
        </a>
        <a className="name">佐藤真由美</a>
      </div>
      <div className="input-wrapper">
        <input placeholder="コメント作成" className="basic-input" />
        <button className="basic-btn">コメント</button>
      </div>
    </CommentFormWrapper>
  );
};

export default CommentForm;
