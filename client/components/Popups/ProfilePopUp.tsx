import { FC, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { logoutAction } from "actions/user";
import { mainSlice } from "slices/main";
import { useTranslation } from "react-i18next";

const ProfilePopUpWrapper = styled.ul`
  ${tw`absolute right-0 bg-white shadow-md rounded-xl overflow-hidden w-auto`}
  top:120%;
  z-index: 80;
  white-space: nowrap;
  li {
    ${tw`w-auto block cursor-pointer hover:bg-gray-100 py-3 px-8 text-sm font-bold`}
    ${FLEX_STYLE("center", "center")};
  }
`;
interface IProps {}

const ProfilePopUp: FC<IProps> = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <ProfilePopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Link href={`/me/${user?.id}`}>
        <a>
          <li>{t("popup.profile")}</li>
        </a>
      </Link>
      <Link href={`/story/post`}>
        <a>
          <li>{t("popup.newStory")}</li>
        </a>
      </Link>
      <li
        onClick={() => {
          dispatch(mainSlice.actions.toggleProfilePopUp());
          dispatch(mainSlice.actions.toggleNoticePopUp());
        }}
      >
        {t("popup.notice")}
      </li>
      <li onClick={() => dispatch(logoutAction())}>{t("popup.logout")}</li>
    </ProfilePopUpWrapper>
  );
};

export default ProfilePopUp;
