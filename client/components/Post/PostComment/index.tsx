import React, { FC, useCallback, useEffect, useState } from "react";
import { PostCommentWrapper } from "./styles";
import { IArticle, IStory } from "@typings/db";
import { toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { storyDislikeAction, storyLikeAction } from "actions/story";
import CommentForm from "@components/Comments/CommentForm";
import Comment from "@components/Comments/Comment";
interface IProps {
  story: IStory;
}

const PostComment: FC<IProps> = ({ story }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user && story) {
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
    if (!story) {
      return;
    }
    dispatch(storyLikeAction(story?.id));
  }, [user, story]);

  const onClickDislikeBtn = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    if (!story) {
      return;
    }
    dispatch(storyDislikeAction(story?.id));
  }, [user, story]);
  return (
    <PostCommentWrapper>
      <span id="comment" className="anchor-offset-controller" />
      <ul className="comment-header">
        <li>
          <CommentOutlined />
          <span className="count">{story?.comments?.length}</span>
          <span>댓글</span>
        </li>
        <li onClick={liked ? onClickDislikeBtn : onClickLikeBtn} className={liked ? "liked" : ""}>
          {liked ? <HeartFilled /> : <HeartOutlined />}
          <span className="count">{story?.likedUser?.length}</span>
          <span>좋아요</span>
        </li>
      </ul>
      <CommentForm isStory={true} />
      {story?.comments?.map((v, i) => {
        return <Comment key={i} comment={v} />;
      })}
    </PostCommentWrapper>
  );
};

export default PostComment;
