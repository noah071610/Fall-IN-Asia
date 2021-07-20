import React, { FC, useCallback, useEffect, useState } from "react";
import { SignupModalWrapper } from "./styles";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { signupAction } from "actions/user";
import { ISignUpForm } from "@typings/db";
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
      toastSuccessMessage(`회원가입을 완료했어요! 로그인해주세요.`);
      dispatch(mainSlice.actions.toggleSignupModal());
      dispatch(mainSlice.actions.toggleLoginModal());
      dispatch(userSlice.actions.signupClear());
    }
  }, [signupDone]);

  const onFinish = useCallback((values: any) => {
    let form: ISignUpForm = {
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
          <h2>간편회원가입</h2>
          <h4>나그네님! 백패커스에 어서오세요!</h4>
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
          label="이메일"
          rules={[
            {
              type: "email",
              message: "이메일을 정확히 적어주세요.",
            },
            {
              required: true,
              message: "이메일을 작성해주세요.",
            },
          ]}
        >
          <input type="email" />
        </Form.Item>
        <div className="form-name">
          <Form.Item
            name="first_name"
            label="성"
            rules={[{ required: true, message: "성을 적어주세요.", whitespace: true }]}
          >
            <input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="이름"
            rules={[{ required: true, message: "이름을 적어주세요.", whitespace: true }]}
          >
            <input />
          </Form.Item>
        </div>
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: "비밀번호를 작성해주세요.",
            },
          ]}
          hasFeedback
        >
          <input type="password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호를 확인해주세요.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("비밀번호가 서로 다릅니다."));
              },
            }),
          ]}
        >
          <input type="password" />
        </Form.Item>
        <div className="btn-wrapper">
          <button onClick={onClickGoback}>뒤로가기</button>
          <button onSubmit={onFinish}>회원가입</button>
        </div>
      </Form>
    </SignupModalWrapper>
  );
};

export default SignupModal;
