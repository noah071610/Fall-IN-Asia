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
import { FALL_IN_ASIA_LOGO, toastErrorMessage, toastSuccessMessage } from "config";
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
    if (!values.authNum || !values.authNum?.trim()) {
      toastErrorMessage("이메일 인증번호가 필요합니다.");
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
      authNum: values.authNum,
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
          <img src={FALL_IN_ASIA_LOGO} alt="logo-image" />
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
              <FontAwesomeIcon className="login-icon" icon={faUser} />
              <span>이메일</span>
            </h4>
            <input className="basic-input" value={email} onChange={onChangeEmail} type="email" />
            <h4>
              <FontAwesomeIcon className="login-icon" icon={faKey} />
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
                <a href="http://localhost:3060/api/auth/google">
                  <img src="https://img.icons8.com/color/144/000000/google-logo.png" />
                </a>
              </li>
              <li style={{ background: "#FAE301" }}>
                <a href="http://localhost:3060/api/auth/kakao">
                  <img src="https://user-images.githubusercontent.com/74864925/127008226-4ea6ec83-e82d-4e7f-bc9a-95b508f750cc.png" />
                </a>
              </li>
              <li style={{ background: "#54BA5C" }}>
                <a href="http://localhost:3060/api/auth/naver">
                  <img src="https://user-images.githubusercontent.com/74864925/127008231-213a4559-d3e8-488d-9901-0fe3f78b58c1.png" />
                </a>
              </li>
            </ul>
          </>
        )}
      </LoginModalWrapper>
    </>
  );
};

export default LoginModal;
