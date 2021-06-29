import React, { FC, useState } from "react";
import { CommentWrapper } from "./styles";

interface IProps {}

const Comment: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CommentWrapper>
      <div className="name-space">
        <a className="icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
        </a>
        <a className="name">佐藤真由美</a>
      </div>
      <p className="comment-wrapper">すごいですね！私も早く行ってみたい！</p>
    </CommentWrapper>
  );
};

export default Comment;
