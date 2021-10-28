import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { CommentWrapper } from "./styles";
import { DeleteOutlined, DownCircleOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { IComment } from "@typings/db";
import useToggle from "@hooks/useToggle";
import NameSpace from "@components/NameSpace";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import { toastErrorMessage, toastSuccessMessage } from "config";
import SubComment from "../SubComment";
import SubCommentForm from "../SubCommentForm";
import axios from "axios";
import { getUserInfoAction } from "actions/user";
import shortid from "shortid";
import { useTranslation } from "react-i18next";
interface IProps {
  comment: IComment;
  revalidateComments: () => Promise<IComment[] | undefined>;
}

const Comment: FC<IProps> = ({ comment, revalidateComments }) => {
  const { t } = useTranslation("common");
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
      if (user?.likeComment?.find((v) => v.commentId === comment?.id)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }
  }, [user, comment]);
  useEffect(() => {
    if (comment?.subComments?.length > 2) {
      setSubCommentList(false);
    }
  }, []);
  const onClickConfirmDelete = useCallback(async () => {
    if (user && isOwner) {
      await axios
        .delete(`/comment/${comment?.id}`)
        .then(() => {
          revalidateComments();
          toastSuccessMessage(t("message.comment.remove"));
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    }
  }, [user, isOwner, comment]);

  const onClickLikeOrDisLike = useCallback(
    (value: string) => {
      if (!user) {
        toastErrorMessage(t("message.needToLogin"));
        return;
      }
      axios
        .patch(`/comment/${value}/${comment?.id}`)
        .then(() => {
          if (value === "like") {
            toastSuccessMessage(t("message.like"));
          } else {
            toastSuccessMessage(t("message.dislike"));
          }
          revalidateComments();
          dispatch(getUserInfoAction());
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    },
    [user, comment]
  );
  return (
    <CommentWrapper>
      <div onClick={onChangeSubCommentForm} className="comment-main">
        <NameSpace user={comment?.user} date={comment?.createdAt} comment={comment?.content} />
        <div onClick={(e) => e.stopPropagation()} className="btn-wrapper">
          {liked ? (
            <a className="liked" onClick={() => onClickLikeOrDisLike("dislike")}>
              <HeartFilled />
              <span className="count">{comment?.likedUser?.length || 0}</span>
            </a>
          ) : (
            <a onClick={() => onClickLikeOrDisLike("like")}>
              <HeartOutlined />
              <span className="count">{comment?.likedUser?.length || 0}</span>
            </a>
          )}
          {isOwner && (
            <a
              onClick={() => {
                toastConfirmMessage(
                  onClickConfirmDelete,
                  t("message.comment.confirmRemove"),
                  `${t("main.yes")} ${t("message.removeIt")}`,
                  t("main.no")
                );
              }}
            >
              <DeleteOutlined />
            </a>
          )}
        </div>
      </div>
      {onSubCommentForm && (
        <SubCommentForm revalidateComments={revalidateComments} commentId={comment?.id} />
      )}
      {comment?.subComments?.length > 2 && (
        <div onClick={onChangeSubCommentList} className="more-subComment">
          <button className="more-subComment-btn">
            <span className="count">{comment?.subComments?.length}</span>
            {t("post.counting")}
            <DownCircleOutlined rotate={onSubCommentList ? 180 : 0} />
          </button>
        </div>
      )}
      {onSubCommentList &&
        comment?.subComments?.map((v) => {
          return (
            <SubComment
              key={shortid.generate()}
              revalidateComments={revalidateComments}
              subComment={v}
            />
          );
        })}
    </CommentWrapper>
  );
};

export default memo(Comment);
