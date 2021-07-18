import React, { FC, useCallback, useEffect, useState } from "react";
import { CommentWrapper } from "./styles";
import { DeleteOutlined, DownCircleOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL, toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { IComment } from "@typings/db";
import useToggle from "@hooks/useToggle";
import ConfirmPasswordModal from "@components/ConfirmPasswordModal";
import SubCommentForm from "@components/SubCommentForm";
import SubComment from "@components/SubComment";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { commentSlice } from "slices/comment";
interface IProps {
  commentData: IComment;
}

const Comment: FC<IProps> = ({ commentData }) => {
  const dispatch = useDispatch();
  const [onDelete, onClickDeleteBtn, setOnDelete] = useToggle(false);
  const [onSubCommentForm, onChangeSubCommentForm, setSubCommentForm] = useToggle(false);
  const [onSubCommentList, onChangeSubCommentList, setSubCommentList] = useToggle(true);
  const { user } = useSelector((state: RootState) => state.user);
  const { commentDeleteDone, commentCreateDone } = useSelector((state: RootState) => state.comment);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user?.id === commentData?.user.id) {
      setIsOwner(true);
    }
  }, [user, commentData]);
  useEffect(() => {
    if (commentData?.subComments?.length > 2) {
      setSubCommentList(false);
    }
  }, []);
  useEffect(() => {
    if (commentCreateDone) {
      dispatch(commentSlice.actions.commentCreateClear());
    }
  }, [commentCreateDone]);
  useEffect(() => {
    if (commentDeleteDone) {
      setOnDelete(false);
      setSubCommentForm(false);
      dispatch(commentSlice.actions.commentDeleteClear());
    }
  }, [commentDeleteDone]);
  return (
    <CommentWrapper>
      <div onClick={onChangeSubCommentForm} className="comment-main">
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
              <a
                onClick={(e) => {
                  e.stopPropagation();
                  onClickDeleteBtn();
                }}
              >
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
      {commentData?.subComments?.length > 2 && (
        <div onClick={onChangeSubCommentList} className="subComment-toggle-div">
          <span>
            <span className="count">{commentData?.subComments?.length}</span>
            件のリプライ
            <DownCircleOutlined rotate={onSubCommentList ? 180 : 0} />
          </span>
        </div>
      )}
      {onSubCommentList &&
        commentData?.subComments?.map((v, i) => {
          return <SubComment subCommentData={v} key={i} />;
        })}
    </CommentWrapper>
  );
};

export default Comment;
