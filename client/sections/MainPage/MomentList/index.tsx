import React, { FC, memo, useEffect, useState } from "react";
import { useRef } from "react";
import { IMoment } from "@typings/db";
import { MomentListWrapper } from "./styles";
import useOnScreen from "@hooks/useOnScreen";
import MomentCard from "@components/Cards/MomentCard";
import { BLUE_COLOR, NO_POST_URL } from "config";

interface IProps {
  moments: IMoment[][] | undefined;
  setSize: (f: (size: number) => number) => Promise<IMoment[][] | undefined>;
  setFilter: (filter: string) => void;
  filter: string;
  revalidateMoments: () => void;
}

const MomentList: FC<IProps> = ({ revalidateMoments, filter, moments, setSize, setFilter }) => {
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

  return (
    <MomentListWrapper>
      <div className="content-wrapper">
        <div className="content-filter">
          <button
            style={filter === "" ? { fontWeight: "bold", color: BLUE_COLOR } : {}}
            onClick={() => setFilter("")}
          >
            최신순
          </button>
          <button
            style={filter === "popular" ? { fontWeight: "bold", color: BLUE_COLOR } : {}}
            onClick={() => setFilter("popular")}
          >
            인기순
          </button>
          <button
            style={filter === "view" ? { fontWeight: "bold", color: BLUE_COLOR } : {}}
            onClick={() => setFilter("view")}
          >
            조회순
          </button>
          <button
            style={filter === "comment" ? { fontWeight: "bold", color: BLUE_COLOR } : {}}
            onClick={() => setFilter("comment")}
          >
            댓글많은순
          </button>
        </div>
        {momentsData.length > 0 ? (
          momentsData?.map((v, i) => {
            if (momentsData.length - 1 === i) {
              return (
                <MomentCard
                  revalidateMoments={revalidateMoments}
                  isLast={true}
                  key={i}
                  moment={v}
                />
              );
            }
            return <MomentCard revalidateMoments={revalidateMoments} key={i} moment={v} />;
          })
        ) : (
          <div className="no-post">
            <img src={NO_POST_URL} />
            <h4>아직 모멘트가 없어요😥</h4>
          </div>
        )}
        <div ref={ref} />
      </div>
    </MomentListWrapper>
  );
};

export default memo(MomentList);
