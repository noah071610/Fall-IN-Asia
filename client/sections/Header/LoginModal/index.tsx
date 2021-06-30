import React, { FC, useState } from "react";
import { ModalWrapper, MenuTail, LoginBtn } from "./styles";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

interface IProps {}

const LoginModal: FC<IProps> = () => {
  const [state, setstate] = useState();
  return (
    <ModalWrapper>
      <MenuTail />
      <div className="login-title">
        <div>
          <h2>ログイン</h2>
          <h4>色んなサービスを利用しよう</h4>
        </div>
        <img src="https://image.flaticon.com/icons/png/128/921/921347.png" />
      </div>
      <Divider />
      <form>
        <h4>
          <FontAwesomeIcon icon={faUser} />
          <span>メールアドレス</span>
        </h4>
        <input className="basic-input" type="email" />
        <h4>
          <FontAwesomeIcon icon={faKey} />
          <span>パスワード</span>
        </h4>
        <input className="basic-input" type="password" />
        <LoginBtn>
          <button>ログイン</button>
          <button>新規登録</button>
        </LoginBtn>
      </form>
    </ModalWrapper>
  );
};

export default LoginModal;
