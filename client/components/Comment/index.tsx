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
interface IProps {
  commentData: IComment;
}

const Comment: FC<IProps> = ({ commentData }) => {
  const [onDelete, onClickDeleteBtn, setOnDelete] = useToggle(false);
  const [onSubCommentForm, onChangeSubCommentForm, setSubCommentForm] = useToggle(false);
  const [onSubCommentList, onChangeSubCommentList, setSubCommentList] = useToggle(false);
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
  console.log("commm", commentData);

  return (
    <CommentWrapper>
      <div className="comment-main">
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
      <div className="subComment-toggle-div">
        <a onClick={onChangeSubCommentForm}>
          {" "}
          リプライ作成
          <DownCircleOutlined rotate={onSubCommentForm ? 180 : 0} />
        </a>
        {commentData?.subComments?.length > 0 && (
          <>
            <Divider type="vertical" />
            <a onClick={onChangeSubCommentList}>
              <span className="count">{commentData?.subComments?.length}</span>
              件のリプライ
              <DownCircleOutlined rotate={onSubCommentList ? 180 : 0} />
            </a>
          </>
        )}
      </div>
      {onSubCommentForm && user && <SubCommentForm commentId={commentData?.id} />}
      {onSubCommentList &&
        commentData?.subComments?.map((v, i) => {
          return <SubComment subCommentData={v} key={i} />;
        })}
    </CommentWrapper>
  );
};

export default Comment;
