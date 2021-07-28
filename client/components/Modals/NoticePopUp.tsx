import { FC, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { FLEX_STYLE } from "config";
import tw from "twin.macro";
import styled from "@emotion/styled";

const NoticePopUpWrapper = styled.ul`
  ${tw`absolute top-12 right-0 bg-white shadow-md rounded-xl overflow-hidden w-auto`}
  white-space: nowrap;
  li {
    ${tw`w-auto block cursor-pointer hover:bg-gray-100 py-3 px-8`}
    ${FLEX_STYLE("center", "center")};
    a {
      ${tw`text-sm`}
    }
    h4 {
      ${tw`text-xs mb-1`}
    }
  }
`;
interface IProps {}

const NoticePopUp: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {}, []);
  return (
    <NoticePopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <li>
        <Link href={"#"}>
          <a>
            <h4>연대기 알림</h4>
            <span>이거 뭐에요? 어캐.. 를 작성했습니다.</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href={"#"}>
          <a>
            <h4>연대기 알림</h4>
            <span>이거 뭐에요? 어캐.. 를 작성했습니다.</span>
          </a>
        </Link>
      </li>
    </NoticePopUpWrapper>
  );
};

export default NoticePopUp;
