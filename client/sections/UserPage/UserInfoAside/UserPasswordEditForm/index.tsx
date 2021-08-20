import React, { FC, memo } from "react";

interface IProps {
  prevPassword: string;
  newPassword: string;
  onChangePrevPassword: () => void;
  onChangeNewPassword: () => void;
}

const UserPasswordEditForm: FC<IProps> = (props) => {
  return (
    <div>
      <h4 className="edit-title">이전 비밀번호</h4>
      <input
        className="edit-input"
        value={props.prevPassword}
        onChange={props.onChangePrevPassword}
        type="password"
      />
      <h4 className="edit-title">새로운 비밀번호</h4>
      <input
        className="edit-input"
        value={props.newPassword}
        onChange={props.onChangeNewPassword}
        type="password"
      />
    </div>
  );
};

export default memo(UserPasswordEditForm);
