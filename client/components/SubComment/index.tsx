import React, { FC, useCallback, useEffect, useState } from "react";
import { SubCommentWrapper } from "./styles";
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import { DEFAULT_ICON_URL, toastErrorMessage } from "config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import { ISubComment } from "@typings/db";
import useToggle from "@hooks/useToggle";
import { commentSlice } from "slices/comment";
import NameSpace from "@components/NameSpace";
interface IProps {
  subComment: ISubComment;
}

const SubComment: FC<IProps> = ({ subComment }) => {
  const dispatch = useDispatch();
  const [onDelete, onClickDeleteBtn, setOnDelete] = useToggle(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { subCommentDeleteDone } = useSelector((state: RootState) => state.comment);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user?.id === subComment?.user.id) {
      setIsOwner(true);
    }
  }, [user, subComment]);

  useEffect(() => {
    if (subCommentDeleteDone) {
      setOnDelete(false);
      dispatch(commentSlice.actions.subCommentDeleteClear());
    }
  }, [subCommentDeleteDone]);

  return (
    <SubCommentWrapper>
      <NameSpace
        user={subComment?.user}
        date={subComment?.createdAt}
        comment={subComment?.content}
      />
      {isOwner && (
        <a
          className="more-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClickDeleteBtn();
          }}
        >
          <DeleteOutlined />
        </a>
      )}
    </SubCommentWrapper>
  );
};

export default SubComment;
