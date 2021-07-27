import React, { FC, useCallback, useEffect, useState } from "react";
import { StoryPostWrapper } from "./styles";
import ReactHtmlParser from "react-html-parser";
import { IStory } from "@typings/db";
import { toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { storyDislikeAction, storyLikeAction } from "actions/story";
import CommentForm from "@components/CommentForm";
import Comment from "@components/Comment";
import StoryPostOwner from "../StoryPostOwner";
import StoryPostPagination from "../StoryPostPagination";

interface IProps {
  story: IStory;
}

const StoryPost: FC<IProps> = ({ story }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user) {
      if (user?.likeStory?.find((v: any) => v.storyId === story?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, story]);
  const onClickLikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(storyLikeAction(story?.id));
  }, [user, story]);
  const onClickDislikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(storyDislikeAction(story?.id));
  }, [user, story]);
  return (
    <StoryPostWrapper>
      <div className="post-content">{ReactHtmlParser(story?.content as string)}</div>
      <StoryPostOwner story={story} />
      <StoryPostPagination />
      <ul className="story-footer">
        <li>
          <CommentOutlined />
          <span className="count">{story?.comments?.length}</span>
          <span>댓글</span>
        </li>
        {liked ? (
          <li onClick={onClickDislikeBtn} className="liked">
            <HeartFilled />
            <span className="count">{story?.likedUser?.length}</span>
            <span>좋아요</span>
          </li>
        ) : (
          <li onClick={onClickLikeBtn}>
            <HeartOutlined />
            <span className="count">{story?.likedUser?.length}</span>
            <span>좋아요</span>
          </li>
        )}
      </ul>
      <CommentForm isStory={true} />
      {story?.comments?.map((v, i) => {
        return <Comment key={i} comment={v} />;
      })}
    </StoryPostWrapper>
  );
};

export default StoryPost;
