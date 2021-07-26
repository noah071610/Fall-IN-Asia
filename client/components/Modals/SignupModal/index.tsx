import React, { FC, useCallback, useEffect, useState } from "react";
import { SignupModalWrapper } from "./styles";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "slices/main";
import { RootState } from "slices";
import { userSlice } from "slices/user";
import { toastSuccessMessage } from "config";
import Checkbox from "antd/lib/checkbox/Checkbox";
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
  const [form] = Form.useForm();
  const { signupDone } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (signupDone) {
      toastSuccessMessage(`회원가입을 완료했어요! 로그인해주세요.`);
      setOnSignUp(false);
    }
  }, [signupDone]);

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
            {
              min: 9,
              message: "비밀번호는 9자 이상이어야 합니다.",
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
                value ? Promise.resolve() : Promise.reject(new Error("약관에 동의해주세요.")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            백패커스의 이용약관, 개인정보취급방침 에 동의합니다. <a className="term">약관보기</a>
          </Checkbox>
        </Form.Item>
        <div className="btn-wrapper">
          <button onSubmit={onFinishSignUp}>회원가입</button>
          <button onClick={onClickSignUpToggle}>뒤로가기</button>
        </div>
      </Form>
    </SignupModalWrapper>
  );
};

export default SignupModal;
