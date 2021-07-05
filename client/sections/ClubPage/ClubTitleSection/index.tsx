import { FC, useCallback, useEffect, useState } from "react";
import { TitleWrapper } from "./styles";
import CommonTitle from "@components/Common/CommonTitle";
import router from "next/dist/client/router";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { RootState } from "slices";

interface IProps {
  clubName: string;
}

const ClubTitleSection: FC<IProps> = ({ clubName }) => {
  const { query, pathname } = useRouter();
  const [isPostPath, setIsPostPath] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

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

  return (
    <TitleWrapper>
      <CommonTitle point={clubName} title="クラブ">
        {!isPostPath && user && (
          <>
            <button onClick={onClickClubMain} className="basic-btn">
              クラブメイン
            </button>
            <button onClick={onClickPosting} className="basic-btn">
              ポスト投稿
            </button>
          </>
        )}
      </CommonTitle>
      <div className="club-list">
        <span>訪ねたクラブ</span>
        <ul>
          <li className="tag">
            <a>Oh my girl</a>
          </li>
          <li className="tag">
            <a>Black Pink</a>
          </li>
          <li className="tag">
            <a>モンスターX</a>
          </li>
          <li className="tag">
            <a>セブンティーン</a>
          </li>
        </ul>
      </div>
    </TitleWrapper>
  );
};

export default ClubTitleSection;
