import { FC, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { logoutAction } from "actions/user";
import { mainSlice } from "slices/main";

const ProfilePopUpWrapper = styled.ul`
  ${tw`absolute top-10 right-0 bg-white shadow-md rounded-xl overflow-hidden w-auto`}
  z-index:80;
  white-space: nowrap;
  li {
    ${tw`w-auto block cursor-pointer hover:bg-gray-100 py-3 px-8 text-sm font-bold`}
    ${FLEX_STYLE("center", "center")};
  }
`;
interface IProps {}

const ProfilePopUp: FC<IProps> = () => {
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
          <li>내 프로필</li>
        </a>
      </Link>
      <Link href={`/story/post`}>
        <a>
          <li>새 연대기 작성</li>
        </a>
      </Link>
      <li
        onClick={() => {
          dispatch(mainSlice.actions.toggleProfilePopUp());
          dispatch(mainSlice.actions.toggleNoticePopUp());
        }}
      >
        알림
      </li>
      <li onClick={() => dispatch(logoutAction())}>로그아웃</li>
    </ProfilePopUpWrapper>
  );
};

export default ProfilePopUp;
