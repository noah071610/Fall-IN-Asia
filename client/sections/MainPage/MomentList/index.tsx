import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { IMoment } from "@typings/db";
import { MomentListWrapper } from "./styles";
import useOnScreen from "@hooks/useOnScreen";
import router, { useRouter } from "next/router";
import MomentCard from "@components/Cards/MomentCard";
import { NO_POST_URL } from "config";

interface IProps {
  moments: IMoment[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IMoment[][] | undefined>;
}

const MomentList: FC<IProps> = ({ moments, setSize }) => {
  const { query } = useRouter();
  const [isReachingEnd, setIsReachingEnd] = useState(true);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const isEmpty = moments?.[0]?.length === 0;

  useEffect(() => {
    if (moments) {
      setIsReachingEnd(moments[moments.length - 1]?.length < 10);
    }
  }, [moments]);
  useEffect(() => {
    if (isVisible && !isReachingEnd && !isEmpty) {
      setSize((prev) => prev + 1).then(() => {});
    }
  }, [isVisible]);

  const momentsData = moments ? moments?.flat() : [];

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
        {momentsData.length > 0 ? (
          momentsData?.map((v, i) => {
            return <MomentCard key={i} moment={v} />;
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
