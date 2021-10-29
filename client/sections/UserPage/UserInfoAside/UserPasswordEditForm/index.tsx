import React, { FC, memo } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  prevPassword: string;
  newPassword: string;
  onChangePrevPassword: () => void;
  onChangeNewPassword: () => void;
}

const UserPasswordEditForm: FC<IProps> = (props) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <h4 className="edit-title">
        {t("profile.previous")}
        {t("profile.password")}
      </h4>
      <input
        className="edit-input"
        value={props.prevPassword}
        onChange={props.onChangePrevPassword}
        type="password"
      />
      <h4 className="edit-title">
        {t("profile.new")}
        {t("profile.password")}
      </h4>
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
