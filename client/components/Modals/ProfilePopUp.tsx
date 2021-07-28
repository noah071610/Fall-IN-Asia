import { FC, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";
import styled from "@emotion/styled";

const ProfilePopUpWrapper = styled.ul`
  ${tw`absolute top-14 right-0 bg-white shadow-md rounded-xl overflow-hidden w-auto`}
  white-space: nowrap;
  li {
    ${tw`w-auto block cursor-pointer hover:bg-gray-100 py-3 px-8`}
    ${FLEX_STYLE("center", "center")};
    a {
      ${tw`text-sm`}
    }
  }
`;
interface IProps {}

const ProfilePopUp: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <ProfilePopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <li>
        <Link href={`/me/${user?.id}`}>
          <a>내 프로필</a>
        </Link>
      </li>
      <li>
        <Link href="/vote">
          <a>알림</a>
        </Link>
      </li>
      <li>
        <Link href="/news">
          <a>로그아웃</a>
        </Link>
      </li>
    </ProfilePopUpWrapper>
  );
};

export default ProfilePopUp;
