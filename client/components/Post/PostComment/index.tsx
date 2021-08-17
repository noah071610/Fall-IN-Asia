import React, { FC, useCallback, useEffect, useState } from "react";
import { PostCommentWrapper } from "./styles";
import { IComment, IStory } from "@typings/db";
import { noRevalidate, toastErrorMessage, toastSuccessMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { CommentOutlined, EyeOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import CommentForm from "@components/Comments/CommentForm";
import Comment from "@components/Comments/Comment";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import fetcher from "utils/fetcher";
import useSWR from "swr";
import { kmtb_Formatter } from "utils/kmbtFormatter";
interface IProps {
  story: IStory;
  revalidateStory: () => void;
}

const PostComment: FC<IProps> = ({ story, revalidateStory }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { data: comments, revalidate: revalidateComments } = useSWR<IComment[]>(
    `/comment/${story?.id}?postType=story`,
    fetcher,
    noRevalidate
  );

  useEffect(() => {
    if (user && story) {
      if (user?.likeStory?.find((v: any) => v.storyId === story?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, story]);

  const onClickLikeOrDisLike = useCallback(
    (value: string) => {
      if (!user) {
        toastErrorMessage("로그인이 필요합니다.");
        return;
      }
      axios
        .patch(`/story/${value}/${story?.id}`)
        .then(() => {
          if (value === "like") {
            toastSuccessMessage("좋아요!💓");
          } else {
            toastSuccessMessage("좋아요 취소💔");
          }
          revalidateStory();
          dispatch(getUserInfoAction());
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    },
    [user, story]
  );
  return (
    <PostCommentWrapper>
      <span id="comment" className="anchor-offset-controller" />
      <ul className="comment-header">
        <li>
          <CommentOutlined />
          <span className="count">{comments && kmtb_Formatter(comments?.length)}</span>
          <span>댓글</span>
        </li>
        <li
          onClick={
            liked ? () => onClickLikeOrDisLike("dislike") : () => onClickLikeOrDisLike("like")
          }
          className={liked ? "liked" : ""}
        >
          {liked ? <HeartFilled /> : <HeartOutlined />}
          <span className="count">{kmtb_Formatter(story?.likedUser?.length)}</span>
          <span>좋아요</span>
        </li>
        <li>
          <EyeOutlined />
          <span className="count">{kmtb_Formatter(story?.hit || 0)}</span>
          <span>조회</span>
        </li>
      </ul>
      <CommentForm revalidateComments={revalidateComments} isStory={true} />
      {comments?.map((v, i) => {
        return <Comment revalidateComments={revalidateComments} key={i} comment={v} />;
      })}
    </PostCommentWrapper>
  );
};

export default PostComment;
