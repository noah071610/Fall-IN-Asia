import React, { FC, useCallback, useEffect, useState } from "react";
import { ModalWrapper, LoginBtn } from "./styles";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import useInput from "@hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { logInAction } from "actions/user";
import { RootState } from "slices";
import { userSlice } from "slices/user";
import { toastSuccessMessage } from "config";

interface IProps {}

const LoginModal: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { logInDone, user } = useSelector((state: RootState) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmitLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        logInAction({
          email,
          password,
        })
      );
    },
    [email, password]
  );
  const onClickSignUp = useCallback((e) => {
    e.preventDefault();
    dispatch(mainSlice.actions.toggleSignupModal());
    dispatch(mainSlice.actions.toggleLoginModal());
  }, []);

  useEffect(() => {
    if (logInDone && user) {
      toastSuccessMessage(`ようこそ ${user.name} 様`);
      dispatch(mainSlice.actions.toggleLoginModal());
      dispatch(userSlice.actions.logInClear());
    }
  }, [logInDone, user]);

  return (
    <ModalWrapper>
      <div className="login-title">
        <div>
          <h2>ログイン</h2>
          <h4>色んなサービスを利用しよう</h4>
        </div>
        <img src="https://image.flaticon.com/icons/png/128/921/921347.png" />
      </div>
      <form onSubmit={onSubmitLogin}>
        <h4>
          <FontAwesomeIcon icon={faUser} />
          <span>メールアドレス</span>
        </h4>
        <input value={email} onChange={onChangeEmail} className="basic-input" type="email" />
        <h4>
          <FontAwesomeIcon icon={faKey} />
          <span>パスワード</span>
        </h4>
        <input
          value={password}
          onChange={onChangePassword}
          className="basic-input"
          type="password"
        />
        <LoginBtn>
          <Button htmlType="submit" type="primary">
            ログイン
          </Button>
          <Button onClick={onClickSignUp}>新規登録</Button>
        </LoginBtn>
      </form>
    </ModalWrapper>
  );
};

export default LoginModal;
