import React, { FC, useEffect, useState } from "react";
import { CommentFormWrapper } from "./styles";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { DEFAULT_ICON_URL } from "config";
import TextareaAutosize from "react-textarea-autosize";
interface IProps {}

const CommentForm: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <CommentFormWrapper>
      <div className="name-space">
        <a className="icon">
          {user ? (
            <img src={user.icon} alt="user_icon" />
          ) : (
            <img src={DEFAULT_ICON_URL} alt="user_icon" />
          )}
        </a>
        <a className="name">{user ? user.name : "ユーザー"}</a>
      </div>
      <div className="input-wrapper">
        <TextareaAutosize
          className="basic-textarea"
          placeholder={user ? "コメント作成" : "ログインしてコメント作成"}
        />
        <div>
          <button className="basic-btn">コメント</button>
        </div>
      </div>
    </CommentFormWrapper>
  );
};

export default CommentForm;
