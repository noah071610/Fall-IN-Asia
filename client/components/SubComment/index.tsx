import React, { FC, useCallback, useEffect, useState } from "react";
import { SubCommentWrapper } from "./styles";
import { DeleteOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL, toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { IComment, ISubComment } from "@typings/db";
import useToggle from "@hooks/useToggle";
import ConfirmPasswordModal from "@components/ConfirmPasswordModal";
import { commentSlice } from "slices/comment";
interface IProps {
  subCommentData: ISubComment;
}

interface IProps {}

const SubComment: FC<IProps> = ({ subCommentData }) => {
  const dispatch = useDispatch();
  const [onDelete, onClickDeleteBtn, setOnDelete] = useToggle(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { subCommentDeleteDone } = useSelector((state: RootState) => state.comment);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user?.id === subCommentData?.user.id) {
      setIsOwner(true);
    }
  }, [user, subCommentData]);

  useEffect(() => {
    if (subCommentDeleteDone) {
      setOnDelete(false);
      dispatch(commentSlice.actions.subCommentDeleteClear());
    }
  }, [subCommentDeleteDone]);

  return (
    <SubCommentWrapper>
      <div className="name-space">
        <div>
          <a className="icon">
            <img
              src={subCommentData?.user.icon ? subCommentData?.user.icon : DEFAULT_ICON_URL}
              alt="user_icon"
            />
          </a>
          <a className="name">{subCommentData?.user.name}</a>
        </div>
        {isOwner && (
          <div className="comment-menu">
            <a onClick={onClickDeleteBtn}>
              <DeleteOutlined />
            </a>
            {onDelete && (
              <ConfirmPasswordModal isDelete={true} postId={0} subCommentId={subCommentData?.id} />
            )}
          </div>
        )}
      </div>
      <p className="comment-wrapper">{subCommentData?.content}</p>
    </SubCommentWrapper>
  );
};

export default SubComment;
