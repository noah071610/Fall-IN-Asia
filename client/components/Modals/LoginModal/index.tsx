import React, { FC, useCallback, useEffect, useState } from "react";
import { LoginModalWrapper } from "./styles";
import { Button, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import useInput from "@hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { logInAction, signupAction } from "actions/user";
import { RootState } from "slices";
import { userSlice } from "slices/user";
import { toastErrorMessage, toastSuccessMessage } from "config";
import SignupModal from "../SignupModal";
import { IUserRequestForm } from "@typings/db";

interface IProps {}

const LoginModal: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { logInDone, user } = useSelector((state: RootState) => state.user);
  const [onSignUp, setOnSignUp] = useState(false);
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  const onClickSignUpToggle = useCallback((e) => {
    e.preventDefault();
    setOnSignUp((prev) => !prev);
  }, []);

  const onFinishSignUp = useCallback((values: any) => {
    if (!values.email || !values.email?.trim()) {
      toastErrorMessage("이메일을 입력해주세요.");
      return;
    }
    if (!values.password || !values.password?.trim()) {
      toastErrorMessage("비밀번호를 입력해주세요.");
      return;
    }
    let name = values?.first_name + values?.last_name;
    if (!name || !name?.trim()) {
      toastErrorMessage("이름을 입력해주세요.");
      return;
    }
    let form: IUserRequestForm = {
      email: values.email,
      name,
      password: values.password,
    };
    dispatch(signupAction(form));
  }, []);

  const onSubmitLogin = useCallback(
    (e) => {
      e.preventDefault();
      let form: IUserRequestForm = {
        email,
        password,
      };
      dispatch(logInAction(form));
    },
    [email, password]
  );
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
        {onSignUp ? (
          <SignupModal
            onClickSignUpToggle={onClickSignUpToggle}
            onFinishSignUp={onFinishSignUp}
            setOnSignUp={setOnSignUp}
          />
        ) : (
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
              <button className="btn-point" onSubmit={onSubmitLogin}>
                로그인
              </button>
              <button onClick={onClickSignUpToggle}>간편회원가입</button>
            </div>
          </form>
        )}
        {!onSignUp && (
          <>
            <Divider className="social-login-divider" orientation="center">
              소셜 로그인
            </Divider>
            <ul className="social-login-wrapper">
              <li className="google-icon">
                <img src="https://img.icons8.com/color/144/000000/google-logo.png" />
              </li>
              <li style={{ background: "#FAE301" }}>
                <img src="https://user-images.githubusercontent.com/74864925/127008226-4ea6ec83-e82d-4e7f-bc9a-95b508f750cc.png" />
              </li>
              <li style={{ background: "#54BA5C" }}>
                <img src="https://user-images.githubusercontent.com/74864925/127008231-213a4559-d3e8-488d-9901-0fe3f78b58c1.png" />
              </li>
            </ul>
          </>
        )}
      </LoginModalWrapper>
    </>
  );
};

export default LoginModal;
