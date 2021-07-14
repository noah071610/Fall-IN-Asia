import { FC, memo, useCallback, useEffect, useState } from "react";
import { TitleWrapper } from "./styles";
import CommonTitle from "@components/Common/CommonTitle";
import router from "next/dist/client/router";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import fetcher from "utils/fetcher";
import { noRevalidate, toastErrorMessage } from "config";
import { getVisitClubAction } from "actions/club";
import Link from "next/link";

interface IProps {
  clubName: string;
  clubHistory?: string[];
}

const ClubTitle: FC<IProps> = ({ clubName, clubHistory }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { visitClub } = useSelector((state: RootState) => state.club);
  const { query, pathname } = useRouter();
  const [isPostPath, setIsPostPath] = useState(false);

  useEffect(() => {
    if (clubHistory) {
      dispatch(getVisitClubAction(clubHistory));
    }
  }, [clubHistory, query]);

  useEffect(() => {
    const path = pathname.split("/");
    if (path[path.length - 1] === "post") {
      setIsPostPath(true);
    } else {
      setIsPostPath(false);
    }
  }, [pathname]);

  const onClickPosting = useCallback(() => {
    router.push(`/club/${query.group}/post`);
  }, []);
  const onClickClubMain = useCallback(() => {
    router.push(`/club`);
  }, []);
  const onClickClubByGroup = useCallback(() => {
    router.push(`/club/${query.group}?page=1`);
  }, []);

  return (
    <TitleWrapper>
      <CommonTitle point={clubName} title="クラブ">
        {query?.id ? (
          <button onClick={onClickClubByGroup} className="basic-btn">
            {clubName}メイン
          </button>
        ) : (
          <button onClick={onClickClubMain} className="basic-btn">
            クラブメイン
          </button>
        )}
        {!isPostPath && user && (
          <button onClick={onClickPosting} className="basic-btn">
            ポスト投稿
          </button>
        )}
      </CommonTitle>
      {clubHistory && (
        <div className="club-list">
          <span>訪ねたクラブ</span>
          <ul>
            {visitClub?.length > 0 &&
              visitClub.map((v: { key_name: string; group_name: string }, i: number) => {
                return (
                  <Link key={i} href={v.key_name}>
                    <a>
                      <li className="tag">{v.group_name}</li>
                    </a>
                  </Link>
                );
              })}
          </ul>
        </div>
      )}
    </TitleWrapper>
  );
};

export default memo(ClubTitle);
