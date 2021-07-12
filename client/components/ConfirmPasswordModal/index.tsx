import useInput from "@hooks/useInput";
import { Button } from "antd";
import { toastErrorMessage } from "config";
import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { passwordModalWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { clubPostDeleteAction, clubPostEditConfirmAction } from "actions/club";
import { marketPostDeleteAction } from "actions/market";
import { studyPostDeleteAction } from "actions/study";
interface IProps {
  isDelete: boolean;
  postId: number;
  isMarketPost?: boolean;
  isStudyPost?: boolean;
}

const ConfirmPasswordModal: FC<IProps> = ({ isDelete, postId, isMarketPost, isStudyPost }) => {
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
      if (isMarketPost) {
        console.log("잉");

        dispatch(marketPostDeleteAction(data));
        return;
      }
      if (isStudyPost) {
        console.log("잉2");

        dispatch(studyPostDeleteAction(data));
        return;
      }
      if (isDelete) {
        console.log("요기");

        dispatch(clubPostDeleteAction(data));
      } else {
        console.log("요기2");

        dispatch(clubPostEditConfirmAction(data));
      }
    },
    [postId, user.id, password]
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
