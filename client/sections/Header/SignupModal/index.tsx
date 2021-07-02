import React, { FC, useCallback, useEffect, useState } from "react";
import { SignupModalWrapper } from "./styles";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { signupAction } from "actions/user";
import { IForm } from "@typings/db";
import { RootState } from "slices";
import { userSlice } from "slices/user";
import { toastSuccessMessage } from "config";
interface IProps {}

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const SignupModal: FC<IProps> = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { signupDone } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (signupDone) {
      toastSuccessMessage(`新規登録しました。ログインしてください。`);
      dispatch(mainSlice.actions.toggleSignupModal());
      dispatch(mainSlice.actions.toggleLoginModal());
      dispatch(userSlice.actions.signupClear());
    }
  }, [signupDone]);

  const onFinish = useCallback((values: any) => {
    let form: IForm = {
      email: values.email,
      name: values.first_name + values.last_name,
      password: values.password,
    };
    dispatch(signupAction(form));
  }, []);

  const onClickGoback = useCallback(() => {
    dispatch(mainSlice.actions.toggleSignupModal());
    dispatch(mainSlice.actions.toggleLoginModal());
  }, []);

  return (
    <SignupModalWrapper>
      <div className="login-title">
        <div>
          <h2>新規登録</h2>
          <h4>色んなサービスを利用しよう</h4>
        </div>
        <img src="https://img.icons8.com/color-glass/96/000000/sign-up.png" />
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="メールアドレス"
          rules={[
            {
              type: "email",
              message: "メールアドレスが正しくありません。",
            },
            {
              required: true,
              message: "メールアドレスを書いてください",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="form-name">
          <Form.Item
            name="first_name"
            label="姓"
            rules={[{ required: true, message: "姓を書いてください。", whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="名"
            rules={[{ required: true, message: "名前を書いてください。", whitespace: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item
          name="password"
          label="パスワード"
          rules={[
            {
              required: true,
              message: "パスワードを書いてください",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="パスワード確認"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "パスワードを確認してください。",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("パスワードが違います。"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="submit-btn">
          <Button onClick={onClickGoback}>戻る</Button>
          <Button type="primary" htmlType="submit">
            登録
          </Button>
        </div>
      </Form>
    </SignupModalWrapper>
  );
};

export default SignupModal;
