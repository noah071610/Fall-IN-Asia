import React, { FC, useCallback, useState } from "react";
import { SubCommentFormWrapper } from "./styles";
import useInput from "@hooks/useInput";
import { subCommentCreateAction } from "actions/comment";
import TextareaAutosize from "react-textarea-autosize";
import { DEFAULT_ICON_URL, toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";

interface IProps {
  commentId: number;
}

const SubCommentForm: FC<IProps> = ({ commentId }) => {
  const [content, onChangeContent, setContent] = useInput("");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const onSubmitSubComment = useCallback(() => {
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
      commentId,
    };
    dispatch(subCommentCreateAction(form));
    setContent("");
  }, [commentId, content]);
  return (
    <SubCommentFormWrapper>
      <div className="icon">
        {user ? (
          <img src={user.icon} alt="user_icon" />
        ) : (
          <img src={DEFAULT_ICON_URL} alt="user_icon" />
        )}
      </div>
      <div className="subComment-input">
        <input
          className="basic-input"
          placeholder={user ? "コメント作成" : "ログインしてコメント作成"}
          value={content}
          onChange={onChangeContent}
        />
        <div>
          <button onClick={onSubmitSubComment} className="basic-btn">
            コメント
          </button>
        </div>
      </div>
    </SubCommentFormWrapper>
  );
};

export default SubCommentForm;
