import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IMoment } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { MomentCardWrapper } from "./styles";
import { toastErrorMessage } from "config";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { momentDislikeAction, momentLikeAction } from "actions/moment";
import useHtmlConverter from "@hooks/useHtmlConverter";

interface IProps {
  moment: IMoment;
  isLast?: boolean;
}

const MomentCard: FC<IProps> = ({ moment, isLast }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
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

  const onClickLikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(momentLikeAction(moment?.id));
  }, [user, moment]);
  const onClickDislikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(momentDislikeAction(moment?.id));
  }, [user, moment]);

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
        <div
          onClick={() => router.push(`/country/${moment?.country?.code}/${moment?.id}`)}
          className="moment-image-wrapper"
        >
          {moment?.images?.slice(0, 3).map((v, i) => {
            return <img className="moment-image" key={i} src={v.image_src} />;
          })}
        </div>
        <div
          onClick={() => router.push(`/country/${moment?.country?.code}/${moment?.id}`)}
          className="content"
        >
          {useHtmlConverter(moment?.content as string)}
        </div>
        <ul className="article-footer">
          <li onClick={onClickGotoPost}>
            <CommentOutlined />
            <span className="count">{moment?.comments?.length}</span>
            <span>댓글</span>
          </li>
          {liked ? (
            <li onClick={onClickDislikeBtn} className="liked">
              <HeartFilled />
              <span className="count">{moment?.likedUser?.length}</span>
              <span>좋아요</span>
            </li>
          ) : (
            <li onClick={onClickLikeBtn}>
              <HeartOutlined />
              <span className="count">{moment?.likedUser?.length}</span>
              <span>좋아요</span>
            </li>
          )}
        </ul>
      </div>
    </MomentCardWrapper>
  );
};

export default memo(MomentCard);
