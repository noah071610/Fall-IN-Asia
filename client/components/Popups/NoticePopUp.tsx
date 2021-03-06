import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import tw from "twin.macro";
import styled from "@emotion/styled";
import ListCard from "@components/Cards/ListCard";
import { INotice } from "@typings/db";
import router from "next/router";
import { readNoticeAction } from "actions/user";
import shortid from "shortid";
import { useTranslation } from "react-i18next";
const NoticePopUpWrapper = styled.ul`
  ${tw`absolute right-0 bg-white shadow-md rounded-xl overflow-hidden w-80`}
  top:130%;
  z-index: 80;
  h2 {
    ${tw`pt-4 px-4 pb-2 text-sm font-bold`}
  }
  .notices-wrapper {
    .list-card-wrapper {
      ${tw`border-none rounded-none px-4 py-2 m-0 `}
      box-shadow: none;
      a {
        .anticon {
          ${tw`text-base`}
        }
      }
      &:hover {
        ${tw`bg-gray-100`}
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
    ${tw`w-full p-4 text-sm font-bold flex justify-center cursor-pointer hover:bg-gray-100`}
    transition:0.3s all;
  }
`;
interface IProps {}

const NoticePopUp: FC<IProps> = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(readNoticeAction());
  }, []);

  const onClickListCard = useCallback((v: INotice) => {
    if (v.momentId) {
      router.push(`/country/${v.code}/${v.momentId}`);
    } else {
      router.push(`/story/${v.code}/${v.storyId}`);
    }
  }, []);

  return (
    <NoticePopUpWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2>
        {user && user.notices.length > 0 ? t("popup.notice.notice") : t("popup.notice.noNotice")}
      </h2>
      {user && user.notices.length > 0 ? (
        <>
          <ul className="notices-wrapper">
            {user?.notices.slice(0, 5).map((v: INotice) => (
              <ListCard
                onClickListCard={() => onClickListCard(v)}
                key={shortid.generate()}
                title={v.header + ` ${t("popup.notice.notice")}`}
                content={v.content}
                noticeId={v.id}
              />
            ))}
          </ul>
          <button onClick={() => router.push(`/me/${user?.id}`)} className="more-notices">
            <span>{t("main.more")}</span>
          </button>
        </>
      ) : (
        <div className="no-notices">
          <p>{t("popup.notice.noNoticeDesc")}</p>
        </div>
      )}
    </NoticePopUpWrapper>
  );
};

export default NoticePopUp;
