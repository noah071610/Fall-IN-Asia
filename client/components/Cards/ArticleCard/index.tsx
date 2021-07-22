import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import NameSpace from "@components/NameSpace";
import { IMainPost } from "@typings/db";
import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { ArticleCardWrapper } from "./styles";
import ReactHtmlParser from "react-html-parser";
import { toastErrorMessage } from "config";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { mainPostDislikeAction, mainPostLikeAction } from "actions/mainPost";

interface IProps {
  mainPost: IMainPost;
}

const ArticleCard: FC<IProps> = ({ mainPost }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [liked, setLiked] = useState(false);
  const [imageLayout, setImageLayout] = useState("");

  useEffect(() => {
    if (user) {
      if (user.likeMainPost?.find((v: any) => v.mainPostId === mainPost?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, mainPost]);

  const onClickLikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(mainPostLikeAction(mainPost?.id));
  }, [user, mainPost]);
  const onClickDislikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(mainPostDislikeAction(mainPost?.id));
  }, [user, mainPost]);

  useEffect(() => {
    if (mainPost?.images?.length === 0) {
      return;
    }
    if (mainPost?.images?.length === 1) {
      setImageLayout("one-image");
      return;
    }
    if (mainPost?.images?.length > 1) {
      setImageLayout("two-images");
    }
  }, [mainPost]);

  const onClickCountryTag = useCallback(() => {
    router.push(`/country/${mainPost.code}`);
  }, []);
  const onClickTypeTag = useCallback(() => {
    router.push(`/country/${mainPost.code}/?type=${mainPost.type}`);
  }, []);
  const onClickPostIdTag = useCallback(() => {
    router.push(`/country/${mainPost.code}/${mainPost.id}`);
  }, []);
  const onClickCommentBtn = useCallback(() => {
    router.push(`/country/${mainPost.code}/${mainPost.id}`);
  }, []);

  return (
    <ArticleCardWrapper className="article-card-wrapper">
      <div className="article-top">
        <NameSpace user={mainPost?.user} date={mainPost?.createdAt} />
        <div className="article-header">
          <a onClick={onClickCountryTag}>{mainPost?.country?.name}</a>/
          <a onClick={onClickTypeTag}>{mainPost?.type}</a>/
          <a onClick={onClickPostIdTag}>{mainPost?.id}번째메아리</a>
        </div>
      </div>
      <div className="article">
        <div
          onClick={() => router.push(`/country/${mainPost?.country?.code}/${mainPost?.id}`)}
          className={imageLayout}
        >
          {mainPost?.images?.slice(0, 2).map((v, i) => {
            return <img key={i} src={v.image_src} />;
          })}
        </div>
        <div
          onClick={() => router.push(`/country/${mainPost?.country?.code}/${mainPost?.id}`)}
          className="content"
        >
          {ReactHtmlParser(mainPost?.content as string)}
        </div>
        <ul className="article-footer">
          <li onClick={onClickCommentBtn}>
            <CommentOutlined />
            <span className="count">{mainPost?.comments?.length}</span>
            <span>댓글</span>
          </li>
          {liked ? (
            <li onClick={onClickDislikeBtn} className="liked">
              <HeartFilled />
              <span className="count">{mainPost?.likedUser?.length}</span>
              <span>좋아요</span>
            </li>
          ) : (
            <li onClick={onClickLikeBtn}>
              <HeartOutlined />
              <span className="count">{mainPost?.likedUser?.length}</span>
              <span>좋아요</span>
            </li>
          )}
        </ul>
      </div>
    </ArticleCardWrapper>
  );
};

export default memo(ArticleCard);
