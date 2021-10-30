import React, { FC, useCallback, useEffect, useState } from "react";
import { LoginModalWrapper } from "./styles";
import { Divider } from "antd";
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
import { useTranslation } from "react-i18next";

interface IProps {}

const LoginModal: FC<IProps> = () => {
  const { t } = useTranslation("common");
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
      toastErrorMessage(t("message.error.noEmail"));
      return;
    }
    if (!values.authNum || !values.authNum?.trim()) {
      toastErrorMessage(t("message.error.noCertification"));
      return;
    }
    if (!values.password || !values.password?.trim()) {
      toastErrorMessage(t("message.error.noPassword"));
      return;
    }
    let name = values?.first_name + values?.last_name;
    if (!name || !name?.trim()) {
      toastErrorMessage(t("message.error.noName"));
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
      if (!email || !email?.trim()) {
        toastErrorMessage(t("message.error.noEmail"));
        return;
      }
      if (!password || !password?.trim()) {
        toastErrorMessage(t("message.error.noPassword"));
        return;
      }
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
      toastSuccessMessage(`${user.name}${t("modal.login.sayhi")}`);
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
              <span>{t("modal.login.email")}</span>
            </h4>
            <input className="basic-input" value={email} onChange={onChangeEmail} type="email" />
            <h4>
              <FontAwesomeIcon className="login-icon" icon={faKey} />
              <span>{t("modal.login.password")}</span>
            </h4>
            <input
              className="basic-input"
              value={password}
              onChange={onChangePassword}
              type="password"
            />
            <div className="btn-wrapper">
              <button className="btn-point" onSubmit={onSubmitLogin}>
                {t("nav.login")}
              </button>
              <button onClick={onClickSignUpToggle}>{t("modal.login.signup")}</button>
            </div>
          </form>
        )}
        {!onSignUp && (
          <>
            <Divider className="social-login-divider" orientation="center">
              {t("modal.login.socialLogin")}
            </Divider>
            <ul className="social-login-wrapper">
              <li className="google-icon">
                <a
                  href={
                    process.env.NODE_ENV === "development"
                      ? "http://localhost:3060/api/auth/google"
                      : process.env.NEXT_PUBLIC_BASE_URL + "/auth/google"
                  }
                >
                  <img src="https://img.icons8.com/color/32/000000/google-logo.png" />
                </a>
              </li>
              <li style={{ background: "#FAE301" }}>
                <a
                  href={
                    process.env.NODE_ENV === "development"
                      ? "http://localhost:3060/api/auth/kakao"
                      : process.env.NEXT_PUBLIC_BASE_URL + "/auth/kakao"
                  }
                >
                  <img src="https://user-images.githubusercontent.com/74864925/130333394-3e9f757f-f057-470b-ab4f-92afec6d8a5f.png" />
                </a>
              </li>
              <li style={{ background: "#54BA5C" }}>
                <a
                  href={
                    process.env.NODE_ENV === "development"
                      ? "http://localhost:3060/api/auth/naver"
                      : process.env.NEXT_PUBLIC_BASE_URL + "/auth/naver"
                  }
                >
                  <img src="https://user-images.githubusercontent.com/74864925/130333396-c579626d-cc3f-414a-a32f-7e65f030f63c.png" />
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
