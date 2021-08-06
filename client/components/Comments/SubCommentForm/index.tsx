import React, { FC, useCallback } from "react";
import { SubCommentFormWrapper } from "./styles";
import useInput from "@hooks/useInput";
import { DEFAULT_ICON_URL, toastErrorMessage, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { memo } from "react";
import axios from "axios";

interface IProps {
  commentId: number;
  revalidateComments: () => void;
}

const SubCommentForm: FC<IProps> = ({ commentId, revalidateComments }) => {
  const [content, onChangeContent, setContent] = useInput("");
  const { user } = useSelector((state: RootState) => state.user);
  const onSubmitSubComment = useCallback(() => {
    if (content === "" || !content?.trim()) {
      toastErrorMessage("내용을 적어주세요");
      return;
    }
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
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
        toastSuccessMessage("답글을 성공적으로 작성했습니다.");
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
        placeholder={user ? "답글 작성하기." : "로그인이 필요합니다."}
        value={content}
        onChange={onChangeContent}
      />
      <button disabled={user ? false : true} onClick={onSubmitSubComment}>
        답장
      </button>
    </SubCommentFormWrapper>
  );
};

export default memo(SubCommentForm);
