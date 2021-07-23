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
import { memo } from "react";
import { toastDeleteConfirmMessage } from "@components/ConfirmToastify";
import { subCommentDeleteAction } from "actions/comment";
interface IProps {
  subComment: ISubComment;
}

const SubComment: FC<IProps> = ({ subComment }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user?.id === subComment?.user.id) {
      setIsOwner(true);
    }
  }, [user, subComment]);

  const onClickConfirm = useCallback(() => {
    if (user && isOwner) {
      dispatch(subCommentDeleteAction(subComment?.id));
    }
  }, [user, isOwner]);

  return (
    <SubCommentWrapper>
      <NameSpace
        user={subComment?.user}
        date={subComment?.createdAt}
        comment={subComment?.content}
      />
      {isOwner && (
        <a
          className="delete-btn"
          onClick={() => {
            toastDeleteConfirmMessage(onClickConfirm, "이 답글을");
          }}
        >
          <DeleteOutlined />
        </a>
      )}
    </SubCommentWrapper>
  );
};

export default memo(SubComment);
