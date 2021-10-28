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
import { useTranslation } from "react-i18next";
interface IProps {
  subComment: ISubComment;
  revalidateComments: () => void;
}

const SubComment: FC<IProps> = ({ subComment, revalidateComments }) => {
  const { t } = useTranslation("common");
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
          toastSuccessMessage(t("message.reply.remove"));
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
    </SubCommentWrapper>
  );
};

export default memo(SubComment);
