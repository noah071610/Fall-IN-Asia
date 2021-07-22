import React, { FC, useCallback, useEffect, useState } from "react";
import { LoginModalWrapper } from "./styles";
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
      toastSuccessMessage(`${user.name}님! 어서오세요.`);
      dispatch(mainSlice.actions.toggleLoginModal());
      dispatch(userSlice.actions.logInClear());
    }
  }, [logInDone, user]);

  return (
    <>
      <LoginModalWrapper>
        <div className="image-wrapper">
          <img
            src="https://mblogthumb-phinf.pstatic.net/20160607_89/bany87_1465308357582hemN3_PNG/%BD%BA%C5%A9%B8%B0%BC%A6_2016-06-07_%BF%C0%C8%C4_10.56.58.png?type=w2"
            alt="logo-image"
          />
        </div>
        <form onSubmit={onSubmitLogin}>
          <h4>
            <FontAwesomeIcon className="icon" icon={faUser} />
            <span>이메일</span>
          </h4>
          <input className="basic-input" value={email} onChange={onChangeEmail} type="email" />
          <h4>
            <FontAwesomeIcon className="icon" icon={faKey} />
            <span>패스워드</span>
          </h4>
          <input
            className="basic-input"
            value={password}
            onChange={onChangePassword}
            type="password"
          />
          <div className="btn-wrapper">
            <button onSubmit={onSubmitLogin}>로그인</button>
            <button onClick={onClickSignUp}>간편회원가입</button>
          </div>
        </form>
        <h2></h2>
      </LoginModalWrapper>
    </>
  );
};

export default LoginModal;
