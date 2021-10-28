import React, { FC, useCallback } from "react";
import { SubCommentFormWrapper } from "./styles";
import useInput from "@hooks/useInput";
import { DEFAULT_ICON_URL, toastErrorMessage, toastSuccessMessage } from "config";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import { memo } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface IProps {
  commentId: number;
  revalidateComments: () => void;
}

const SubCommentForm: FC<IProps> = ({ commentId, revalidateComments }) => {
  const { t } = useTranslation("common");
  const [content, onChangeContent, setContent] = useInput("");
  const { user } = useSelector((state: RootState) => state.user);
  const onSubmitSubComment = useCallback(() => {
    if (content === "" || !content?.trim()) {
      toastErrorMessage(t("post.writeContentPlaceHolder"));
      return;
    }
    if (!user) {
      toastErrorMessage(t("message.needToLogin"));
      return;
    }
    let form = {
      content,
      commentId,
    };
    axios
      .post("/comment/subComment", form)
      .then(() => {
        revalidateComments();
        toastSuccessMessage(t("message.reply.done"));
        setContent("");
      })
      .catch((error) => {
        toastSuccessMessage(error);
        throw error;
      });
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
      <input
        placeholder={user ? t("post.replyPlaceHolder") : t("message.needToLogin")}
        value={content}
        onChange={onChangeContent}
      />
      <button disabled={user ? false : true} onClick={onSubmitSubComment}>
        {t("post.uploadReply")}
      </button>
    </SubCommentFormWrapper>
  );
};

export default memo(SubCommentForm);
