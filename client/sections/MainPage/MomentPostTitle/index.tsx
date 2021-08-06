import React, { FC, useCallback, useEffect, useState } from "react";
import { MomentPostTitleWrapper } from "./styles";
import { Divider } from "antd";
import { IMoment } from "@typings/db";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "slices";
import NameSpace from "@components/NameSpace";
import router from "next/router";
import { toastConfirmMessage } from "@components/ConfirmToastify";
import axios from "axios";
import { toastErrorMessage, toastSuccessMessage } from "config";

interface IProps {
  moment: IMoment;
}

const MomentPostTitle: FC<IProps> = ({ moment }) => {
  const dispatch = useDispatch();
  const [isOwner, setIsOwner] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user?.id === moment?.user?.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, moment]);

  const onClickEditBtn = useCallback(() => {
    if (user && isOwner) {
      router.push(`/country/edit?code=${moment?.code}&momentId=${moment?.id}`);
    }
  }, [user, isOwner, moment]);
  const onClickConfirmDelete = useCallback(() => {
    if (user && isOwner) {
      axios
        .delete(`/moment/${moment?.id}`)
        .then(() => {
          toastSuccessMessage("모멘트를 성공적으로 삭제했습니다.");
          router.push(`/country/${moment?.code}`);
        })
        .catch((error) => {
          toastErrorMessage(error);
          throw error;
        });
    }
  }, [user, isOwner, moment]);
  return (
    <MomentPostTitleWrapper>
      <NameSpace user={moment?.user} date={moment?.createdAt} />
      <div className="right-menu">
        {isOwner && (
          <>
            <li className="edit-btn">
              <a onClick={onClickEditBtn}>
                <EditOutlined />
              </a>
            </li>
            <Divider type="vertical" />
            <li className="delete-btn">
              <a
                onClick={() =>
                  toastConfirmMessage(
                    onClickConfirmDelete,
                    "정말 이 모멘트를 삭제할까요?",
                    "삭제해주세요."
                  )
                }
              >
                <DeleteOutlined />
              </a>
            </li>
          </>
        )}
      </div>
    </MomentPostTitleWrapper>
  );
};

export default MomentPostTitle;
