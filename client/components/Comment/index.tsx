import React, { FC, useCallback, useEffect, useState } from "react";
import { CommentWrapper } from "./styles";
import { DeleteOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL, toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { IComment } from "@typings/db";
import useToggle from "@hooks/useToggle";
import ConfirmPasswordModal from "@components/ConfirmPasswordModal";
import SubCommentForm from "@components/SubCommentForm";
interface IProps {
  commentData: IComment;
}

const Comment: FC<IProps> = ({ commentData }) => {
  const [onDelete, onClickDeleteBtn, setOnDelete] = useToggle(false);
  const [onSubCommentForm, onChangeSubCommentForm, setOnSubCommentForm] = useToggle(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { commentDeleteDone } = useSelector((state: RootState) => state.comment);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user?.id === commentData?.user.id) {
      setIsOwner(true);
    }
  }, [user, commentData]);
  useEffect(() => {
    if (commentDeleteDone) {
      setOnDelete(false);
    }
  }, [commentDeleteDone]);

  return (
    <CommentWrapper>
      <div className="comment-main" onClick={onChangeSubCommentForm}>
        <div className="name-space">
          <div>
            <a className="icon">
              <img
                src={commentData?.user.icon ? commentData?.user.icon : DEFAULT_ICON_URL}
                alt="user_icon"
              />
            </a>
            <a className="name">{commentData?.user.name}</a>
          </div>
          {isOwner && (
            <div className="comment-menu">
              <a onClick={onClickDeleteBtn}>
                <DeleteOutlined />
              </a>
              {onDelete && (
                <ConfirmPasswordModal isDelete={true} postId={0} commentId={commentData?.id} />
              )}
            </div>
          )}
        </div>
        <p className="comment-wrapper">{commentData?.content}</p>
      </div>
      {onSubCommentForm && <SubCommentForm commentId={commentData?.id} />}
    </CommentWrapper>
  );
};

export default Comment;
