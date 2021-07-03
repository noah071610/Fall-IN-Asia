import React, { FC, useState } from "react";
import { CommentWrapper } from "./styles";
import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
interface IProps {}

const Comment: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <CommentWrapper>
      <div className="name-space">
        <div>
          <a className="icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
          </a>
          <a className="name">佐藤真由美</a>
        </div>
        <div className="comment-menu">
          <a className="color-red">
            <HeartOutlined />
          </a>
          <a>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </div>
      </div>
      <p className="comment-wrapper">すごいですね！私も早く行ってみたい！</p>
    </CommentWrapper>
  );
};

export default Comment;
