import React, { FC, useCallback, useEffect, useState } from "react";
import { CommentFormWrapper } from "./styles";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { DEFAULT_ICON_URL, toastErrorMessage } from "config";
import TextareaAutosize from "react-textarea-autosize";
import { commentCreateAction } from "actions/comment";
import useInput from "@hooks/useInput";
import { useRouter } from "next/router";
interface IProps {}

const CommentForm: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const [content, onChangeContent, setContent] = useInput("");
  const onSubmitComment = useCallback(() => {
    if (content === "" || !content?.trim()) {
      toastErrorMessage("内容を書いてください。");
      return;
    }
    if (!user) {
      toastErrorMessage("ログインが必要です。");
      return;
    }
    let form = {
      content,
      postId: parseInt(query?.id as string),
    };
    dispatch(commentCreateAction(form));
    setContent("");
  }, [content, query, user]);
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
          value={content}
          onChange={onChangeContent}
        />
        <div>
          <button onClick={onSubmitComment} className="basic-btn">
            コメント
          </button>
        </div>
      </div>
    </CommentFormWrapper>
  );
};

export default CommentForm;
