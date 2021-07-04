import useInput from "@hooks/useInput";
import { Button } from "antd";
import { toastErrorMessage } from "config";
import React, { FC, FormEvent, useCallback, useEffect, useState } from "react";
import { passwordModalWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { clubPostDeleteAction, clubPostEditAction } from "actions/club";
interface IProps {
  isDelete: boolean;
  postId: number;
}

const ConfirmPasswordModal: FC<IProps> = ({ isDelete, postId }) => {
  const [password, onChangePassword, setPassword] = useInput("");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
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
      if (isDelete) {
        dispatch(clubPostDeleteAction(data));
      } else {
        dispatch(clubPostEditAction(data));
      }
    },
    [user.id, password]
  );
  return (
    <div css={passwordModalWrapper(isDelete)}>
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
