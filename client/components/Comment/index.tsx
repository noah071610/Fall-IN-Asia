import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { CommentWrapper } from "./styles";
import {
  DeleteOutlined,
  DownCircleOutlined,
  HeartFilled,
  HeartOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { IComment } from "@typings/db";
import useToggle from "@hooks/useToggle";
import SubCommentForm from "@components/SubCommentForm";
import SubComment from "@components/SubComment";
import NameSpace from "@components/NameSpace";
import { commentDeleteAction, commentDislikeAction, commentLikeAction } from "actions/comment";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { toastErrorMessage } from "config";
interface IProps {
  comment: IComment;
}

const Comment: FC<IProps> = ({ comment }) => {
  const dispatch = useDispatch();
  const [onSubCommentForm, onChangeSubCommentForm, setSubCommentForm] = useToggle(false);
  const [onSubCommentList, onChangeSubCommentList, setSubCommentList] = useToggle(true);
  const { user } = useSelector((state: RootState) => state.user);
  const [liked, setLiked] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (user?.id === comment?.user.id) {
      setIsOwner(true);
    }
    if (user) {
      if (user.likeComment?.find((v: any) => v.commentId === comment?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, comment]);
  console.log(comment);

  useEffect(() => {
    if (comment?.subComments?.length > 2) {
      setSubCommentList(false);
    }
  }, []);
  const onClickConfirm = useCallback(() => {
    if (user && isOwner) {
      dispatch(commentDeleteAction(comment?.id));
    }
  }, [user, isOwner, comment]);

  const onClickLikeComment = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(commentLikeAction(comment?.id));
  }, [user, comment]);

  const onClickDislikeComment = useCallback(() => {
    if (!user) {
      toastErrorMessage("로그인이 필요합니다.");
      return;
    }
    dispatch(commentDislikeAction(comment?.id));
  }, [user, comment]);

  return (
    <CommentWrapper>
      <div onClick={onChangeSubCommentForm} className="comment-main">
        <NameSpace user={comment?.user} date={comment?.createdAt} comment={comment?.content} />
        <div onClick={(e) => e.stopPropagation()} className="btn-wrapper">
          {liked ? (
            <a className="liked" onClick={onClickDislikeComment}>
              <HeartFilled />
              <span>{}</span>
            </a>
          ) : (
            <a onClick={onClickLikeComment}>
              <HeartOutlined />
            </a>
          )}
          {isOwner && (
            <a
              onClick={() => {
                toastConfirmMessage(onClickConfirm, "이 댓글을 삭제할까요?", "삭제해주세요.");
              }}
            >
              <DeleteOutlined />
            </a>
          )}
        </div>
      </div>
      {onSubCommentForm && <SubCommentForm commentId={comment?.id} />}
      {comment?.subComments?.length > 2 && (
        <div onClick={onChangeSubCommentList} className="more-subComment">
          <button className="more-subComment-btn">
            <span className="count">{comment?.subComments?.length}</span>
            개의 답글
            <DownCircleOutlined rotate={onSubCommentList ? 180 : 0} />
          </button>
        </div>
      )}
      {onSubCommentList &&
        comment?.subComments?.map((v, i) => {
          return <SubComment subComment={v} key={i} />;
        })}
    </CommentWrapper>
  );
};

export default memo(Comment);
