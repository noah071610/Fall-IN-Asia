import React, { FC, useCallback, useEffect, useState } from "react";
import { SubCommentWrapper } from "./styles";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import { ISubComment } from "@typings/db";
import NameSpace from "@components/NameSpace";
import { memo } from "react";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import axios from "axios";
import { toastErrorMessage, toastSuccessMessage } from "config";
interface IProps {
  subComment: ISubComment;
  revalidateComments: () => void;
}

const SubComment: FC<IProps> = ({ subComment, revalidateComments }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    if (user?.id === subComment?.user.id) {
      setIsOwner(true);
    }
  }, [user, subComment]);

  const onClickConfirmDelete = useCallback(() => {
    if (user && isOwner) {
      axios
        .delete(`/comment/subComment/${subComment?.id}`)
        .then(() => {
          revalidateComments();
          toastSuccessMessage("답글을 성공적으로 삭제했습니다.");
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    }
  }, [user, isOwner, subComment]);

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
            toastConfirmMessage(onClickConfirmDelete, "이 답글을 삭제할까요?", "삭제해주세요.");
          }}
        >
          <DeleteOutlined />
        </a>
      )}
    </SubCommentWrapper>
  );
};

export default memo(SubComment);
