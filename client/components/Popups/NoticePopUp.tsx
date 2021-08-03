import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import tw from "twin.macro";
import styled from "@emotion/styled";
import ListCard from "@components/Cards/ListCard";
import { INotice } from "@typings/db";
import router from "next/router";
import { DeleteOutlined } from "@ant-design/icons";
import { mainSlice } from "slices/main";
import { deleteNoticeAction } from "actions/main";
import { getUserInfoAction } from "actions/user";

const NoticePopUpWrapper = styled.ul`
  ${tw`absolute top-10 right-0 bg-white shadow-md rounded-xl overflow-hidden w-80`}
  z-index:80;
  h2 {
    ${tw`pt-4 px-4 pb-2 text-sm font-bold`}
  }
  .notices-wrapper {
    ${tw`divide-y divide-solid divide-gray-100`}
  }
  .notice-card-wrapper {
    ${tw`relative`}
    .anticon {
      display: none;
      ${tw`absolute right-4 text-gray-300`}
      top:50%;
      transform: translateY(-50%);
      &:hover {
        ${tw`text-gray-500`}
      }
    }
    &:hover {
      .list-card-wrapper {
        ${tw`bg-gray-100`}
        box-shadow: none;
      }
      .anticon {
        display: block;
      }
    }
  }
  .list-card-wrapper {
    ${tw`border-none rounded-none px-4 py-2 m-0 `}
    box-shadow: none;
    .list-card-desc {
      h4 {
        ${tw`mb-1 text-xs`}
      }
    }
  }
  .no-notices {
    ${tw`pt-4 pb-8 px-4`}
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

  const { deleteNoticeDone } = useSelector((state: RootState) => state.main);

  const onClickDeleteNotice = useCallback((noticeId: number) => {
    dispatch(deleteNoticeAction(noticeId));
  }, []);
  const onClickListCard = () => {
    return;
  };
  useEffect(() => {
    if (deleteNoticeDone) {
      dispatch(getUserInfoAction());
      dispatch(mainSlice.actions.deleteNoticeClear());
    }
  }, [deleteNoticeDone]);

  return (
    <NoticePopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2>{user?.notices?.length > 0 ? "알림" : "알림이 없습니다."}</h2>
      {user?.notices?.length > 0 ? (
        <>
          <div className="notices-wrapper">
            {user?.notices.slice(0, 5).map((v: INotice, i: number) => (
              <div className="notice-card-wrapper" key={i}>
                <ListCard
                  onClickListCard={onClickListCard}
                  title={v.header + " 알림"}
                  content={v.content}
                />
                <a onClick={() => onClickDeleteNotice(v.id)}>
                  <DeleteOutlined />
                </a>
              </div>
            ))}
          </div>
          <div onClick={() => router.push(`/me/${user?.id}`)} className="more-notices">
            <span>더보기</span>
          </div>
        </>
      ) : (
        <div className="no-notices">
          <p>유저님이 모멘트,연대기,코멘트 작성 및 수정등 활동을 하면 저희가 알려줄게요!</p>
        </div>
      )}
    </NoticePopUpWrapper>
  );
};

export default NoticePopUp;
