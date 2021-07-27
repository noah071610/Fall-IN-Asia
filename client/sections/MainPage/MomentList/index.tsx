import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { IMainPost } from "@typings/db";
import { MomentListWrapper } from "./styles";
import useOnScreen from "@hooks/useOnScreen";
import router, { useRouter } from "next/router";
import MomentCard from "@components/Cards/MomentCard";
import { NO_POST_URL } from "config";

interface IProps {
  mainPosts: IMainPost[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IMainPost[][] | undefined>;
}

const MomentList: FC<IProps> = ({ mainPosts, setSize }) => {
  const { query } = useRouter();
  const [isReachingEnd, setIsReachingEnd] = useState(true);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const isEmpty = mainPosts?.[0]?.length === 0;

  useEffect(() => {
    if (mainPosts) {
      setIsReachingEnd(mainPosts[mainPosts.length - 1]?.length < 10);
    }
  }, [mainPosts]);
  useEffect(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize((prev) => prev + 1).then(() => {});
    }
  }, [isVisible]);

  const mainPostsData = mainPosts ? mainPosts?.flat() : [];

  const onClickFilter = useCallback(
    (filter: string) => {
      if (query.code) {
        router.push(
          `/country/${query.code}/${query.type ? "?type=" + query.type + "&" : "?"}filter=${filter}`
        );
      } else {
        router.push(`/${query.type ? "?type=" + query.type + "&" : "?"}filter=${filter}`);
      }
    },
    [query]
  );
  return (
    <MomentListWrapper>
      <div className="content-wrapper">
        <div className="content-filter">
          <button onClick={() => onClickFilter("popular")}>인기순</button>
          <button onClick={() => onClickFilter("")}>최신순</button>
          <button onClick={() => onClickFilter("comment")}>댓글많은순</button>
        </div>
        {mainPostsData.length > 0 ? (
          mainPostsData?.map((v, i) => {
            return <MomentCard key={i} mainPost={v} />;
          })
        ) : (
          <div className="no-post">
            <img src={NO_POST_URL} />
            <h4>게시글이 없어요😥</h4>
          </div>
        )}
        <div ref={ref} />
      </div>
    </MomentListWrapper>
  );
};

export default memo(MomentList);
