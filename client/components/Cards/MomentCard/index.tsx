import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IMoment } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { MomentCardWrapper } from "./styles";
import ReactHtmlParser from "react-html-parser";
import { toastErrorMessage } from "config";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { momentDislikeAction, momentLikeAction } from "actions/moment";

interface IProps {
  moment: IMoment;
}

const MomentCard: FC<IProps> = ({ moment }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [liked, setLiked] = useState(false);
  const [imageLayout, setImageLayout] = useState("");

  useEffect(() => {
    if (user) {
      if (user.likemoment?.find((v: any) => v.momentId === moment?.id)) {
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

  useEffect(() => {
    if (moment?.images?.length === 0) {
      return;
    }
    if (moment?.images?.length === 1) {
      setImageLayout("one-image");
      return;
    }
    if (moment?.images?.length > 1) {
      setImageLayout("two-images");
    }
  }, [moment]);

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
    <MomentCardWrapper className="article-card-wrapper">
      <div className="article-top">
        <NameSpace user={moment?.user} date={moment?.createdAt} />
        <div className="article-header">
          <a onClick={onClickCountryTag}>{moment?.country?.name}</a>/
          <a onClick={onClickTypeTag}>{moment?.type}</a>/
          <a onClick={onClickGotoPost}>{moment?.id}번째메아리</a>
        </div>
      </div>
      <div className="article">
        <div
          onClick={() => router.push(`/country/${moment?.country?.code}/${moment?.id}`)}
          className={imageLayout}
        >
          {moment?.images?.slice(0, 2).map((v, i) => {
            return <img key={i} src={v.image_src} />;
          })}
        </div>
        <div
          onClick={() => router.push(`/country/${moment?.country?.code}/${moment?.id}`)}
          className="content"
        >
          {ReactHtmlParser(moment?.content as string)}
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
