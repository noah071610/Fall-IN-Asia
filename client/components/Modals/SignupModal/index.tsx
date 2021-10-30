import React, { FC, useCallback, useEffect, useState } from "react";
import { SignupModalWrapper } from "./styles";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { toastErrorMessage, toastSuccessMessage } from "config";
import Checkbox from "antd/lib/checkbox/Checkbox";
import router from "next/router";
import useInput from "@hooks/useInput";
import axios from "axios";
import { useTranslation } from "react-i18next";
interface IProps {
  onFinishSignUp: (values: any) => void;
  onClickSignUpToggle: (e: any) => void;
  setOnSignUp: (value: boolean) => void;
}

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
  },
};

const SignupModal: FC<IProps> = ({ onFinishSignUp, onClickSignUpToggle, setOnSignUp }) => {
  const { t } = useTranslation("common");
  const [form] = Form.useForm();
  const { signupDone } = useSelector((state: RootState) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [onEmailCheckForm, setOnEmailCheckForm] = useState(false);

  useEffect(() => {
    if (signupDone) {
      toastSuccessMessage(t("modal.login.signupDone"));
      setOnSignUp(false);
    }
  }, [signupDone]);

  const onClickSendEmailAuth = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !email?.trim()) {
        toastErrorMessage(t("message.error.noEmail"));
        return;
      }
      if (!email.match(/[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/)) {
        toastErrorMessage(t("message.error.wrongEmail"));
        return;
      }
      axios
        .post("/auth/email", { email })
        .then(() => {
          setOnEmailCheckForm(true);
          toastSuccessMessage(`${email}${t("modal.login.sendCertification")}`);
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    },
    [email]
  );

  return (
    <SignupModalWrapper>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinishSignUp}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <div className="email-wrapper">
          <Form.Item
            name="email"
            label={t("modal.login.email")}
            rules={[
              {
                type: "email",
                message: t("message.error.notEnoughEmail"),
              },
              {
                required: true,
                message: t("message.error.noEmail"),
              },
            ]}
          >
            <input onChange={onChangeEmail} value={email} type="email" />
          </Form.Item>
          <Form.Item label={t("modal.login.certification")}>
            <button onClick={onClickSendEmailAuth}>
              <span>{t("modal.login.send")}</span>
            </button>
          </Form.Item>
        </div>
        {onEmailCheckForm && (
          <Form.Item
            className="email-check-wrapper"
            name="authNum"
            label={t("modal.login.certification")}
            rules={[
              {
                required: true,
                message: t("message.error.needCertification"),
              },
            ]}
          >
            <input type="number" />
          </Form.Item>
        )}
        <div className="form-name">
          <Form.Item
            name="first_name"
            label={t("modal.login.firstName")}
            rules={[{ required: true, message: t("message.error.noFirstName"), whitespace: true }]}
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            name="last_name"
            label={t("modal.login.lastName")}
            rules={[{ required: true, message: t("message.error.noLastName"), whitespace: true }]}
          >
            <input type="text" />
          </Form.Item>
        </div>
        <Form.Item
          name="password"
          label={t("modal.login.password")}
          rules={[
            {
              required: true,
              message: t("message.error.noPassword"),
            },
            {
              min: 9,
              message: t("message.error.notEnoughPassword"),
            },
          ]}
          hasFeedback
        >
          <input type="password" />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          style={{ marginTop: "1rem" }}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error(t("message.error.needCertification"))),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            {t("modal.login.terms")}
            <a onClick={() => router.push("/about#policy")} className="term">
              {" " + t("modal.login.termsMore")}
            </a>
          </Checkbox>
        </Form.Item>
        <div className="btn-wrapper">
          <button className="btn-point" onSubmit={onFinishSignUp}>
            {t("modal.login.signup")}
          </button>
          <button onClick={onClickSignUpToggle}>{t("main.back")}</button>
        </div>
      </Form>
    </SignupModalWrapper>
  );
};

export default SignupModal;
