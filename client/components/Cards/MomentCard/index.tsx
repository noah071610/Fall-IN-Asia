import {
  CommentOutlined,
  EyeOutlined,
  HeartFilled,
  HeartOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IMoment } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { MomentCardWrapper } from "./styles";
import { toastErrorMessage, toastSuccessMessage } from "config";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import html2textConverter from "utils/html2textConverter";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import { kmtb_Formatter } from "utils/kmbtFormatter";
import shortid from "shortid";
import { RootState } from "slices";

interface IProps {
  moment: IMoment;
  isLast?: boolean;
}

const MomentCard: FC<IProps> = ({ moment, isLast }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [userLike, setUserLike] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && moment) {
      if (user.likeMoment?.find((v: any) => v.momentId === moment?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, moment]);

  const onClickLikeOrDisLike = useCallback(
    (value: string) => {
      if (!user) {
        toastErrorMessage("로그인이 필요합니다.");
        return;
      }
      axios
        .patch(`/moment/${value}/${moment?.id}`)
        .then(() => {
          if (value === "like") {
            toastSuccessMessage("좋아요!💓");
            setUserLike((prev) => prev + 1);
          } else {
            toastSuccessMessage("좋아요 취소💔");
            setUserLike((prev) => prev - 1);
          }
          dispatch(getUserInfoAction());
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    },
    [user, moment]
  );

  const onClickCountryTag = useCallback(() => {
    router.push(`/country/${moment.code}`);
  }, []);
  const onClickTypeTag = useCallback(() => {
    router.push(`/country/${moment.code}/?type=${moment.type}`);
  }, []);
  const onClickGotoPost = useCallback(() => {
    router.push(`/country/${moment.code}/${moment.id}`);
  }, []);

  return (
    <MomentCardWrapper style={isLast ? { borderBottom: "none" } : {}}>
      <div className="article-top">
        <NameSpace user={moment?.user} date={moment?.createdAt} />
        <div className="article-header">
          <a onClick={onClickCountryTag}>{moment?.country?.name}</a>/
          <a onClick={onClickTypeTag}>{moment?.type}</a>
        </div>
      </div>
      <div className="article">
        {moment?.images?.length > 0 && (
          <div
            onClick={() => router.push(`/country/${moment?.code}/${moment?.id}`)}
            className="moment-image-wrapper"
          >
            {moment?.images?.slice(0, 2).map((v) => {
              return (
                <img
                  className="moment-image"
                  key={shortid.generate()}
                  src={v.image_src}
                  alt="moment-card-image"
                />
              );
            })}
            {moment?.images?.length > 2 && (
              <div className="moment-more-image">
                <PlusCircleOutlined />
              </div>
            )}
          </div>
        )}
        <div
          onClick={() => router.push(`/country/${moment?.code}/${moment?.id}`)}
          className="content"
        >
          {html2textConverter(moment?.content as string)}
        </div>
        <ul className="article-footer">
          <li onClick={onClickGotoPost}>
            <CommentOutlined />
            <span className="count">{moment?.comments?.length}</span>
            <span>댓글</span>
          </li>
          <li
            onClick={
              liked ? () => onClickLikeOrDisLike("dislike") : () => onClickLikeOrDisLike("like")
            }
            className={liked ? "liked" : ""}
          >
            {liked ? <HeartFilled /> : <HeartOutlined />}
            <span className="count">
              {moment?.likedUser?.length < 999
                ? (kmtb_Formatter(moment?.likedUser?.length) as number) + userLike
                : kmtb_Formatter(moment?.likedUser?.length)}
            </span>
            <span>좋아요</span>
          </li>
          <li onClick={onClickGotoPost}>
            <EyeOutlined />
            <span className="count">{moment?.hit ? kmtb_Formatter(moment?.hit) : 0}</span>
            <span>조회</span>
          </li>
        </ul>
      </div>
    </MomentCardWrapper>
  );
};

export default memo(MomentCard);
