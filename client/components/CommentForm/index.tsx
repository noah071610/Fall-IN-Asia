import React, { FC, useCallback, useEffect, useState } from "react";
import { CommentFormWrapper } from "./styles";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { DEFAULT_ICON_URL, toastErrorMessage, WHITE_COLOR } from "config";
import TextareaAutosize from "react-textarea-autosize";
import { commentCreateAction } from "actions/comment";
import useInput from "@hooks/useInput";
import { useRouter } from "next/router";
import { IMainPost } from "@typings/db";

interface IProps {}

const CommentForm: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const [content, onChangeContent, setContent] = useInput("");
  const [onCommentForm, setOnCommentForm] = useState(false);
  const onClickCommentForm = useCallback(() => {
    setOnCommentForm(true);
  }, []);
  const onClickCommentCancle = useCallback(() => {
    setOnCommentForm(false);
    setContent("");
  }, []);
  const onSubmitComment = useCallback(() => {
    if (content === "" || !content?.trim()) {
      toastErrorMessage("댓글을 입력해주세요.");
      return;
    }
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    let form = {
      content,
      mainPostId: parseInt(query?.mainPostId as string),
    };
    dispatch(commentCreateAction(form));
    setContent("");
  }, [content, query, user]);
  return (
    <CommentFormWrapper>
      <div
        style={
          onCommentForm
            ? { background: WHITE_COLOR, boxShadow: "0px 0px 5px rgba(0,0,0,0.15)" }
            : {}
        }
        className="comment-wrapper"
      >
        <div
          style={onCommentForm ? { marginBottom: ".5rem" } : {}}
          onClick={onClickCommentForm}
          className="comment-input"
        >
          <div className="icon">
            <img src={user ? user.icon : DEFAULT_ICON_URL} alt="" />
          </div>
          <TextareaAutosize
            placeholder={user ? "댓글 작성하기." : "로그인이 필요합니다."}
            disabled={user ? false : true}
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <div className="comment-submit-wrapper">
          <div className={onCommentForm ? "drop-down" : "roll-up"}>
            <button onClick={onSubmitComment}>코멘트</button>
            <button onClick={onClickCommentCancle}>취소</button>
          </div>
        </div>
      </div>
    </CommentFormWrapper>
  );
};

export default CommentForm;
