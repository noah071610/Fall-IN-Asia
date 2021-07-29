import { FC, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { BORDER_THIN, FLEX_STYLE } from "config";
import tw from "twin.macro";
import styled from "@emotion/styled";
import ListCard from "@components/Cards/ListCard";
import { INotice } from "@typings/db";
import router from "next/router";

const NoticePopUpWrapper = styled.ul`
  ${tw`absolute top-12 right-0 bg-white shadow-md rounded-xl overflow-hidden w-80 z-20`}
  h2 {
    ${tw`p-4 text-sm font-bold`}
  }
  .list-card-wrapper {
    ${tw`border-none hover:bg-gray-100 rounded-none px-4 m-0`}
  }
  .no-notices {
    ${tw`pt-4 pb-8 px-16`}
    p {
      ${tw`text-xs leading-5`}
    }
  }
  .more-notices {
    ${tw`p-4 text-sm font-bold flex justify-center cursor-pointer hover:bg-gray-100`}
  }
`;
interface IProps {}

const NoticePopUp: FC<IProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <NoticePopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2>{user?.notices?.length > 0 ? "알림" : "알림이 없습니다."}</h2>
      {user?.notices?.length > 0 ? (
        <>
          {user?.notices.map((v: INotice, i: number) => (
            <ListCard key={i} title={v.header + " 알림"} content={v.content} />
          ))}
          <div onClick={() => router.push(`/me/${user?.id}`)} className="more-notices">
            <span>더보기</span>
          </div>
        </>
      ) : (
        <div className="no-notices">
          <p>유저님이 게시글,연대기,코멘트 작성 및 수정등 활동을 하면 저희가 알려줄게요!</p>
        </div>
      )}
    </NoticePopUpWrapper>
  );
};

export default NoticePopUp;
