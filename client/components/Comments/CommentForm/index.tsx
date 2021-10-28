import React, { FC, useCallback, useState } from "react";
import { CommentFormWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { DEFAULT_ICON_URL, toastErrorMessage, toastSuccessMessage, WHITE_COLOR } from "config";
import TextareaAutosize from "react-textarea-autosize";
import useInput from "@hooks/useInput";
import { useRouter } from "next/router";
import { memo } from "react";
import { mainSlice } from "slices/main";
import axios from "axios";
import { IComment } from "@typings/db";
import { useTranslation } from "react-i18next";

interface IProps {
  isStory: boolean;
  revalidateComments: () => Promise<IComment[] | undefined>;
}

const CommentForm: FC<IProps> = ({ isStory, revalidateComments }) => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const [content, onChangeContent, setContent] = useInput("");
  const [onCommentForm, setOnCommentForm] = useState(false);

  const onSubmitComment = useCallback(() => {
    if (content === "" || !content?.trim()) {
      toastErrorMessage(t("message.comment.fail"));
      return;
    }
    if (!user) {
      toastErrorMessage(t("message.needToLogin"));
      return;
    }
    let form: { [key: string]: any; content: string } = {
      content,
    };
    if (isStory) {
      form["storyId"] = parseInt(query?.storyId as string);
    } else {
      form["momentId"] = parseInt(query?.momentId as string);
    }
    axios
      .post("/comment", form, { withCredentials: true })
      .then(() => {
        revalidateComments();
        toastSuccessMessage(t("message.comment.done"));
        setContent("");
      })
      .catch((error) => {
        toastSuccessMessage(error);
        throw error;
      });
  }, [content, query, user, isStory]);

  const onClickCommentCancle = useCallback(() => {
    setOnCommentForm(false);
    setContent("");
  }, []);

  const onClickCommentForm = useCallback(() => {
    if (!user) {
      toastErrorMessage(t("message.needToLogin"));
      dispatch(mainSlice.actions.toggleLoginModal());
      return;
    }
    setOnCommentForm(true);
  }, [user]);
  return (
    <CommentFormWrapper>
      <div
        style={
          onCommentForm
            ? { background: WHITE_COLOR, boxShadow: "0px 0px 5px rgba(0,0,0,0.15)" }
            : {}
        }
        className="comment-form-main"
      >
        <div
          style={onCommentForm ? { marginBottom: ".5rem" } : {}}
          onClick={onClickCommentForm}
          className="comment-input"
        >
          <div className="icon">
            <img src={user ? user.icon : DEFAULT_ICON_URL} alt="user-icon" />
          </div>
          <TextareaAutosize
            placeholder={user ? t("post.commentPlaceHolder") : t("message.needToLogin")}
            disabled={user ? false : true}
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <div className="comment-submit-wrapper">
          <div className={onCommentForm ? "drop-down" : "roll-up"}>
            <button onClick={onSubmitComment}>{t("post.uploadComment")}</button>
            <button onClick={onClickCommentCancle}>{t("post.cancel")}</button>
          </div>
        </div>
      </div>
    </CommentFormWrapper>
  );
};

export default memo(CommentForm);
