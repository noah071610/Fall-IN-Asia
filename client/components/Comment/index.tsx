import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { CommentWrapper } from "./styles";
import { DeleteOutlined, DownCircleOutlined, MoreOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { IComment } from "@typings/db";
import useToggle from "@hooks/useToggle";
import SubCommentForm from "@components/SubCommentForm";
import SubComment from "@components/SubComment";
import { commentSlice } from "slices/comment";
import NameSpace from "@components/NameSpace";
interface IProps {
  comment: IComment;
}

const Comment: FC<IProps> = ({ comment }) => {
  const dispatch = useDispatch();
  const [onDelete, onClickDeleteBtn, setOnDelete] = useToggle(false);
  const [onSubCommentForm, onChangeSubCommentForm, setSubCommentForm] = useToggle(false);
  const [onSubCommentList, onChangeSubCommentList, setSubCommentList] = useToggle(true);
  const { user } = useSelector((state: RootState) => state.user);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user?.id === comment?.user.id) {
      setIsOwner(true);
    }
  }, [user, comment]);
  useEffect(() => {
    if (comment?.subComments?.length > 2) {
      setSubCommentList(false);
    }
  }, []);
  return (
    <CommentWrapper>
      <div onClick={onChangeSubCommentForm} className="comment-main">
        <NameSpace user={comment?.user} date={comment?.createdAt} comment={comment?.content} />
        {isOwner && (
          <a
            className="more-btn"
            onClick={(e) => {
              e.stopPropagation();
              onClickDeleteBtn();
            }}
          >
            <MoreOutlined />
          </a>
        )}
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
