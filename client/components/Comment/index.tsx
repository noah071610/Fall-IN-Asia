import React, { FC, useEffect, useState } from "react";
import { CommentWrapper } from "./styles";
import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
interface IProps {}

const Comment: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <CommentWrapper>
      <div className="name-space">
        <div>
          <a className="icon">
            {user ? (
              <img src={user.icon} alt="user_icon" />
            ) : (
              <img src={DEFAULT_ICON_URL} alt="user_icon" />
            )}
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
