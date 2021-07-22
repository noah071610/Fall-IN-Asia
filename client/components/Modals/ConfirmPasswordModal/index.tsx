import useInput from "@hooks/useInput";
import { Button } from "antd";
import { toastErrorMessage } from "config";
import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { passwordModalWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { marketPostDeleteAction } from "actions/market";
import { studyPostDeleteAction } from "actions/study";
import { commentDeleteAction, subCommentDeleteAction } from "actions/comment";
import { mainPostDeleteAction } from "actions/mainPost";
interface IProps {
  isDelete: boolean;
  postId: number;
  isMarketPost?: boolean;
  isStudyPost?: boolean;
  commentId?: number;
  subCommentId?: number;
}

const ConfirmPasswordModal: FC<IProps> = ({
  isDelete,
  postId,
  isMarketPost,
  isStudyPost,
  commentId,
  subCommentId,
}) => {
  const [password, onChangePassword, setPassword] = useInput("");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  const onSubmitPassword = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!user) {
        toastErrorMessage("ユーザーエラーが発生しました。");
        return;
      }
      if (!password) {
        toastErrorMessage("パスワードを書いてください。");
        return;
      }
      let data = {
        postId,
        password,
        userId: user.id,
      };
      if (commentId) {
        let commentData = { password: data.password, commentId };
        dispatch(commentDeleteAction(commentData));
        return;
      }
      if (subCommentId) {
        let commentData = { password: data.password, subCommentId };
        dispatch(subCommentDeleteAction(commentData));
        return;
      }
      if (isMarketPost) {
        dispatch(marketPostDeleteAction(data));
        return;
      }
      if (isStudyPost) {
        dispatch(studyPostDeleteAction(data));
        return;
      }
      if (isDelete) {
        dispatch(mainPostDeleteAction(data));
      } else {
        dispatch(mainPostEditConfirmAction(data));
      }
    },
    [postId, user.id, password, commentId]
  );
  return (
    <div className="password-modal" onClick={stopPropagation} css={passwordModalWrapper(isDelete)}>
      <h4>
        <span className="point">パスワード</span>を入力してください。
      </h4>
      <form onSubmit={(e) => onSubmitPassword(e)}>
        <input
          value={password}
          onChange={onChangePassword}
          className="basic-input"
          type="password"
        />
        <Button htmlType="submit" type="primary">
          確認
        </Button>
      </form>
    </div>
  );
};

export default ConfirmPasswordModal;